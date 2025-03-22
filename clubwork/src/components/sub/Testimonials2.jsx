"use client";
import React from "react";
import { InfiniteMovingCards } from "../ui/infinity-moving-cards";


export function InfiniteMovingCardsDemo() {
  return (
    (<div
      className="h-[40rem] rounded-md flex flex-col antialiased bg-neutral-900 dark:bg-neutral-900 dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={committeeMembers} direction="left" speed="slow" />
    </div>)
  );
} 

const committeeMembers = [
  {
    category: "Chief Patrons",
    name: "Dr.P.Rajashwar Reddy",
    title: "Chairman, Anurag University MLA,Telangana"
  },
  {
    category: "Chief Patrons",
    name: "Dr.U.B.Desai",
    title: "Chancellor,Anurag University"
  },
  {
    category: "Chief Patrons",
    name: "Mrs.S.Neelima",
    title: "CEO,Anurag University"
  },
  {
    category: "Patrons",
    name: "Dr.Archana Mantri",
    title: "Vice Chancellor, Anurag University"
  },
  {
    category: "Patrons",
    name: "Dr.P.Bhaskara Reddy",
    title: "Registrar,Anurag University"
  },
  {
    category: "Patrons",
    name: "Dr.V.Vijaya Kumar",
    title: "Professor & Dean,SEO, Anurag University"
  },
  {
    category: "Advisory Committee",
    name: "Shri Gautam Mahapatra",
    title: "President of CSI"
  },
  {
    category: "Advisory Committee",
    name: "Dr. K. L. Raju",
    title: "Honorary Secretary of CSI"
  },
  {
    category: "Advisory Committee",
    name: "Pedigari Bala Prasad",
    title: "Chief Innovative Officer and Global Head Technology,Advisory Services , TCS"
  },
  {
    category: "Advisory Committee",
    name: "Dr. Muktha Reddy",
    title: "Professor & Dean,Examination Anurag University"
  },
  {
    category: "Advisory Committee",
    name: "Dr. K. Sudheer Reddy",
    title: "Dean,IT, Anurag University"
  },
  {
    category: "Organizing Chairs",
    name: "Mrs. Amitha Mishra",
    title: "Assistant Professor,CSE AU"
  },
  {
    category: "Organizing Chairs",
    name: "Mrs.B. Jyothi",
    title: "Assistant Professor,DS,AU"
  },
  {
    category: "Organizing Chairs",
    name: "Mrs.T. Neetha",
    title: "Assistant Professor,AIML,AU"
  },
  {
    category: "Organizing Chairs",
    name: "Mrs.Meghana",
    title: "Assistant Professor,IT,AU"
  },
  {
    category: "Organizing Chairs",
    name: "Mr.VidyaSagar",
    title: "MC Member ,CSI"
  },
  {
    category: "Organizing Chairs",
    name: "Dr.A.Rama Krishna Prasad",
    title: "MC Member, CSI"
  },
  {
    category: "Steering Committee",
    name: "Dr.D.V.Ramana",
    title: "Secretary CSI ,Hyderabad"
  },
  {
    category: "Steering Committee",
    name: "A.V.Krishna Prasad",
    title: "RVice Chairman CSI ,Hyderabad"
  },
  {
    category: "Steering Committee",
    name: "Dr.C.Srikant",
    title: "Student Coordinator CSI Hyderabad"
  },
  {
    category: "Steering Committee",
    name: "Dr. A. Mallikarjuna Reddy",
    title: "HOD, AIML, Anurag University"
  },
  {
    category: "Steering Committee",
    name: "Dr. M. Sridevi",
    title: "HOD DS, Anurag University"
  },
  {
    category: "Steering Committee",
    name: "Dr.Niteesha Sharma",
    title: "HOD IT,Anurag University"
  },
  {
    category: "Program Chairs",
    name: "Dr.G.Vishnu Murthy",
    title: "Professor & Dean,CSE, Anurag University"
  },
  {
    category: "Program Chairs",
    name: "Dr.C.Sudhakar",
    title: "Chairman, CSI Hyderabad"
  },
  {
    category: "Program Chairs",
    name: "Dr.V.Rama Krishna",
    title: "Assistant Professor,CSE,Anurag University"
  }
];