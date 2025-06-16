"use client"

const TimelineItem = ({ time, activity, category, isHighlight }) => (
  <div className={`relative pl-8 pb-6 border-l-2 border-gray-700 last:border-l-0 last:pb-0 group`}>
    {category !== "break" && (
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-500 group-hover:bg-indigo-300 transition-colors"></div>
    )}
    <div className={`p-4 rounded-lg ${isHighlight ? "bg-gray-800 ring-1 ring-indigo-400" : "bg-gray-900"} transition-all hover:bg-gray-800`}>
      <p className={`font-mono text-sm ${isHighlight ? "text-indigo-300" : "text-gray-400"}`}>{time}</p>
      <h3 className={`mt-1 text-lg font-medium ${isHighlight ? "text-white" : "text-gray-200"}`}>
        {activity}
      </h3>
      {category && (
        <span className={`inline-block mt-2 px-2 py-1 text-xs rounded-full ${
          category === "key-event" ? "bg-purple-900 text-purple-200" :
          category === "competition" ? "bg-blue-900 text-blue-200" :
          category === "critical" ? "bg-red-900 text-red-200" :
          "bg-gray-700 text-gray-300"
        }`}>
          {category.replace("-", " ")}
        </span>
      )}
    </div>
  </div>
);

const DaySection = ({ day, date, theme, children }) => (
  <div className="mb-12">
    <div className="flex items-center mb-6">
      <span className="text-4xl mr-3">{day === 1 ? "🌙" : "☀️"}</span>
      <div>
        <h2 className="text-2xl font-bold text-white">Day {day} ({date})</h2>
        <p className="text-gray-400 italic">Theme: {theme}</p>
      </div>
    </div>
    <div className="space-y-6">{children}</div>
  </div>
);

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6 md:p-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
          CSI Regional Convention
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">AVENSIS 2K25</h2>
        <p className="text-gray-400 max-w-3xl mx-auto">
          Timeline schedule for the two-day convention featuring hackathons, tech sessions, and awards
        </p>
      </header>

      <div className="max-w-4xl mx-auto">
        <DaySection day={1} date="20-06-2025" theme="Innovation & Collaboration">
          <TimelineItem 
            time="09:00 - 09:45 AM" 
            activity="Registrations - Delegate Onboarding" 
            category="logistics" 
          />
          <TimelineItem 
            time="09:45 - 10:20 AM" 
            activity="Inaugural - Opening Ceremony" 
            category="key-event" 
            isHighlight 
          />
          <TimelineItem 
            time="10:20 - 10:25 AM" 
            activity="Flame of Knowledge (Lamp Lighting)" 
            category="ceremonial" 
          />
          <TimelineItem 
            time="10:30 - 11:00 AM" 
            activity="Addresses by Dignitaries (VC, Deans, CSI Leaders)" 
            category="speeches" 
          />
          <TimelineItem 
            time="11:00 - 11:20 AM" 
            activity="Felicitation + Keynote (Chief Guest)" 
            category="key-event" 
            isHighlight 
          />
          <TimelineItem 
            time="11:30 - 12:15 PM" 
            activity="Session I: Emerging Technologies" 
            category="key-session" 
            isHighlight 
          />
          <TimelineItem 
            time="12:15 - 01:00 PM" 
            activity="Session II: Opportunities in IT Sector" 
            category="key-session" 
            isHighlight 
          />
          <TimelineItem 
            time="01:00 - 02:00 PM" 
            activity="Lunch Gathering" 
            category="networking" 
          />
          <TimelineItem 
            time="02:00 - 02:15 PM" 
            activity="Lab Allocation (Hackathon Guidelines)" 
            category="prep" 
          />
          <TimelineItem 
            time="02:15 - 05:00 PM" 
            activity="Coding Marathon - Hackathon Begins" 
            category="competition" 
            isHighlight 
          />
          <TimelineItem 
            time="05:00 - 06:00 PM" 
            activity="Refreshment Break (Tea + Culturals)" 
            category="social" 
          />
          <TimelineItem 
            time="06:00 - 08:30 PM" 
            activity="Code of Conduct - Evaluation I" 
            category="critical" 
            isHighlight 
          />
          <TimelineItem 
            time="08:30 - 09:30 PM" 
            activity="Gala Dinner" 
            category="networking" 
          />
          <TimelineItem 
            time="09:30 - 11:30 PM" 
            activity="Code of Conduct - Hackathon Resumes" 
            category="competition" 
          />
          <TimelineItem 
            time="11:30 PM - 12:00 AM" 
            activity="Moonbeam Mania (Campfire)" 
            category="social" 
          />
          <TimelineItem 
            time="12:00 - 02:00 AM" 
            activity="Code of Conduct - Hackathon Continues" 
            category="competition" 
          />
          <TimelineItem 
            time="02:00 - 04:00 AM" 
            activity="Code of Conduct - Evaluation II" 
            category="critical" 
            isHighlight 
          />
          <TimelineItem 
            time="04:00 - 05:30 AM" 
            activity="Code of Conduct - Final Hackathon Sprint" 
            category="competition" 
          />
        </DaySection>

        <DaySection day={2} date="21-06-2025" theme="Celebration & Recognition">
          <TimelineItem 
            time="05:30 - 06:15 AM" 
            activity="Morning Momentum (Yoga)" 
            category="wellness" 
          />
          <TimelineItem 
            time="06:15 - 07:30 AM" 
            activity="Refreshments + Breakfast" 
            category="logistics" 
          />
          <TimelineItem 
            time="07:30 - 10:30 AM" 
            activity="Code of Conduct - Hackathon Finalization" 
            category="competition" 
          />
          <TimelineItem 
            time="10:30 - 12:30 PM" 
            activity="Code of Conduct - Final Evaluation" 
            category="critical" 
            isHighlight 
          />
          <TimelineItem 
            time="12:30 - 01:30 PM" 
            activity="Lunch" 
            category="break" 
          />
          <TimelineItem 
            time="01:30 - 02:15 PM" 
            activity="Felicitation (Dignitaries & Contributors)" 
            category="appreciation" 
          />
          <TimelineItem 
            time="02:15 - 03:00 PM" 
            activity="Valedictory Ceremony" 
            category="key-event" 
            isHighlight 
          />
          <TimelineItem 
            time="03:00 - 04:30 PM" 
            activity="Recognition Ceremony (CSI Awards)" 
            category="highlight" 
            isHighlight 
          />
        </DaySection>
      </div>
    </div>
  );
}