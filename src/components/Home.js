import React from "react";
import image from "../scales.jpeg";

export function Home() {
    return (
        <main>
            <img src={image} alt="Indigo Snake" className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 pc-8">
                <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">
                    Welcome to Coldblooded
                </h1>
            </section>
        </main>
    )
}
