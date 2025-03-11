import React from 'react'

export default function Connect() {
  return (
    <div className="text-center py-10">
      <h2 className="text-3xl font-semibold">Let's connect</h2>
      <p className="text-gray-600 mt-2">
        Get in touch for opportunities or just to say hi! <span role="img" aria-label="wave">👋</span>
      </p>
      <div className="flex justify-center space-x-6 mt-6">
        <div className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-lg">
          {/* Replace with LinkedIn icon */}
          <span className="text-lg">in</span>
        </div>
        <div className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-lg">
          {/* Replace with Email icon */}
          <span className="text-lg">✉</span>
        </div>
        <div className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-lg">
          {/* Replace with Medium icon */}
          <span className="text-lg">M</span>
        </div>
      </div>
    </div>
  )
}
