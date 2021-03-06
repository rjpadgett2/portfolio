import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import { Link } from 'react-router-dom';

export function Post() {

    const [postData, setPost] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "post"]{
                title,
                slug,
                startDate,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`
        ).then((data) => setPost(data))
            .catch(console.error);
    }, []);


    return (
        <main className="bg-gray-200 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex text-indigo-900 justify-center cursive">Work History</h1>
                <h2 className="text-lg text-indigo-900 flex justify-center mb-12">This page displays all professional work and projects</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {postData && postData.sort((a,b) => new Date(a.startDate) < new Date(b.startDate) ? 1 : -1).map((post, index) => (
                    <article>
                        <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                            <span className="block h-64 relative rounded shadow leading-snug bg-white border-lg-8 border-yellow-400"
                                    key={index}>
                                <img
                                    src={post.mainImage.asset.url}
                                    alt={post.mainImage.alt}
                                    className="w-full h-full rounded-r object-cover absolute"
                                />
                                <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                                    <h3 className="text-gray-800 text-lg font-blog px-3 py-4 bg-gray-300 text-blue-900 bg-opacity-75 rounded">
                                        {post.title}
                                    </h3>
                                </span>
                            </span>
                        </Link>
                    </article>
                    ))}
                </div>
            </section>
        </main>
    )
}
