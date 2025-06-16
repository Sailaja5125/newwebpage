import React from "react";

const TimelineItem = ({ time, activity, category, isHighlight }) => (
  <div className={`relative pl-8 pb-8 border-l-2 border-neutral-700 last:border-l-0 last:pb-0 group`}>
    {category !== "break" && (
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white group-hover:bg-indigo-300 transition-all duration-300 shadow-[0_0_0_3px_rgba(16,16,20,1)] group-hover:shadow-[0_0_0_3px_rgba(16,16,20,1),0_0_10px_5px_rgba(99,102,241,0.5)]"></div>
    )}
    <div className={`p-4 rounded-lg ${isHighlight ? "bg-neutral-800 ring-1 ring-indigo-400/50" : "bg-neutral-800/50"} transition-all hover:bg-neutral-800/80 backdrop-blur-sm`}>
      <p className={`font-mono text-sm ${isHighlight ? "text-indigo-300" : "text-neutral-400"}`}>{time}</p>
      <h3 className={`mt-1 text-lg font-medium ${isHighlight ? "text-white" : "text-neutral-200"}`}>
        {activity}
      </h3>
      {category && (
        <span className={`inline-block mt-2 px-2 py-1 text-xs rounded-full ${
          category === "key-event" ? "bg-indigo-900/70 text-indigo-200" :
          category === "competition" ? "bg-purple-900/70 text-purple-200" :
          category === "critical" ? "bg-rose-900/70 text-rose-200" :
          "bg-neutral-700/50 text-neutral-300"
        }`}>
          {category.replace("-", " ")}
        </span>
      )}
    </div>
  </div>
);

const DaySection = ({ day, date, theme, children }) => (
  <div className="mb-16 relative">
    {/* Cosmic decoration */}
    <div className="absolute -left-6 top-8 w-3 h-3 rounded-full bg-white/80 animate-pulse"></div>
    <div className="absolute left-1/4 top-24 w-1 h-1 rounded-full bg-indigo-400/70 animate-pulse"></div>
    
    <div className="flex items-center mb-8 relative z-10">
      <span className="text-4xl mr-3">{day === 1 ? "🌌" : "🚀"}</span>
      <div>
        <h2 className="text-2xl font-bold text-white">
          <span className="text-indigo-300/80">Day {day}</span> • {date}
        </h2>
        <p className="text-neutral-400 font-light text-sm mt-1 tracking-wider">THEME: {theme}</p>
      </div>
    </div>
    <div className="space-y-6 relative z-10">{children}</div>
  </div>
);

