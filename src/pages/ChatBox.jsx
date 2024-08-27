import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

const ChatBox = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [copied, setCopied] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [loading, setLoading] = useState(false);

  async function generateAnswer() {
    setAnswer("");
    setCopied(false); // Reset copied state
    setShowAnswer(false); // Hide answer before fetching
    setLoading(true); // Show loading animation

    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${import.meta.env.VITE_API_KEY}`,
        method: "post",
        data: {
          contents: [
            {
              parts: [{ text: question }]
            }
          ]
        }
      });

      setAnswer(response.data.candidates[0].content.parts[0].text);
      setShowAnswer(true); // Show answer after fetching
    } catch (error) {
      setAnswer("An error occurred. Please try again.");
      setShowAnswer(true); // Show error message after fetching
    } finally {
      setLoading(false); // Hide loading animation
    }
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(answer).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Hide "Copied!" message after 2 seconds
    }).catch(() => {
      // Handle any copy errors if needed
      setCopied(false);
    });
  }

  return (
    <>
      <Navbar />
      <div className='w-full h-screen flex flex-col pt-16'>
        {/* Main content */}
        <div className="flex-grow flex items-center justify-center bg-gradient-to-r from-black from-10% via-slate-950 via-50% to-black to-90% ...	 relative pb-20">
          {/* Flex container for the input and answer */}
          <div className="flex flex-col items-start w-full max-w-xl">

            {/* Conditionally render the question div */}
            {answer && (
  <div className="w-auto pr-1 mt-4 m-2 ml-4 sm:ml-6 md:ml-8 lg:ml-10 text-gray-100 bg-slate-950 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300 focus:ring-gray-500">
    <div className="text-xl p-2">{question}</div>
  </div>
)}


        <pre 
      className={`w-auto p-4 mb-4  rounded-lg border shadow-md whitespace-pre-wrap transition-all duration-500 ${
         showAnswer ? 'opacity-100 bg-slate-950 text-gray-300 border-gray-900 shadow-cyan-400' : 'opacity-0 bg-transparent text-transparent border-transparent shadow-none'
      } mx-4 sm:mx-6 md:mx-8 lg:mx-10`}
    >
  <div className='flex justify-center'>
    <img src="/images/logo.png" alt="Logo" className="h-12 pb-4" />
  </div>
  {answer || ""}
  </pre>

            {/* Loading animation */}
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
              </div>
            )}
          </div>

          {answer && (
            <button
              onClick={copyToClipboard}
              className="absolute top-7 right-2.5 p-2  w-10 bg-black rounded-full text-white shadow-lg transition duration-300 hover:bg-gray-600"
              aria-label="Copy to clipboard"
            >
              <i className="fas fa-copy"></i>
            </button>
          )}

          {copied && (
            <div className="absolute top-4 right-16 p-2 bg-green-600 text-white rounded-lg shadow-lg">
              Copied Successfully!
            </div>
          )}
        </div>

        {/* Fixed bottom section */}
        <div className="fixed bottom-0 left-0 right-0 bg-black p-3 flex justify-center items-center gap-2 z-50">
          <input
            type="text"
            className="w-full max-w-xl p-3 text-gray-100 bg-slate-950 rounded-full border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300"
            placeholder="Type your question here..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <button
            onClick={generateAnswer}
            className="w-11 h-12 flex items-center justify-center text-lg font-semibold text-gray-100 rounded-full shadow-lg transition duration-300 hover:bg-slate-950"
          >
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default ChatBox;
