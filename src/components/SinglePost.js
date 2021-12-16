import React, {useEffect, useState} from "react";
import sanityClient from "../client";
import { useParams } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'
import 'react-pro-sidebar/dist/css/styles.css';

const blocksToHtml = require('@sanity/block-content-to-html')
const builder = imageUrlBuilder(sanityClient);
const client = require('@sanity/client')({
    projectId: 'zh0gxcfb',
    dataset: 'production',
    apiVersion: '2021-03-25',
    useCdn: true
})
// `h` is a way to build HTML known as hyperscript
// See https://github.com/hyperhype/hyperscript for more info
const h = blocksToHtml.h


const serializers = {
    types: {
        youtube: ({node}) => {
            const { url } = node
            const id = getYouTubeId(url)
            return (<YouTube videoId={id} />)
        },
        code: props => (
            h('pre', {className: props.node.language},
                h('code', props.node.code)
            )
        ),
    },
    marks: {
        link: ({mark, children}) => {
            const {slug = {}} = mark
            const href = `/${slug.current}`
            return <a href={href}>{children}</a>
        }
    }
}


function urlFor(source) {
    return builder.image(source);
}

export function SinglePost() {
    const [singlePost, setSinglePost] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        sanityClient.fetch(`*[slug.current == "${slug}"]{
                title,
                _id,
                startDate,
                endDate,
                slug,
                  mainImage{
                        asset->{
                            _id,
                            url
                        },
                        alt
                    },
                body,
                "name" : author->name,
                "authorImage" : author->image
            }`
        ).then((data) => setSinglePost(data[0]))
            .catch(console.error);
    }, [slug]);

    if(!singlePost){
        return <div>No Post Data</div>
    }

    return (
        <main className="bg-white min-h-screen p-12">

            <article className="container shadow-lg mx-auto rounded-lg">
                <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
                    <BlockContent
                        blocks={singlePost.body}
                        projectId="zh0gxcfb"
                        dataset="production"
                        serializers={serializers}
                    />
                </div>
            </article>
        </main>
    )
}

