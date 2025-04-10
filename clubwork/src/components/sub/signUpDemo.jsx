"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "../../lib/utils";

export function SignupFormDemo() {
  const [formData, setFormData] = useState({
    teamName: "",
    teamLeader: "",
    teamLeaderEmail: "",
    teamLeaderPhoneNumber: "",
    accomodation: "",
    teamSize: "",
    events: [],
    domain: "",
    collegeName: "",
    stateName: "",
    teamMembers: [],
    utrNumber: "",
    screenShot: null,
  });

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
  const [isError, setIsError] = useState(false);

  // --- Handlers for Main Form ---
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };
  const closeModal = () => {
    setIsMemberModalOpen(false); // Sets the state to false to close the modal
  };

  const handleRadioChange = (e) => {
    setFormData((prev) => ({ ...prev, teamSize: e.target.value }));
  };

  const handleDomainChange = (e) => {
    setFormData((prev) => ({ ...prev, domain: e.target.value }));
  };

  const handleAccomChange = (e) => {
    setFormData((prev) => ({ ...prev, accomodation: e.target.value }));
  };

  const handleEventChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const updatedEvents = checked
        ? [...prev.events, value]
        : prev.events.filter((event) => event !== value);
      return { ...prev, events: updatedEvents };
    });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, screenShot: file }));
  };

  // --- Handlers for Team Member Modal ---
  const handleMemberInputChange = (e) => {
    const { id, value } = e.target;
    setMemberDetails((prev) => ({ ...prev, [id]: value }));
  };

  const handleYearChange = (e) => {
    setMemberDetails((prev) => ({
      ...prev,
      year: parseInt(e.target.value, 10),
    }));
  };

  const saveMemberDetails = (e) => {
    e.preventDefault();
    setFormData((prev) => ({
      ...prev,
      teamMembers: [...prev.teamMembers, memberDetails],
    }));
    // Reset member details after saving
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
    setFormData((prev) => ({
      ...prev,
      teamMembers: prev.teamMembers.filter((_, i) => i !== index),
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
      teamLeaderPhoneNumber,
      accomodation,
      teamSize,
      events,
      domain,
      stateName,
      utrNumber,
      screenShot,
      teamMembers,
    } = formData;

    if (events.includes("project expo") && events.length > 1) {
      return false;
    }

    if (
      !teamName ||
      !collegeName ||
      !teamLeader ||
      !teamLeaderEmail ||
      !teamLeaderPhoneNumber ||
      !accomodation ||
      !stateName ||
      !teamSize ||
      events.length === 0 ||
      !domain ||
      !utrNumber ||
      !screenShot
    ) {
      return false;
    }

    return teamMembers.length === parseInt(teamSize, 10);
  };

  // --- Fee Calculation ---
  const computeTotalFee = () => {
    let total = 0;
    const feeNonMember = 700;
    const feeMember = 500;

    if (
      formData.events.includes("project expo") &&
      formData.events.length > 1
    ) {
      return 0;
    }

    if (formData.events.length === 1 && formData.events[0] === "project expo") {
      total = 300;
    } else if (
      formData.events.includes("hackathon") ||
      formData.events.includes("design-a-thon")
    ) {
      formData.teamMembers.forEach((member) => {
        total +=
          member.membershipID &&
          member.membershipID !== "NA" &&
          member.membershipID.trim() !== ""
            ? feeMember
            : feeNonMember;
      });
    }
    return total;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = new FormData();
    data.append("teamName", formData.teamName);
    data.append("teamLeader", formData.teamLeader);
    data.append("teamLeaderEmail", formData.teamLeaderEmail);
    data.append("teamLeaderPhoneNumber", formData.teamLeaderPhoneNumber);
    data.append("accommodation", formData.accomodation);
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
    console.log(data);
    try {
      const res = await fetch(
        "https://hackathon-site-backend.onrender.com/api/v1/register",
        {
          method: "POST",
          body: data,
        }
      );

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`HTTP error ${res.status}: ${errorText}`);
      }
      const result = await res.json();
      setSignupSuccess(true);
      setTimeout(() => setSignupSuccess(false), 5000);
      console.log(result);
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsError(true);
      setTimeout(() => setIsError(false), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-screen bg-white dark:bg-neutral-900 flex flex-col md:flex-row gap-4 p-4 relative">
      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-white text-xl">Loading...</div>
        </div>
      )}
      {/* Success Alert */}
      {signupSuccess && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 dark:bg-green-700 text-white px-6 py-3 rounded-md shadow-lg z-50">
          Registration Successful!
        </div>
      )}
      {/* Error Alert */}
      {isError && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-red-500 dark:bg-red-700 text-white px-6 py-3 rounded-md shadow-lg z-50">
          Registration Unsuccessful – enter correct details!
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col md:flex-row gap-4"
      >
        {/* Left Section */}
        <div className="max-w-md w-full mx-auto md:mx-4 rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-neutral-900">
          <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-100">
            Register for AVENSIS 2025
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 text-sm max-w-sm mt-2 mb-3">
            🚀 Be part of <strong>Avensis 2025</strong>, where innovation meets
            creativity! Secure your spot now and compete in the Hackathon,
            Design-a-Thon<br />
            Registration Fees: <br />
            🔹 Hackathon – Rs.700 per person (Rs.500 for CSI members) <br />
            🔹 Design-a-Thon – Rs.700 per person (Rs.500 for CSI members) <br />
            <strong className="text-red-700 dark:text-red-400">
              Note: Can participate in any one of the event
            </strong>
          </p>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="teamName" className="dark:text-neutral-200">
              Team Name
            </Label>
            <Input
              id="teamName"
              placeholder="eg: Team XYZ"
              type="text"
              value={formData.teamName}
              onChange={handleInputChange}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="collegeName" className="dark:text-neutral-200">
              College Name
            </Label>
            <Input
              id="collegeName"
              placeholder="eg: Anurag University"
              type="text"
              value={formData.collegeName}
              onChange={handleInputChange}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="stateName" className="dark:text-neutral-200">
              State
            </Label>
            <Input
              id="stateName"
              placeholder="eg: Telangana"
              type="text"
              value={formData.stateName}
              onChange={handleInputChange}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="teamLeader" className="dark:text-neutral-200">
              Team Leader Name
            </Label>
            <Input
              id="teamLeader"
              placeholder="eg: Tony Stark"
              type="text"
              value={formData.teamLeader}
              onChange={handleInputChange}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="teamLeaderEmail" className="dark:text-neutral-200">
              Team Leader Email
            </Label>
            <Input
              id="teamLeaderEmail"
              placeholder="eg: 23eg105h51@anurag.edu.in"
              type="email"
              value={formData.teamLeaderEmail}
              onChange={handleInputChange}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label
              htmlFor="teamLeaderPhoneNumber"
              className="dark:text-neutral-200"
            >
              Team Leader Phone Number
            </Label>
            <Input
              id="teamLeaderPhoneNumber"
              placeholder="eg: 6302xxxxxx"
              type="tel"
              value={formData.teamLeaderPhoneNumber}
              onChange={handleInputChange}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="teamSize" className="dark:text-neutral-200">
              Team Size
            </Label>
            <div className="flex space-x-4">
              {["3", "4", "5"].map((size) => (
                <label key={size} className="dark:text-neutral-200">
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
        <div className="max-w-md w-full mx-auto md:mx-4 rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-neutral-900">
          {/* Events and Domain */}
          <LabelInputContainer className="mb-4">
            <Label htmlFor="events" className="dark:text-neutral-200">
              Events
            </Label>
            <div className="flex flex-wrap gap-4">
              {[
                { label: "Hackathon", value: "hackathon" },
                { label: "Design-a-Thon", value: "design-a-thon" },
              ].map((event) => (
                <label key={event.value} className="dark:text-neutral-200">
                  {event.label}
                  <input
                    type="radio" // Change from checkbox to radio
                    name="event" // Group all radio buttons together
                    value={event.value}
                    checked={formData.events.includes(event.value)} // Only one event should be selected
                    onChange={handleEventChange}
                    className="m-2"
                  />
                </label>
              ))}
            </div>
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="domains" className="dark:text-neutral-200">
              Domains
            </Label>
            <div className="flex space-x-4">
              {[
                { label: "Web/App", value: "web/app" },
                { label: "AIML", value: "aiml" },
                { label: "IOT", value: "iot" },
                {
                  label: "Blockchain and security",
                  value: "blockchain/security",
                },
              ].map((domain) => (
                <label key={domain.value} className="dark:text-neutral-200">
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
            <Label htmlFor="accomodation" className="dark:text-neutral-200">
              Accommodation
            </Label>
            <div className="flex space-x-4">
              {[
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
              ].map((accomodation) => (
                <label
                  key={accomodation.value}
                  className="dark:text-neutral-200"
                >
                  {accomodation.label}
                  <input
                    type="radio"
                    value={accomodation.value}
                    name="accomodation"
                    checked={formData.accomodation === accomodation.value}
                    onChange={handleAccomChange}
                    className="m-2"
                  />
                </label>
              ))}
            </div>
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <div className="flex justify-between items-center">
              <span className="dark:text-neutral-200">Team Members</span>
              <button
                className="border-2 border-black dark:border-gray-300 px-2 py-1 dark:text-white rounded-md"
                onClick={openMemberModal}
              >
                Add Team Members +
              </button>
            </div>
            <p className="text-red-700 dark:text-red-400">Note : Add Team Leader details with Members details</p>
          </LabelInputContainer>
          {formData.teamMembers.map((member, index) => (
            <div
              key={index}
              className="p-2 border mb-2 flex flex-col sm:flex-row justify-between items-center border-gray-300 dark:border-gray-600"
            >
              <div className="dark:text-neutral-200">
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
          {/* Scanner Icon */}
          <div className="w-full flex justify-center">
            <img
              src="/img/qr-codeicon.png"
              alt="scanner"
              className="w-20 h-20 cursor-pointer m-3"
              onClick={openScanner}
            />
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="utrNumber" className="dark:text-neutral-200">
              UTR Number
            </Label>
            <Input
              id="utrNumber"
              placeholder="Transaction Reference Number"
              type="text"
              value={formData.utrNumber}
              onChange={handleInputChange}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="screenShot" className="dark:text-neutral-200">
              Upload Screenshot
            </Label>
            <Input
              id="screenShot"
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
            />
            <p className="text-red-700 dark:text-red-400">
              Note: Image should be in jpg / jpeg format
            </p>
            {formData.screenShot && (
              <p className="text-sm text-green-500 dark:text-green-400 mt-1">
                File Uploaded: {formData.screenShot.name}
              </p>
            )}
          </LabelInputContainer>
          {formData.events.length > 0 && (
            <div className="mb-4">
              <p className="text-xl font-semibold dark:text-neutral-100">
                Total Fee: Rs. {computeTotalFee()}
              </p>
            </div>
          )}
          <button
            className={`bg-gradient-to-br relative group/btn block w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] ${
              isFormValid() && !isLoading
                ? "from-black dark:from-gray-900 dark:to-gray-900 to-neutral-600"
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
          <img
            src="/img/scanner23.jpg"
            alt="scanner"
            className="w-full max-w-md h-auto"
          />
        </div>
      )}
      {/* Team Member Modal */}
  {isMemberModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
    <div className="bg-white dark:bg-neutral-900 p-4 rounded-lg w-full max-w-sm relative">
      {/* Close Button */}
      <button
        onClick={closeModal}
        className="absolute top-2 right-2 bg-transparent text-neutral-700 dark:text-neutral-200 hover:text-red-600 text-3xl"
      >
        &times; {/* Represents the X */}
      </button>
      
      <form onSubmit={saveMemberDetails}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="name" className="dark:text-neutral-200">
            Name 🧑‍🤝‍🧑
          </Label>
          <Input
            id="name"
            value={memberDetails.name}
            onChange={handleMemberInputChange}
            placeholder="eg: Bruce Wayne"
            type="text"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="year" className="dark:text-neutral-200">
            Year
          </Label>
          <div className="flex space-x-4">
            {[1, 2, 3, 4].map((yr) => (
              <label key={yr} className="dark:text-neutral-200">
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
          <Label htmlFor="phone" className="dark:text-neutral-200">
            Phone Number
          </Label>
          <Input
            id="phone"
            value={memberDetails.phone}
            onChange={handleMemberInputChange}
            placeholder="eg: 98765xxxxx"
            type="tel"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email" className="dark:text-neutral-200">
            Email
          </Label>
          <Input
            id="email"
            value={memberDetails.email}
            onChange={handleMemberInputChange}
            placeholder="eg: xyz@gmail.com"
            type="email"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="membershipID" className="dark:text-neutral-200">
            CSI Membership Id
          </Label>
          <Input
            id="membershipID"
            value={memberDetails.membershipID}
            onChange={handleMemberInputChange}
            type="text"
          />
        </LabelInputContainer>
        <div className="flex justify-end mt-4">
          <button
            className="bg-blue-500 dark:bg-blue-600 text-white px-4 py-2 rounded-md"
            type="submit"
          >
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

const BottomGradient = () => (
  <>
    <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
    <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
  </>
);

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
