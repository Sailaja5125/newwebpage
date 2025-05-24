"use client";
import { useEffect, useState } from "react";

const messages = [
    "Calculating the 100000th decimal of pi...",
    "Trying really hard to load...",
    "Contacting extraterrestrials for assistance...",
    "Bribing the compiler ....",
    "Debugging using console.log ()",
    "Blaming the website team",
    "May after 1-1½ min loading"

];

const Loader = ({ timeElapsed }) => {
    const [message, setMessage] = useState("Initializing...");

    useEffect(() => {
        if (timeElapsed % 2 === 0) {
            setMessage(messages[Math.floor(Math.random() * messages.length)]);
        }
        if (timeElapsed % 200 === 0) {
            setMessage("Try turning off and on again...");
        }
    }, [timeElapsed]);

    return <p className="mt-4 text-lg">{message}</p>;
};

export default Loader;