import React, {useEffect, useState} from "react";
import sanityClient from "../client";


export function Project() {

    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"]{
                title,
                date,
                place,
                description,
                projectType,
                link,
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
                    <article className="relative rounded-lg shadow-xl bg-gray-500 p-16">
                        <h3 className="text-indigo-900 text-3xl font-bold mb-2 hover:text-white">
                            <a
                                href={project.link}
                                alt={project.title}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {project.title}
                            </a>
                        </h3>

                        <div className="text-white text-xs space-x-4" key={index}>
                            <span>
                                <strong className="font-bold">Finished On</strong>:{" "}
                                {new Date(project.date).toLocaleDateString()}
                            </span>
                            <span>
                                <strong className="font-bold">Company</strong>:{" "}
                            </span>
                            <span>
                               <strong className="font-bold">Type</strong>:{" "}
                                {project.projectType}
                            </span>
                            <p className="my-6 text-lg text-white leading-relaxed">
                                {project.description}
                            </p>
                            <a
                                href={project.link}
                                alt={project.title}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-900  text-xl font-bold hover:underline hover:text-white"
                            > View Project{" "}
                                <span role="img" aria-label="right pointer">👉🏾</span>
                            </a>


                        </div>
                    </article>
                    ))}
                </section>
            </section>
        </main>
    )
}
