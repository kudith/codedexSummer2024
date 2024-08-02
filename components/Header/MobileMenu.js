import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { IoClose } from 'react-icons/io5';
import logo from '../../public/assets/logo.png';
import Logo from '@/components/Header/Logo';

const menuVariants = {
  hidden: { opacity: 0, x: '100%' },
  visible: { opacity: 1, x: '0%', transition: { duration: 0.5, ease: 'easeInOut' } },
  exit: { opacity: 0, x: '100%', transition: { duration: 0.5, ease: 'easeInOut' } },
};

const MobileMenu = ({ isOpen, toggleNavbar, closeNavbar }) => (
  <motion.div
    className="fixed inset-0 bg-sea-blue flex flex-col items-center justify-center z-50"
    initial="hidden"
    animate={isOpen ? 'visible' : 'hidden'}
    exit="exit"
    variants={menuVariants}
  >
    {/* Sip & Play Logo Nav */}
    <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-2 z-50">
      <Logo />
      <button onClick={toggleNavbar} className="mr-5 focus:outline-none">
        <IoClose className="w-8 h-8" />
      </button>
    </div>
    <div className="relative w-full h-full flex flex-col items-center justify-center z-0">
      <div className="absolute inset-0 opacity-10 z-0 pointer-events-none">
        {/* Background logo */}
        <Image src={logo} alt="Sip & Play Café Logo" layout="fill" objectFit="contain" />
      </div>
      {["Home", "Menu", "Events"].map((label, index) => (
        <NavLink
          key={index}
          href={`/${label.toLowerCase().replace(" ", "-")}`}
          label={label}
          onClick={closeNavbar}
        />
      ))}
    </div>
  </motion.div>
);

const NavLink = ({ href, label, onClick }) => (
  <Link href={href}>
    <p onClick={onClick} className="text-3xl transition duration-300 ease-in-out hover:text-light-brown cursor-pointer my-4 z-50">
      {label}
    </p>
  </Link>
);

export default MobileMenu;
