import React from 'react'
import headshot from "../assets/headshot.png"

export default function About() {
  return (
    <section className="flex items-center justify-center pt-10 pb-20 md:pt-16">
      <div className="max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8 px-8 sm:px-6">
        {/* Profile Image */}
        <div className="flex justify-center col-span-1 mb-8 md:mb-0">
          <img
            src={headshot}
            alt="Profile"
            className="w-60 h-60 md:w-52 md:h-52 rounded-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="col-span-1 md:col-span-2 text-left">
          <h1 className="text-3xl md:text-3xl font-semibold text-slate-900">
            Hi, I’m <span className="bg-yellow-100 px-1 inline-block">Dev Kanchhal</span>
          </h1>
          <p className="text-lg text-gray-700 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nascetur lacus, adipiscing viverra turpis vitae velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="text-lg text-gray-700 mt-2">
            I coded this website with React and Tailwind CSS—check out the source code{" "}
            <a
              href="https://github.com/devkanchhal/portfolio-website"
              className="text-primary underline"
              target="_blank"
              rel="noopener noreferrer"
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
