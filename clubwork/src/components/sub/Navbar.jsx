'use client'
import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import gsap from 'gsap';
import { useWindowScroll } from 'react-use';
import { TiLocationArrow } from 'react-icons/ti';
import { useRouter } from 'next/navigation';

const NavBar = () => {
  const navContainerRef = useRef(null);
  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const router = useRouter();
  
  const navitems = ["Domains" , "Register"]
  // Show/hide navbar on scroll
  useEffect(() => {
    if (currentScrollY === 0) {
      // Topmost position: show navbar without floating-nav
      setIsNavVisible(true);
      if (navContainerRef.current) {
        navContainerRef.current.classList.remove('floating-nav');
      }
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false);
      if (navContainerRef.current) {
        navContainerRef.current.classList.add('floating-nav');
      }
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: show navbar with floating-nav
      setIsNavVisible(true);
      if (navContainerRef.current) {
        navContainerRef.current.classList.add('floating-nav');
      }
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  // Animate navbar visibility
  useEffect(() => {
    if (navContainerRef.current) {
      gsap.to(navContainerRef.current, {
        y: isNavVisible ? 0 : -100,
        opacity: isNavVisible ? 1 : 0,
        duration: 0.2,
      });
    }
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          {/* Logo */}
          <div className="flex items-center gap-7">
            <img src="/img/AU.png" alt="logo" className="w-30 h-10" />
            <img src="/img/csikalogo.png" className="w-20 h-20" alt="Csi logo" />
          </div>

          {/* Navigation Links and Audio Button */}
          <div className="flex h-full items-center gap-5">
            <div className='hidden md:block'>
                <a className='nav-hover-btn' href='#problemStatements'>
                  Problem Statements
                </a>
                <a className='nav-hover-btn' href='https://forms.gle/pwPfdLTuKCBMzkFEA'>
                  Register
                </a>
                <a className='nav-hover-btn' href='#'>
                  Schedule
                </a>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;