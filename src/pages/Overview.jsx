import React from 'react';
import Navbar from '../components/Navbar';

const Overview = () => {
  return (
    <>
    <Navbar/>
    <section className="bg-black py-12 mt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-4">
           Overview 
        </h2>
        <p className="text-white text-xl">
        Discover the future of communication with our AI-powered chatbot. Designed to provide seamless interactions, our chatbot leverages advanced natural language processing to understand and respond to user queries with precision and context. Whether for customer support, personal assistance, or interactive experiences, our AI chatbot is here to enhance engagement and streamline communication.        </p>
      </div>
    </section>
    <div className='flex justify-center bg-black '>
      <div className="w-full max-w-6xl mx-auto p-6 flex flex-col items-center text-center">
        <div className="mb-12">
          <p className="text-2xl font-semibold mb-4 text-white">Ask me Anything ?</p>
          <img 
            src="/images/gearative_chatBoart.png" 
            alt="ChatBot" 
            className="w-full max-w-max mx-auto rounded-lg shadow-lg"/>
        </div> 
      </div>
      </div> 

      <div className='flex justify-center bg-black '>
      <div className="w-full max-w-6xl mx-auto p-6 flex flex-col items-center text-center">
        <div className="mb-12">
          <p className="text-2xl font-semibold mb-4 text-white">Ask me Mathmatical Problems ?</p>
          <img 
            src="/images/Mathmatical_problem.png" 
            alt="ChatBot" 
            className="w-full max-w-max mx-auto rounded-lg shadow-lg"/>
        </div> 
      </div>
      </div> 

      <div className='flex justify-center bg-black '>
      <div className="w-full max-w-6xl mx-auto p-6 flex flex-col items-center text-center">
        <div className="mb-12">
          <p className="text-2xl font-semibold mb-4 text-white">Ask me Coding Problems ?</p>
          <img 
            src="/images/coding_problem.png" 
            alt="ChatBot" 
            className="w-full max-w-max mx-auto rounded-lg shadow-lg"/>
        </div> 
      </div>
      </div> 

      <div className='flex justify-center bg-black '>
      <div className="w-full max-w-6xl mx-auto p-6 flex flex-col items-center text-center">
        <div className="mb-12">
          <p className="text-2xl font-semibold mb-4 text-white">Ask me General Questions ?</p>
          <img 
            src="/images/general_problem.png" 
            alt="ChatBot" 
            className="w-full max-w-max mx-auto rounded-lg shadow-lg"/>
        </div> 
      </div>
      </div> 
      <div className="flex justify-center bg-black">
          <div className="text-center text-white text-sm">
            © {new Date().getFullYear()} Generative AI. All rights reserved | developed by developer_deepak
          </div>
        </div>
     
    </>
  );
}

export default Overview;
