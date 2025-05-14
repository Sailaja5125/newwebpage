"use client"
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQAccordion = ({ faqs = defaultFaqs, title = "Frequently Asked Questions", subtitle = "Find answers to the most common questions" }) => {
  // State to track which FAQ item is open
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle function to open/close accordion items
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-transparent rounded-lg shadow text-white ">
      <div className="px-4 py-5 sm:px-6">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <p className="mt-1 text-sm text-gray-400">{subtitle}</p>
      </div>
      
      <div className="border-t bg-transparent">
        {faqs.map((item, index) => (
          <div key={index} className="border-b bg-transparent last:border-b-0">
            <button
              className="flex justify-between items-center w-full px-4 py-5 sm:px-6 text-left hover:bg-transparent transition-colors"
              onClick={() => toggleAccordion(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <span className="text-lg font-medium text-white">{item.question}</span>
              {openIndex === index ? 
                <ChevronUp className="h-5 w-5 text-gray-400 flex-shrink-0" /> : 
                <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
              }
            </button>
            
            {openIndex === index && (
              <div 
                id={`faq-answer-${index}`}
                className="px-4 pb-5 sm:px-6 text-gray-300 bg-transparent rounded-b animate-fadeIn"
              >
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Default FAQs in case none are provided
const defaultFaqs = [
    {
        question: "When and where is the event happening?",
        answer: "📅 Date: June 20-21, 2025\n📍 Venue: Anurag University, Hyderabad"
      },
      {
        question: "Who can attend?",
        answer: "Any undergraduate student with a passion for innovation, technology, and creativity! Whether you're a beginner or an expert, this convention is designed for students looking to learn, collaborate, and showcase their skills."
      },
      {
        question: "How do I register?",
        answer: "Click on the \"REGISTER\" button on the homepage and follow the steps."
      },
      {
        question: "Is there a registration fee?",
        answer: "Yes. The registration fee varies:\n\nCSI Members: Discounted pricing available\nNon-CSI Members: Standard pricing applies\n\nIf you have registered as a CSI member, please ensure you bring your CSI membership card for verification. Failure to do so may result in paying the standard registration fee."
      },
      {
        question: "What should I bring?",
        answer: "• A valid student ID card\n• Your registration confirmation\n• A laptop\n• CSI membership card (if availing the discounted fee)"
      },
      {
        question: "What kind of sessions can I expect?",
        answer: "🎤 Keynotes from industry leaders\n💻 Hackathons\n🎨 Design-a-thon\n🔍 Project expos"
      },
      {
        question: "Will there be food and refreshments?",
        answer: "Yes! There will be food stalls, on-campus cafeterias, and networking lunch sessions included for registered attendees."
      },
      {
        question: "How do I participate in competitions and challenges?",
        answer: "Once registered, you'll receive details on how to sign up for specific competitions, hackathons, and pitch battles. Spots are limited, so stay updated!"
      },
      {
        question: "Is accommodation provided?",
        answer: "Yes, accommodation will be provided for outstation attendees."
      },
      {
        question: "Can I participate if I'm new to coding?",
        answer: "Absolutely! The convention is open to all skill levels, and we encourage learning, collaboration, and mentorship throughout the event."
      },
      {
        question: "Do I need to know coding to participate in Design-a-thon?",
        answer: "No! The Design-a-thon focuses on creativity, problem-solving, and design thinking, not coding."
      },
      // {
      //   question: "Can I exhibit a team project at the Project Expo?",
      //   answer: "Yes! Team-based projects are encouraged, if they align with the theme and guidelines."
      // },
      {
        question: "Will there be prizes or recognition?",
        answer: "Yes, standout projects will be recognized and awarded by a panel of experts."
      }
];

export default FAQAccordion;