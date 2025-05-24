"use client";
import React, { useState } from "react";
import Card from "../../../components/sub/DomainCard";

function Page() {
  const [activeTab, setActiveTab] = useState("domains");

  return (
    <div className="bg-neutral-900 min-h-screen w-full">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Navigation Tabs */}
        <div className="flex mb-8 border-b border-white/10">
          <button
            onClick={() => setActiveTab("domains")}
            className={`px-6 py-3 font-medium text-lg ${
              activeTab === "domains"
                ? "text-white border-b-2 border-white"
                : "text-white/60 hover:text-white/80"
            }`}
          >
            Domains
          </button>
          <button
            onClick={() => setActiveTab("rules")}
            className={`px-6 py-3 font-medium text-lg ${
              activeTab === "rules"
                ? "text-white border-b-2 border-white"
                : "text-white/60 hover:text-white/80"
            }`}
          >
            Rules & Regulations
          </button>
        </div>

        {/* Domains Section */}
        {activeTab === "domains" && (
          <>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-zentry font-bold text-white mb-6">
              Domains
            </h1>
            <div className="flex flex-wrap justify-center gap-4 items-center">
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                <Card
                  img="/img/webdomain.png"
                  title="Web/App"
                  description="🌐 Web: Craft seamless, futuristic digital experiences that captivate and innovate."
                />
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                <Card
                  img="/img/Aimldomain.png"
                  title="Artificial Intelligence and Machine Learning"
                  description="🤖 Artificial Intelligence and Machine Learning: Unleash the power of intelligence—where machines learn, and ideas evolve."
                />
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                <Card
                  img="/img/iotdomain.png"
                  title="📡 IoT"
                  description={"Bridge the physical and digital realms with smart, connected innovations"}
                />
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                <Card
                  img="/img/bandsdomain.png"
                  title="Blockchain & Security"
                  description="🔐 Blockchain & Security: Fortify the digital frontier with trust, transparency, and resilience."
                />
              </div>
            </div>
          </>
        )}

        {/* Rules Section */}
        {activeTab === "rules" && (
          <div className="text-white">
            <div className="flex items-center mb-8">
              <span className="text-4xl mr-3">🚀</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-zentry font-bold">
                Hackathon Rules
              </h1>
            </div>

            {/* Rules Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              <div className="bg-neutral-800 rounded-lg p-6 border border-white/10 hover:shadow-lg hover:shadow-white/5 transition-all">
                <div className="flex items-center mb-4">
                  <div className="bg-white text-neutral-900 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-3">
                    1
                  </div>
                  <h3 className="text-xl font-bold">Team Size</h3>
                </div>
                <p className="text-white/80">
                  2-4 members per team. Teams must register all members before the event starts.
                </p>
              </div>

              <div className="bg-neutral-800 rounded-lg p-6 border border-white/10 hover:shadow-lg hover:shadow-white/5 transition-all">
                <div className="flex items-center mb-4">
                  <div className="bg-white text-neutral-900 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-3">
                    2
                  </div>
                  <h3 className="text-xl font-bold">Time Limit</h3>
                </div>
                <p className="text-white/80">
                  24-hour development window. The countdown begins once the problem statements are announced.
                </p>
              </div>

              <div className="bg-neutral-800 rounded-lg p-6 border border-white/10 hover:shadow-lg hover:shadow-white/5 transition-all">
                <div className="flex items-center mb-4">
                  <div className="bg-white text-neutral-900 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-3">
                    3
                  </div>
                  <h3 className="text-xl font-bold">Theme Adherence</h3>
                </div>
                <p className="text-white/80">
                  Projects must align with the provided problem statements. Teams must clearly indicate which statement they are addressing.
                </p>
              </div>

              <div className="bg-neutral-800 rounded-lg p-6 border border-white/10 hover:shadow-lg hover:shadow-white/5 transition-all">
                <div className="flex items-center mb-4">
                  <div className="bg-white text-neutral-900 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-3">
                    4
                  </div>
                  <h3 className="text-xl font-bold">Originality</h3>
                </div>
                <p className="text-white/80">
                  No pre-built solutions; all code must be written during the event. Open-source libraries and frameworks are permitted.
                </p>
              </div>

              <div className="bg-neutral-800 rounded-lg p-6 border border-white/10 hover:shadow-lg hover:shadow-white/5 transition-all">
                <div className="flex items-center mb-4">
                  <div className="bg-white text-neutral-900 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-3">
                    5
                  </div>
                  <h3 className="text-xl font-bold">Mentor Support</h3>
                </div>
                <p className="text-white/80">
                  Teams can seek guidance but must build solutions independently. Mentors cannot directly contribute to the code.
                </p>
              </div>

              <div className="bg-neutral-800 rounded-lg p-6 border border-white/10 hover:shadow-lg hover:shadow-white/5 transition-all">
                <div className="flex items-center mb-4">
                  <div className="bg-white text-neutral-900 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-3">
                    6
                  </div>
                  <h3 className="text-xl font-bold">Code Submission</h3>
                </div>
                <p className="text-white/80">
                  Submit source code and documentation before the deadline. Include a README with setup instructions and demo links.
                </p>
              </div>

              <div className="bg-neutral-800 rounded-lg p-6 border border-white/10 hover:shadow-lg hover:shadow-white/5 transition-all">
                <div className="flex items-center mb-4">
                  <div className="bg-white text-neutral-900 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-3">
                    7
                  </div>
                  <h3 className="text-xl font-bold">Plagiarism</h3>
                </div>
                <p className="text-white/80">
                  Strictly prohibited; teams found violating will be disqualified. All submissions will undergo plagiarism checks.
                </p>
              </div>

              <div className="bg-neutral-800 rounded-lg p-6 border border-white/10 hover:shadow-lg hover:shadow-white/5 transition-all">
                <div className="flex items-center mb-4">
                  <div className="bg-white text-neutral-900 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-3">
                    8
                  </div>
                  <h3 className="text-xl font-bold">AI/ML Domain</h3>
                </div>
                <p className="text-white/80">
                  Usage of API keys for AI/ML models is strictly prohibited. All models must be trained and executed locally or through open-source frameworks.
                </p>
              </div>
            </div>

            {/* Judging Criteria */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-white/20">
                Judging Criteria
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-neutral-800/60 p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Innovation (25%)</h3>
                  <p className="text-white/70">
                    Originality of the idea and creative problem-solving approach
                  </p>
                </div>

                <div className="bg-neutral-800/60 p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Functionality (25%)</h3>
                  <p className="text-white/70">
                    Working implementation with minimal bugs and errors
                  </p>
                </div>

                <div className="bg-neutral-800/60 p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">UI/UX (20%)</h3>
                  <p className="text-white/70">
                    User interface design and overall experience
                  </p>
                </div>

                <div className="bg-neutral-800/60 p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Scalability (15%)</h3>
                  <p className="text-white/70">
                    Potential for growth and adaptation to larger user bases
                  </p>
                </div>

                <div className="bg-neutral-800/60 p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Feasibility (15%)</h3>
                  <p className="text-white/70">
                    Practical implementation and market viability
                  </p>
                </div>
              </div>
            </div>

            {/* Important Notes */}
            <div className="bg-neutral-800 border-l-4 border-white p-6 rounded-lg mb-10">
              <h3 className="text-xl font-bold mb-3">Important Notes</h3>
              <ul className="space-y-2 text-white/80">
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span>All team members must be present during the final presentation.</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span>Teams must respect intellectual property rights.</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span>The organizing committee reserves the right to make changes to the rules if necessary.</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span>All decisions made by the judges are final.</span>
                </li>
              </ul>
            </div>

            {/* Final Reminder */}
            <div className="bg-white/10 border-2 border-dashed border-white/30 p-6 rounded-lg text-center mb-6">
              <p className="text-xl font-bold">
                Remember: The hackathon is not just about winning, but learning, collaborating, and creating something amazing!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Page;