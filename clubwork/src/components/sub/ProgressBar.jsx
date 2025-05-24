"use client";
import React from "react";

const ProgressBar = ({ progress }) => {
    return (
        <div className="w-1/2 h-4 bg-neutral-700 rounded-full overflow-hidden">
            <div
                className="h-full bg-blue-300 transition-all duration-500"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    );
};

export default ProgressBar;