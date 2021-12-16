import React, {useEffect, useState} from "react";
import sanityClient from "../client";
import BlockContent from "@sanity/block-content-to-react";


export function Project() {

    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"]{
                title,
                description,
                githubLink,
                appLink,
                tags
            }`
        ).then((data) => setProjectData(data))
            .catch(console.error);
    }, []);

    return (
        <main className="bg-gray-200 min-h-screen p-12">
            <section className="container  mx-auto">
                <h1 className="text-5xl text-indigo-900 flex justify-center cursive">My Projects</h1>
                <h2 className="text-lg text-indigo-900 flex justify-center mb-12">Welcome to my projects</h2>
                <section className="grid grid-cols-2 gap-8">
                    {projectData && projectData.map((project, index) => (
                    <span className="relative rounded-lg shadow-xl bg-gray-500 p-16">
                        <h1 className="text-indigo-900 text-3xl font-bold mb-2">
                         {project.title}
                        </h1>

                        <div className="space-x-4" key={index}>
                            <span>
                                <span role="img" aria-label="right pointer">👉🏾</span>
                                <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white  text-xl font-bold hover:underline hover:text-white"
                                >GitHub</a>
                            </span>
                            <span>
                                <span role="img" aria-label="right pointer">👉🏾</span>
                                <a
                                    href={project.appLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white  text-xl font-bold hover:underline hover:text-white"
                                >App Live Link</a>
                            </span>
                        </div>
                       <div className="px-16 max-w-full">
                            <BlockContent
                                blocks={project.description}
                                projectId="zh0gxcfb"
                                dataset="production"
                            />
                        </div>
                    </span>
                    ))}
                </section>
            </section>
        </main>
    )
}
