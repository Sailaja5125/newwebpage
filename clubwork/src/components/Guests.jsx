'use client'
import React from 'react';
import AnimatedTitle from './sub/AnimatedTitle';
const Guest = ({ 
  name = "John Doe",
  title = "Guest",
  designation = "Software Engineer",
  image = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  description = "Passionate developer with 8+ years of experience in full-stack development. Loves mentoring and helping teams build innovative solutions. Has worked on numerous successful projects and enjoys sharing knowledge with the developer community."
}) => {
  return (
    <div>
    <div className="flex items-center justify-center h-fit bg-transparent p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col lg:flex-row items-start lg:items-start gap-6 lg:gap-8 max-w-6xl w-full">
        {/* Left Side - Image and Title */}
        <div className="flex flex-col items-center w-full lg:w-auto lg:flex-shrink-0">
          <div className="relative mb-4">
            <img 
              src={image} 
              alt={name}
              className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 object-cover rounded-xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
          </div>
          <h3 className="text-xl sm:text-2xl lg:text-2xl font-bold text-white text-center">{name}</h3>
          <p className="text-white font-semibold text-base sm:text-lg text-center mt-2">{title}</p>
          <p className="text-white font-medium text-sm sm:text-base text-center mt-1">{designation}</p>
        </div>

        {/* Right Side - Information */}
        <div className="flex-1 w-full lg:pt-8">
          <p className="text-white text-sm sm:text-base lg:text-lg leading-relaxed text-justify">
            {description}
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

// Demo component showing two distinguished guests
const TwoChiefs = () => {
  const chief1 = {
    name: "Dr. Subramanyam Sharma",
    title: "Guest of Honour",
    designation: "Chairman & Managing Director, Sudeeksha Group",
    image: "/img/Subramanyam.jpg",
    description: "Grandson of Late Dr. Sarvepalli Radhakrishnan and Late V.V. Giri, both former Presidents of India. Chairman & Managing Director of Sudeeksha Group of Companies, with over 30 years of experience across diverse sectors including Sales, Marketing, Finance, Media & Entertainment, Aviation, Solar Energy, Healthcare, Retail & Legal. Youngest Chief Executive Officer of Fizzer - a Global Based Pharma Giant in Singapore. Alumnus of Harvard University (Law & Economics) and Indian IIM, Ahmedabad. Recipient of the Mahatma Gandhi International Business Man of the Year, Rastra Bhushan Award, Neelakanta Sanman Award 2019, Karnataka Rajya Prashasthi Award 2018, and International Global Achiever Award. Panel Chairman, MOEIC, Healthcare and Biomedical Devices, AICTE. Also, National Vice-President of Akhila Bharatiya Braham Maha Sangha and a member of various industry chambers (FKCCI, ASSOCHAM, KASSIA, CCI & NEM)."
  };

  const chief2 = {
    name: "Prof. Dr. V. Balakista Reddy",
    title: "Chief Guest",
    designation: "Chairman Telangana Higher Education Council",
    image: "/img/BalakistaReddy.jpg",
    description: "Distinguished expert in International Law with an LL.M (Osmania University), M.Phil, and Ph.D. in International Air and Space Law (Jawaharlal Nehru University, New Delhi). Formerly Dean of the School of Law at Mahindra University and held pivotal roles as Vice-Chancellor and Registrar at NALSAR University of Law. Presented papers at the United Nations and was instrumental in NALSAR hosting the Nobel Peace Prize Award Winning Institut De Droit International (IDI) in 2017. He was also a member of the Drafting Committee for India's Model Space Legislation (ISRO). Instrumental in drafting numerous legislations for the Government of India and the States of Telangana and Andhra Pradesh, including 112 State Legislations on Revenue and Land Laws for Telangana. Completed DRDO-funded research on 'Transfer of Technology in Indian Defence Sector'. As Director, Centre for Aerospace and Defence Laws (CADL), he pioneered various value-added courses in aviation, space, defence, and maritime laws. As Director, Centre for Tribal and Land Rights (CTLR), he drafted numerous legislations for central and state governments. Prolific writer with five acclaimed books on Air and Space Law. Editor-in-Chief of several journals, including the Indian Journal of Air and Space Law."
  };

  const chief3 = {
    name: "A. Anuradha",
    title: "Chief Guest",
    designation: "IBM Executive",
    image: "/img/Anuradha.jpg",
    description: "Global Solutioning Leader, focusing on building large, innovative end-to-end technical solutions for clients. Client Services Leader (driving Delivery Transformation for India Center) and Global Practice Leader (leading Practice Capability, Growth, and Next Gen Offerings). Headed Global Validation Practice at Virtusa and held several Senior Leadership positions at Capgemini, Infosys, and Aricent, specializing in emerging technologies and building large Centers of Excellence (COEs). Champion of inclusion and diversity, actively involved in community building to advance and mentor aspiring women. Passionate about making a positive impact; also serves as a Career coach and Mentor to aspiring rural youth in partnership with NGOs."
  };

  return (
    <div className="">
        <div className='m-4'>
       <AnimatedTitle
        title={`Dignitaries`}
        containerClass="mt-5 !text-white text-center"
      />
      </div>
      <Guest 
        name={chief1.name}
        title={chief1.title}
        designation={chief1.designation}
        image={chief1.image}
        description={chief1.description}
      />
      <Guest 
        name={chief2.name}
        title={chief2.title}
        designation={chief2.designation}
        image={chief2.image}
        description={chief2.description}
      />
      <Guest 
        name={chief3.name}
        title={chief3.title}
        designation={chief3.designation}
        image={chief3.image}
        description={chief3.description}
      />
    </div>
  );
};

export default TwoChiefs;