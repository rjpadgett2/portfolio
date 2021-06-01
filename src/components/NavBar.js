import React from "react";
import { NavLink}  from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export function NavBar() {
    return (
        <header className="bg-blue-900">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink
                        to="/"
                        exact
                        className="inflex-flex items-center py-6 px-3 mr-4 text-yellow-400 hover:text-yellow-100 text-4xl font-bold cursive tracking-widest"
                        activeClassName="text-white"
                    >
                        Reggie
                    </NavLink>
                    <NavLink
                        to="/post"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-yellow-400 hover:text-yellow-100"
                        activeClassName="text-gray-100 bg-gray-900"
                    >
                        Blog Post
                    </NavLink>
                    <NavLink
                        to="/project"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-yellow-400 hover:text-yellow-100"
                        activeClassName="text-gray-100 bg-gray-900"
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        to="/about"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-yellow-400 hover:text-yellow-100"
                        activeClassName="text-gray-100 bg-gray-900"
                    >
                        About Me
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://www.instagram.com/c0deblooded/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}}/>
                </div>
            </div>
        </header>
    )
}
