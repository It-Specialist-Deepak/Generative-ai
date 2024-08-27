import React from 'react'

const Intro = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black px-6 py-12">
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
          Generative AI
        </h1>
        <p className="text-sm md:text-base lg:text-lg text-gray-500 mb-8">
          Powered by Gemini
        </p>

      </div>
    </div>
  )
}

export default Intro ;