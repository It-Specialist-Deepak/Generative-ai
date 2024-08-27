import React from 'react';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen bg-black text-gray-100 flex flex-col items-center mt-5">
        <div className="max-w-4xl p-8 bg-black bg-opacity-80 border border-gray-800 rounded-lg shadow-lg mt-16 mb-12">
          <h1 className="text-4xl font-bold mb-6 text-teal-400">About Us</h1>
          <p className="text-lg mb-6">
  Welcome to <strong className="text-teal-400">Generative AI</strong>! We are at the forefront of artificial intelligence, utilizing the power of the Google Gemini API to develop innovative solutions that push the boundaries of technology. Our flagship product, <strong className="text-teal-400">Generative AI</strong>, represents our commitment to harnessing cutting-edge advancements.
</p>
<p className="text-lg mb-6">
  <strong className="text-teal-400">Generative AI</strong> is designed to transform how you interact with digital content. By leveraging the state-of-the-art Google Gemini API, our tool generates high-quality, contextually relevant content to meet a diverse range of needs—from creative writing to automated responses.
</p>
<p className="text-lg mb-6">
  Our mission is to empower businesses and individuals with groundbreaking AI tools that enhance productivity and creativity. We are driven by a passion for innovation and a commitment to delivering exceptional support to our users.
</p>
<p className="text-lg">
  Thank you for choosing <strong className="text-teal-400">Generative AI</strong> and joining us on this exciting journey. We look forward to helping you achieve your goals with our advanced AI solutions powered by the Google Gemini API!
</p>

        </div>

        <div className="w-full max-w-6xl mx-auto p-6 flex flex-col items-center text-center">
          <div className="mb-12">
            <p className="text-2xl font-semibold mb-4">Available for All the Browsers!</p>
            <img 
              src="/images/gearative_chatBoart.png" 
              alt="ChatBot" 
              className="w-full max-w-max mx-auto rounded-lg shadow-lg"
            />
          </div> 

          <div>
            <p className="text-2xl font-semibold mb-4"> Also Available for Phones!</p>
            <img 
              src="/images/genartive_phone.png" 
              alt="Generative AI on Phones" 
              className="w-full max-w-max mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-black">
          <div className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Generative AI. All rights reserved | developed by developer_deepak
          </div>
        </div>
    
    </>
  );
};

export default About;