export default function ConventionTimeline() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white p-6 md:p-12 bg-cover bg-fixed bg-blend-overlay">
      {/* Cosmic overlay */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white/30"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              opacity: Math.random() * 0.8 + 0.2
            }}
          />
        ))}
      </div>

      <div className="relative max-w-5xl mx-auto backdrop-blur-sm bg-neutral-900/70 rounded-2xl p-8 md:p-12 border border-neutral-800/50 shadow-xl shadow-indigo-900/10">
        <header className="mb-16 text-center relative">
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-indigo-900/20 blur-3xl"></div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-white">
            CSI AVENSIS 2K25
          </h1>
          <h2 className="text-xl md:text-2xl font-light text-neutral-300 mb-4 tracking-wider">
            REGIONAL CONVENTION TIMELINE
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto my-4"></div>
          <p className="text-neutral-400 max-w-3xl mx-auto text-sm md:text-base">
            Journey through two days of cosmic-scale innovation and stellar achievements
          </p>
          <p className="text-red-400 max-w-3xl mx-auto text-sm md:text-base">
            All Participants are informed to attend all the events and be present throughout the timeline
          </p>
        </header>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline center line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neutral-700 to-transparent -z-0"></div>

          <DaySection day={1} date="20-06-2025" theme="Cosmic Innovation">
            <TimelineItem 
              time="09:00 - 09:45 AM" 
              activity="Registrations" 
              category="logistics" 
            />
            <TimelineItem 
              time="09:45 - 10:20 AM" 
              activity="Inaugral Ceremony" 
              category="key-event" 
              isHighlight 
            />
            <TimelineItem 
              time="10:20 - 10:25 AM" 
              activity="Ignition Sequence (Lamp Lighting)" 
              category="ceremonial" 
            />
            <TimelineItem 
              time="10:30 - 11:00 AM" 
              activity="Mission Briefing (Dignitaries)" 
              category="speeches" 
            />
            <TimelineItem 
              time="11:00 - 11:20 AM" 
              activity="Command Center Address" 
              category="key-event" 
              isHighlight 
            />
            <TimelineItem 
              time="11:30 - 12:15 PM" 
              activity="Session I: Quantum Frontiers" 
              category="key-session" 
              isHighlight 
            />
            <TimelineItem 
              time="12:15 - 01:00 PM" 
              activity="Session II: IT Nebula" 
              category="key-session" 
              isHighlight 
            />
            <TimelineItem 
              time="01:00 - 02:00 PM" 
              activity="Orbital Refueling (Lunch)" 
              category="networking" 
            />
            <TimelineItem 
              time="02:00 - 02:15 PM" 
              activity="Hackathon Briefing" 
              category="prep" 
            />
            <TimelineItem 
              time="02:15 - 05:00 PM" 
              activity="Code Nebula Marathon" 
              category="competition" 
              isHighlight 
            />
            <TimelineItem 
              time="05:00 - 06:00 PM" 
              activity="Cosmic Tea Break" 
              category="social" 
            />
            <TimelineItem 
              time="06:00 - 08:30 PM" 
              activity="First Evaluation Orbit" 
              category="critical" 
              isHighlight 
            />
            <TimelineItem 
              time="08:30 - 09:30 PM" 
              activity="Galactic Dinner" 
              category="networking" 
            />
            <TimelineItem 
              time="09:30 - 11:30 PM" 
              activity="Midnight Coding Orbit" 
              category="competition" 
            />
            <TimelineItem 
              time="11:30 PM - 12:00 AM" 
              activity="Stellar Campfire" 
              category="social" 
            />
            <TimelineItem 
              time="12:00 - 02:00 AM" 
              activity="Deep Space Hacking" 
              category="competition" 
            />
            <TimelineItem 
              time="02:00 - 04:00 AM" 
              activity="Final Evaluation Burn" 
              category="critical" 
              isHighlight 
            />
            <TimelineItem 
              time="04:00 - 05:30 AM" 
              activity="Approaching Light Speed" 
              category="competition" 
            />
          </DaySection>

          <DaySection day={2} date="21-06-2025" theme="Celestial Recognition">
            <TimelineItem 
              time="05:30 - 06:15 AM" 
              activity="Yoga" 
              category="wellness" 
            />
            <TimelineItem 
              time="06:15 - 07:30 AM" 
              activity="Breakfast" 
              category="logistics" 
            />
            <TimelineItem 
              time="07:30 - 10:30 AM" 
              activity="Hackathon " 
              category="competition" 
            />
            <TimelineItem 
              time="10:30 - 12:30 PM" 
              activity="Grand Finale Evaluation" 
              category="critical" 
              isHighlight 
            />
            <TimelineItem 
              time="12:30 - 01:30 PM" 
              activity="Lunch break" 
              category="break" 
            />
            <TimelineItem 
              time="01:30 - 02:15 PM" 
              activity="Honoring Mission Control" 
              category="appreciation" 
            />
            <TimelineItem 
              time="02:15 - 03:00 PM" 
              activity="Mission Debrief" 
              category="key-event" 
              isHighlight 
            />
            <TimelineItem 
              time="03:00 - 04:30 PM" 
              activity="Cosmic Awards Ceremony" 
              category="highlight" 
              isHighlight 
            />
          </DaySection>
        </div>
        <footer className="mt-16 text-center text-neutral-950 text-sm">
          <p>CSI Regional Convention • AVENSIS 2K25</p>
          <p className="mt-2">To infinity and beyond!</p>
        </footer>
      </div>
    </div>
  );
}