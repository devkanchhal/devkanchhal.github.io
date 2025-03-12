import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Connect() {
  return (
    <div className="text-center sm:py-10 px-10">
      <h2 className="text-3xl font-semibold">Let's connect</h2>
      <p className="text-gray-600 mt-2">
        Get in touch for opportunities or just to say hi! <span role="img" aria-label="wave">👋</span>
      </p>
      <div className="flex justify-center space-x-6 mt-6">
        <a 
          // CHANGE THIS TO MY LINKEDIN
          href="https://www.linkedin.com/in/your-profile" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center hover:scale-105 transition"
        >
          <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
        </a>

        <a
          href="mailto:devkanchhal@gmail.com"
          className="flex items-center justify-center hover:scale-105 transition"
        >
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
      </div>
    </div>
  )
}
