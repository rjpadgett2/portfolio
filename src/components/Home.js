import React from "react";
import image from "../blocks.jpeg";

export function Home() {
    return (
        <main>
            <img src={image} alt="Blocks" className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 pc-8">
                <h1 className="text-6xl text-blue-900 font-bold cursive leading-none lg:leading-snug home-name">
                    Reggie's URL
                </h1>
            </section>
        </main>
    )
}
