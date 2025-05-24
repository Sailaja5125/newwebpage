"use client";
import { useEffect, useState } from "react";

import ProgressBar from "./ProgressBar";
import Loader from "./Loader";

const LoadingSimulator = () => {
    const [timeElapsed, setTimeElapsed] = useState(0);
    const [progress, setProgress] = useState(0);
    const [finished, setFinished] = useState(false);

    useEffect(() => {
        if (timeElapsed >= 5000) {
            setFinished(true);
            return;
        }

        const interval = setInterval(() => {
            setTimeElapsed(prev => prev + 1);
            setProgress(Math.min(100, (timeElapsed / 1000) * 100));
        }, 1000);

        return () => clearInterval(interval);
    }, [timeElapsed]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-900 text-white">
            {!finished ? (
                <>
                    <h1 className="text-3xl font-bold mb-4">Loading...</h1>
                    <ProgressBar progress={progress} />
                    <Loader timeElapsed={timeElapsed} />
                </>
            ) : (
    <>
    <div className="flex flex-col items-center justify-center mt-10 p-6  rounded-lg shadow-2xl">
        {/* Meme Image */}
        <img src="/img/meme.jpg" alt="Meme" className="w-80 rounded-xl shadow-lg border border-gray-500" />
        
        {/* Main Heading */}
        <h1 className="text-3xl font-bold text-white mt-6">We just used Talk No Jutsu</h1>
        
        {/* Subheading with Gradient Effect */}
        <h2 className="text-xl font-semibold text-gray-300 mt-2">
            Will reveal Problem Statements on 
            
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text font-bold m-1">
                20th June
            </span>
        </h2>
        
        {/* Quote Box */}
        <blockquote className="mt-6 text-lg font-semibold italic text-gray-200 text-center px-6 py-4 bg-gray-800 rounded-lg shadow-lg border-l-4 border-blue-500">
            "Real devs don't come prepared—they adapt and brace for impact."
        </blockquote>
    </div>
</>
            )}
        </div>
    );
};

export default LoadingSimulator;