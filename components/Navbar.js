"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '/public/assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-sea-blue px-4 py-4 md:px-8 lg:px-16">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="relative w-20 h-20">
            <Image src={logo} alt="Sip & Play Café Logo" layout="fill" objectFit="contain" />
          </div>
          <div>
            <h1 className="text-eggshell text-3xl font-bold font-inknut md:text-4xl">Sip & Play Café</h1>
            <p className="text-light-brown text-sm font-hind">Forget and savor that sip.</p>
          </div>
        </div>
        <div className="hidden md:flex space-x-8 text-eggshell text-lg">
          <NavLink href="/" label="Home" />
          <NavLink href="/menu-page" label="Menu" />
          <NavLink href="/events" label="Events" />
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavbar} className="text-eggshell focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} transition duration-300 ease-in-out`}>
        <div className="mt-4 flex flex-col space-y-2 text-eggshell text-lg">
          <NavLink href="/" label="Home" />
          <NavLink href="/menu-page" label="Menu" />
          <NavLink href="/events" label="Events" />
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, label }) => {
  return (
    <Link href={href}>
      <div className="hover:text-light-brown cursor-pointer">{label}</div>
    </Link>
  );
};

export default Navbar;
