import React from 'react'
import logo from "../assets/logo.png";

export default function About() {
  return (
    <section className="flex items-start justify-center min-h-screen py-10 md:py-20">
      <div className="max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Profile Image */}
        <div className="flex justify-center col-span-1">
          <img
            src={logo}
            alt="Profile"
            className="w-52 h-52 md:w-52 md:h-52 rounded-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className='col-span-2'>
          <h1 className="text-3xl font-bold text-slate-900">Hi, I’m <span className="text-primary">Dev Kanchhal</span></h1>
          <p className="text-lg text-gray-700 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nascetur lacus, adipiscing viverra turpis vitae velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. .  Bibendum maecenas elit interdum enim amet ut ullamcorper potenti
          </p>
          <p className="text-lg text-gray-700 mt-2">
            I coded this website with React—check out the source code{" "}
            <a
              // REPLACE WITH GITHUB LINK
              href="https://your-source-code-link.com"
              className="text-primary underline"
            >
              here
            </a>
            !
          </p>
        </div>
      </div>
    </section>
  );
}
