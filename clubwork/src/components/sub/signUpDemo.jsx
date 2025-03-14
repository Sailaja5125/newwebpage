"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

export function SignupFormDemo() {
  const [formData, setFormData] = useState({
    teamName: "",
    collegeName: "",
    teamLeader: "",
    teamLeaderEmail: "",
    teamLeaderNumber: "",
    teamSize: "",
    events: [],
    domain: "",
  });
  const [teamMembers, setTeamMembers] = useState([]);
  const [memberDetails, setMemberDetails] = useState({
    name: "",
    year: 1,
    phone: "",
    email: "",
  });
  const [clicked, setClicked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", { ...formData, teamMembers });
  };

  const addTeamMembers = (e) => {
    e.preventDefault();
    setClicked(true);
  };

  const handleRemoveTeamMembers = (index) => {
    setTeamMembers((prevMembers) => prevMembers.filter((_, i) => i !== index));
  };

  const handleYearChange = (e) => {
    setMemberDetails((prevDetails) => ({
      ...prevDetails,
      year: parseInt(e.target.value, 10),
    }));
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

  const handleRadioChange = (e) => {
    setFormData((prevData) => ({ ...prevData, teamSize: e.target.value }));
  };

  const handleDomainChange = (e) => {
    setFormData((prevData) => ({ ...prevData, domain: e.target.value }));
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleMemberInputChange = (e) => {
    const { id, value } = e.target;
    setMemberDetails((prevDetails) => ({
      ...prevDetails,
      [id]: value,
    }));
  };

  const saveMemberDetails = (e) => {
    e.preventDefault();
    setTeamMembers((prevMembers) => [...prevMembers, memberDetails]);
    setMemberDetails({
      name: "",
      year: 1,
      phone: "",
      email: "",
    });
    setClicked(false);
  };

  // Check if all required fields are filled
  const isFormValid = () => {
    const {
      teamName,
      collegeName,
      teamLeader,
      teamLeaderEmail,
      teamLeaderNumber,
      teamSize,
      events,
      domain,
    } = formData;
    // Check that all formData fields are not empty
    if (
      !teamName ||
      !collegeName ||
      !teamLeader ||
      !teamLeaderEmail ||
      !teamLeaderNumber ||
      !teamSize ||
      events.length === 0 ||
      !domain
    ) {
      return false;
    }
    // Verify the team members count matches the expected number (teamSize - 1)
    const requiredMembers = parseInt(teamSize, 10) - 1;
    return teamMembers.length === requiredMembers;
  };

  return (
    <div className="min-h-screen w-screen bg-white flex flex-col md:flex-row gap-4 p-4">
      {/* Left Section */}
      <div className="max-w-md w-full mx-auto md:mx-4 rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Register here !!
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Login to aceternity if you can because we don&apos;t have a login flow yet
        </p>
        <form className="my-8" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="teamName">Team Name</Label>
            <Input
              id="teamName"
              placeholder="eg : Bit Wizards"
              type="text"
              value={formData.teamName}
              onChange={handleInputChange}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="collegeName">College Name</Label>
            <Input
              id="collegeName"
              placeholder="eg : Anurag University"
              type="text"
              value={formData.collegeName}
              onChange={handleInputChange}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="teamLeader">Team Leader Name</Label>
            <Input
              id="teamLeader"
              placeholder="Tony Stark"
              type="text"
              value={formData.teamLeader}
              onChange={handleInputChange}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="teamLeaderEmail">Team Leader Email</Label>
            <Input
              id="teamLeaderEmail"
              placeholder="23eg10***@anurag.edu.in"
              type="email"
              value={formData.teamLeaderEmail}
              onChange={handleInputChange}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="teamLeaderNumber">Team Leader Number</Label>
            <Input
              id="teamLeaderNumber"
              placeholder="+91 9876xxxxxx"
              type="tel"
              value={formData.teamLeaderNumber}
              onChange={handleInputChange}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="teamSize">Team Size</Label>
            <div className="flex space-x-4">
              <label>
                3
                <input
                  type="radio"
                  value="3"
                  checked={formData.teamSize === "3"}
                  onChange={handleRadioChange}
                  className="m-2"
                />
              </label>
              <label>
                4
                <input
                  type="radio"
                  value="4"
                  checked={formData.teamSize === "4"}
                  onChange={handleRadioChange}
                  className="m-2"
                />
              </label>
              <label>
                5
                <input
                  type="radio"
                  value="5"
                  checked={formData.teamSize === "5"}
                  onChange={handleRadioChange}
                  className="m-2"
                />
              </label>
            </div>
          </LabelInputContainer>
        </form>
      </div>

      {/* Right Section */}
      <div className="max-w-md w-full mx-auto md:mx-4 rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <form className="my-8" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="events">Events</Label>
            <div className="flex flex-wrap gap-4">
              <label>
                Hackathon
                <input
                  type="checkbox"
                  value="hackathon"
                  checked={formData.events.includes("hackathon")}
                  onChange={handleEventChange}
                  className="m-2"
                />
              </label>
              <label>
                Design-a-Thon
                <input
                  type="checkbox"
                  value="design-a-thon"
                  checked={formData.events.includes("design-a-thon")}
                  onChange={handleEventChange}
                  className="m-2"
                />
              </label>
              <label>
                Project Expo
                <input
                  type="checkbox"
                  value="project expo"
                  checked={formData.events.includes("project expo")}
                  onChange={handleEventChange}
                  className="m-2"
                />
              </label>
            </div>
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="domains">Domains</Label>
            <div className="flex space-x-4">
              <label>
                Web/App
                <input
                  type="radio"
                  value="web/app"
                  checked={formData.domain === "web/app"}
                  onChange={handleDomainChange}
                  className="m-2"
                />
              </label>
              <label>
                AIML
                <input
                  type="radio"
                  value="aiml"
                  checked={formData.domain === "aiml"}
                  onChange={handleDomainChange}
                  className="m-2"
                />
              </label>
              <label>
                IOT
                <input
                  type="radio"
                  value="iot"
                  checked={formData.domain === "iot"}
                  onChange={handleDomainChange}
                  className="m-2"
                />
              </label>
            </div>
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <div className="flex justify-between items-center">
              <span>Team Members</span>
              <button className="border-2 border-black px-2 py-1" onClick={addTeamMembers}>
                Add Team Members +
              </button>
            </div>
          </LabelInputContainer>
          {teamMembers.map((member, index) => (
            <div key={index} className="p-2 border mb-2 flex flex-col sm:flex-row justify-between items-center">
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
              </div>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded-md mt-2 sm:mt-0"
                onClick={() => handleRemoveTeamMembers(index)}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            className={`bg-gradient-to-br relative group/btn block w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] ${
              isFormValid()
                ? "from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600"
                : "opacity-50 cursor-not-allowed from-gray-500 to-gray-500"
            }`}
            type="submit"
            disabled={!isFormValid()}
          >
            Submit &rarr;
            <BottomGradient />
          </button>
        </form>
      </div>

      {/* Modal for adding team member details */}
      {clicked && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-4 rounded-lg w-full max-w-sm">
            <form onSubmit={saveMemberDetails}>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="name">Name 🧑‍🤝‍🧑</Label>
                <Input
                  id="name"
                  value={memberDetails.name}
                  onChange={handleMemberInputChange}
                  placeholder="eg: bruce wayne"
                  type="text"
                />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="year">Year</Label>
                <div className="flex space-x-4">
                  <label>
                    1
                    <input
                      type="radio"
                      value="1"
                      checked={memberDetails.year === 1}
                      onChange={handleYearChange}
                      className="m-2"
                    />
                  </label>
                  <label>
                    2
                    <input
                      type="radio"
                      value="2"
                      checked={memberDetails.year === 2}
                      onChange={handleYearChange}
                      className="m-2"
                    />
                  </label>
                  <label>
                    3
                    <input
                      type="radio"
                      value="3"
                      checked={memberDetails.year === 3}
                      onChange={handleYearChange}
                      className="m-2"
                    />
                  </label>
                </div>
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={memberDetails.phone}
                  onChange={handleMemberInputChange}
                  placeholder="+91 98765xxxxx"
                  type="number"
                />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  value={memberDetails.email}
                  onChange={handleMemberInputChange}
                  placeholder="23eg*****@anurag.edu.in"
                  type="email"
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
