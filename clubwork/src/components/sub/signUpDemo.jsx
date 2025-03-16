"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "./../../lib/utils";

export function SignupFormDemo() {
  const [formData, setFormData] = useState({
    teamName: "",
    teamLeader: "",
    teamLeaderEmail: "",
    teamSize: "",
    events: [],
    domain: "",
    collegeName: "",
    stateName: "",
    teamMembers: [],
    utrNumber: "",
    screenShot: null,
  });

  
  // State for team member modal and other UI states
  const [memberDetails, setMemberDetails] = useState({
    name: "",
    year: 1,
    phone: "",
    email: "",
    membershipID: "NA",
  });
  const [isMemberModalOpen, setIsMemberModalOpen] = useState(false);
  const [isScannerOpen, setIsScannerOpen] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError , setError] = useState(false)
  // --- Handlers for main form ---
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleRadioChange = (e) => {
    setFormData((prevData) => ({ ...prevData, teamSize: e.target.value }));
  };

  const handleDomainChange = (e) => {
    setFormData((prevData) => ({ ...prevData, domain: e.target.value }));
  };

  const handleEventChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => {
      const updatedEvents = checked
        ? [...prevData.events, value]
        : prevData.events.filter((event) => event !== value);
      return { ...prevData, events: updatedEvents };
    });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({ ...prevData, screenShot: file }));
  };

  
  // --- Handlers for team member modal ---
  const handleMemberInputChange = (e) => {
    const { id, value } = e.target;
    setMemberDetails((prevDetails) => ({ ...prevDetails, [id]: value }));
  };

  const handleYearChange = (e) => {
    setMemberDetails((prevDetails) => ({
      ...prevDetails,
      year: parseInt(e.target.value, 10),
    }));
  };

  const saveMemberDetails = (e) => {
    e.preventDefault();
    setFormData((prevData) => ({
      ...prevData,
      teamMembers: [...prevData.teamMembers, memberDetails],
    }));
    // Reset to initial member state (using "NA" for membershipID)
    setMemberDetails({
      name: "",
      year: 1,
      phone: "",
      email: "",
      membershipID: "NA",
    });
    setIsMemberModalOpen(false);
  };

  const handleRemoveTeamMember = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      teamMembers: prevData.teamMembers.filter((_, i) => i !== index),
    }));
  };

  const openMemberModal = (e) => {
    e.preventDefault();
    setIsMemberModalOpen(true);
  };

  const openScanner = () => {
    setIsScannerOpen(true);
  };

  // --- Form Validation ---
  const isFormValid = () => {
    const {
      teamName,
      collegeName,
      teamLeader,
      teamLeaderEmail,
      teamSize,
      events,
      domain,
      stateName,
      utrNumber,
      screenShot,
      teamMembers,
    } = formData;
    if (
      !teamName ||
      !collegeName ||
      !teamLeader ||
      !teamLeaderEmail ||
      !stateName ||
      !teamSize ||
      events.length === 0 ||
      !domain ||
      !utrNumber ||
      !screenShot
    ) {
      return false;
    }
    // Validate that the number of team members equals teamSize (team leader is not counted)
    return teamMembers.length === parseInt(teamSize, 10);
  };

  // --- Fee Calculation ---
  const computeTotalFee = () => {
    let total = 0;
    // Prices for hackathon/design-a-thon
    const memberFeeNonMember = 700;
    const memberFeeMember = 500;
    // Price for project expo
    const feeExpoPerPerson = 300;
    const teamMemberCount = formData.teamMembers.length;

    // Hackathon fee calculation (applied to team members)
    if (formData.events.includes("hackathon")) {
      let fee = 0;
      formData.teamMembers.forEach((member) => {
        if (
          member.membershipID &&
          member.membershipID !== "NA" &&
          member.membershipID.trim() !== ""
        ) {
          fee += memberFeeMember;
        } else {
          fee += memberFeeNonMember;
        }
      });
      total += fee;
    }

    // Design-a-thon fee calculation (applied to team members)
    if (formData.events.includes("design-a-thon")) {
      let fee = 0;
      formData.teamMembers.forEach((member) => {
        if (
          member.membershipID &&
          member.membershipID !== "NA" &&
          member.membershipID.trim() !== ""
        ) {
          fee += memberFeeMember;
        } else {
          fee += memberFeeNonMember;
        }
      });
      total += fee;
    }

    // Project Expo fee calculation (applied to team members)
    if (formData.events.includes("project expo")) {
      const expoFee = feeExpoPerPerson * teamMemberCount;
      total += expoFee;
    }

    return total;
  };

  // --- Submit handler (teamLeaderNumber is not appended to the payload) ---
  // --- Submit handler (teamLeaderNumber is not appended to the payload) ---
