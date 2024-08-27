import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Navbar from '../components/Navbar';

function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen bg-black px-6 pt-12">
        <div className="flex-grow flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
            Generative AI
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-gray-500 mb-8">
            Powered by Gemini
          </p>
          <Link
            to="/ChatBox" // Use Link component for navigation
            className="inline-block px-4 py-2 text-lg font-semibold text-gray-900 transition duration-300 bg-white rounded-lg shadow-lg hover:bg-gray-200"
          >
            Get Started
          </Link>
        </div>
        <div className="flex justify-center">
          <div className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Generative AI. All rights reserved | developed by developer_deepak
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
