"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/assets/logo.png';
import Logo from "@/components/Header/Logo";

const Navbar = ({ closeNavbar }) => {
  return (
    <nav className="sticky top-0 bg-sea-blue bg-opacity-90 backdrop-filter backdrop-blur-lg p-2 shadow-xl md:px-8 lg:px-16 z-20 font-inknut">
      <div className="flex justify-between items-center">
        <Logo/>
        <div className="hidden md:flex space-x-8 text-eggshell text-2xl">
          <NavLink href="/" label="Home" onClick={closeNavbar} />
          <NavLink href="/menu-page" label="Menu" onClick={closeNavbar} />
          <NavLink href="/events" label="Events" onClick={closeNavbar} />
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, label, onClick }) => {
  return (
    <Link href={href}>
      <div onClick={onClick} className="transition duration-300 ease-in-out hover:text-light-brown cursor-pointer">
        {label}
      </div>
    </Link>
  );
};

export default Navbar;