const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(formData);
  setIsLoading(true);
  const data = new FormData();
  data.append("teamName", formData.teamName);
  data.append("teamLeader", formData.teamLeader);
  data.append("teamLeaderEmail", formData.teamLeaderEmail);
  data.append("teamSize", formData.teamSize);
  data.append("domain", formData.domain);
  data.append("collegeName", formData.collegeName);
  data.append("stateName", formData.stateName);
  data.append("utrNumber", formData.utrNumber);
  data.append("events", JSON.stringify(formData.events));
  data.append("teamMembers", JSON.stringify(formData.teamMembers));
  if (formData.screenShot) {
    data.append("screenShot", formData.screenShot);
  }

  // Optional: Log form data for debugging
  // for (const pair of data.entries()) {
  //   console.log(pair[0], pair[1]);
  // }

  try {
    const res = await fetch("https://hackathon-site-backend.onrender.com/api/v1/register", {
      method: "POST",
      body: data,
    });

    if (!res.ok) {
      // Read the response text (likely HTML) to help with debugging
      const errorText = await res.text();
      throw new Error(`HTTP error ${res.status}: ${errorText}`);
    }
    const result = await res.json();
    console.log(result);
    setSignupSuccess(true);
    setTimeout(() => setSignupSuccess(false), 5000);
  } catch (error) {
    console.error("Error submitting form:", error);
    setError(true)
  } finally {
    setIsLoading(false);
  }
};

  return (
    <div className="min-h-screen w-screen bg-white flex flex-col md:flex-row gap-4 p-4 relative">
      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-white text-xl">Loading...</div>
        </div>
      )}
      {/* Success Alert */}
      {signupSuccess && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-md shadow-lg z-50">
          Registration Successful!
        </div>
      )}
      {isError && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-3 rounded-md shadow-lg z-50">
          Registration UnSuccessful enter correct details!
        </div>
      )}
      <form onSubmit={handleSubmit} className="w-full flex flex-col md:flex-row gap-4">
        {/* Left Section */}
        <div className="max-w-md w-full mx-auto md:mx-4 rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
          <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
            Register for AVENSIS 2025
          </h2>
          <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
            <br />
            🚀 Be part of <strong>Avensis 2025</strong>, where innovation meets creativity!
            Secure your spot now and compete in the Hackathon, Design-a-Thon, or showcase your project at the Expo! 💡 <br />
            Registration Fees: <br />
            🔹 Hackathon – Rs.700 per person (Rs.500 for members) <br />
            🔹 Design-a-Thon – Rs.700 per person (Rs.500 for members) <br />
            🔹 Project Expo – Rs.300 per person
          </p>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="teamName">Team Name</Label>
            <Input
              id="teamName"
              placeholder="eg: Bit Wizards"
              type="text"
              value={formData.teamName}
              onChange={handleInputChange}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="collegeName">College Name</Label>
            <Input
              id="collegeName"
              placeholder="eg: Anurag University"
              type="text"
              value={formData.collegeName}
              onChange={handleInputChange}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="stateName">State</Label>
            <Input
              id="stateName"
              placeholder="eg: Telangana"
              type="text"
              value={formData.stateName}
              onChange={handleInputChange}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="teamLeader">Team Leader Name</Label>
            <Input
              id="teamLeader"
              placeholder="eg: Tony Stark"
              type="text"
              value={formData.teamLeader}
              onChange={handleInputChange}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="teamLeaderEmail">Team Leader Email</Label>
            <Input
              id="teamLeaderEmail"
              placeholder="eg: 23eg10***@anurag.edu.in"
              type="email"
              value={formData.teamLeaderEmail}
              onChange={handleInputChange}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="teamSize">Team Size</Label>
            <div className="flex space-x-4">
              {["3", "4", "5"].map((size) => (
                <label key={size}>
                  {size}
                  <input
                    type="radio"
                    value={size}
                    name="teamSize"
                    checked={formData.teamSize === size}
                    onChange={handleRadioChange}
                    className="m-2"
                  />
                </label>
              ))}
            </div>
          </LabelInputContainer>
        </div>
        {/* Right Section */}
        <div className="max-w-md w-full mx-auto md:mx-4 rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
          <LabelInputContainer className="mb-4">
            <Label htmlFor="events">Events</Label>
            <div className="flex flex-wrap gap-4">
              {[
                { label: "Hackathon", value: "hackathon" },
                { label: "Design-a-Thon", value: "design-a-thon" },
                { label: "Project Expo", value: "project expo" },
              ].map((event) => (
                <label key={event.value}>
                  {event.label}
                  <input
                    type="checkbox"
                    value={event.value}
                    checked={formData.events.includes(event.value)}
                    onChange={handleEventChange}
                    className="m-2"
                  />
                </label>
              ))}
            </div>
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="domains">Domains</Label>
            <div className="flex space-x-4">
              {[
                { label: "Web/App", value: "web/app" },
                { label: "AIML", value: "aiml" },
                { label: "IOT", value: "iot" },
                { label: "Blockchain and security", value: "blockchain/security" },
              ].map((domain) => (
                <label key={domain.value}>
                  {domain.label}
                  <input
                    type="radio"
                    value={domain.value}
                    name="domain"
                    checked={formData.domain === domain.value}
                    onChange={handleDomainChange}
                    className="m-2"
                  />
                </label>
              ))}
            </div>
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <div className="flex justify-between items-center">
              <span>Team Members</span>
              <button className="border-2 border-black px-2 py-1" onClick={openMemberModal}>
                Add Team Members +
              </button>
            </div>
          </LabelInputContainer>
          {formData.teamMembers.map((member, index) => (
            <div
              key={index}
              className="p-2 border mb-2 flex flex-col sm:flex-row justify-between items-center"
            >
              <div>
                <p>
                  <strong>Name:</strong> {member.name}
                </p>
                <p>
                  <strong>Year:</strong> {member.year}
                </p>
                <p>
                  <strong>Phone:</strong> {member.phone}
                </p>
                <p>
                  <strong>Email:</strong> {member.email}
                </p>
                <p>
                  <strong>CSI Membership Id:</strong> {member.membershipID}
                </p>
              </div>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded-md mt-2 sm:mt-0"
                onClick={() => handleRemoveTeamMember(index)}
              >
                Remove
              </button>
            </div>
          ))}
          {/* Scanner */}
          <div className="w-full flex justify-center">
            <img
              src="/img/qr-codeicon.png"
              alt="scanner"
              className="w-20 h-20 cursor-pointer m-3"
              onClick={openScanner}
            />
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="utrNumber">UTR Number</Label>
            <Input
              id="utrNumber"
              placeholder="Transaction Reference Number"
              type="text"
              value={formData.utrNumber}
              onChange={handleInputChange}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="screenShot">Upload screenShot</Label>
            <Input
              id="screenShot"
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
            />
            <p className="text-red-700">Note : Image should be in jpg / jpeg format</p>
            {formData.screenShot && (
              <p className="text-sm text-green-500 mt-1">
                File Uploaded: {formData.screenShot.name}
              </p>
            )}
          </LabelInputContainer>
          {/* Display Total Fee if any event is selected */}
          {formData.events.length > 0 && (
            <div className="mb-4">
              <p className="text-xl font-semibold">
                Total Fee: Rs. {computeTotalFee()}
              </p>
            </div>
          )}
          <button
            className={`bg-gradient-to-br relative group/btn block w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] ${
              isFormValid() && !isLoading
                ? "from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600"
                : "opacity-50 cursor-not-allowed from-gray-500 to-gray-500"
            }`}
            type="submit"
            disabled={!isFormValid() || isLoading}
          >
            Submit &rarr;
            <BottomGradient />
          </button>
        </div>
      </form>
      {/* Scanner Modal */}
      {isScannerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <button
            className="absolute top-2 right-2 text-black bg-gray-300 rounded-full px-2 py-1"
            onClick={() => setIsScannerOpen(false)}
          >
            ✕
          </button>
          <img src="/img/scanner.jpg" alt="scanner" className="w-full max-w-md h-auto" />
        </div>
      )}
      {/* Team Member Modal */}
      {isMemberModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-4 rounded-lg w-full max-w-sm">
            <form onSubmit={saveMemberDetails}>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="name">Name 🧑‍🤝‍🧑</Label>
                <Input
                  id="name"
                  value={memberDetails.name}
                  onChange={handleMemberInputChange}
                  placeholder="eg: Bruce Wayne"
                  type="text"
                />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="year">Year</Label>
                <div className="flex space-x-4">
                  {[1, 2, 3, 4].map((yr) => (
                    <label key={yr}>
                      {yr}
                      <input
                        type="radio"
                        value={yr}
                        checked={memberDetails.year === yr}
                        onChange={handleYearChange}
                        className="m-2"
                      />
                    </label>
                  ))}
                </div>
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={memberDetails.phone}
                  onChange={handleMemberInputChange}
                  placeholder="eg: +91 98765xxxxx"
                  type="tel"
                />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  value={memberDetails.email}
                  onChange={handleMemberInputChange}
                  placeholder="eg: xyz@gmail.com"
                  type="email"
                />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="membershipID">CSI Membership Id</Label>
                <Input
                  id="membershipID"
                  value={memberDetails.membershipID}
                  onChange={handleMemberInputChange}
                  type="text"
                />
              </LabelInputContainer>
              <div className="flex justify-end mt-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md" type="submit">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>;
};
