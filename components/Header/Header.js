"use client";
import React, { useState } from 'react';
import Navbar from './Navbar';
import MobileMenu from './MobileMenu';
import { useMediaQuery } from '../../utils/media_query';
import Logo from "@/components/Header/Logo";
import { AnimatePresence } from 'framer-motion';
import { IoMenu } from 'react-icons/io5';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useMediaQuery('max-width: 767px');

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const closeNavbar = () => {
        setIsOpen(false);
    };

    return (
        <>
            {isMobile ? (
                <>
                    <nav className="sticky top-0 bg-sea-blue bg-opacity-90 backdrop-filter backdrop-blur-lg p-2 shadow-xl md:px-8 lg:px-16 z-50 font-inknut">
                        <div className="flex justify-between items-center">
                            <Logo />
                            <button
                                onClick={toggleNavbar}
                                className="mr-5 z-50 focus:outline-none"
                            >
                                <IoMenu className="w-6 h-6" />
                            </button>
                        </div>
                    </nav>
                    <AnimatePresence>
                        {isOpen && (
                            <MobileMenu
                                isOpen={isOpen}
                                toggleNavbar={toggleNavbar}
                                closeNavbar={closeNavbar}
                            />
                        )}
                    </AnimatePresence>
                </>
            ) : (
                <Navbar closeNavbar={closeNavbar} />
            )}
        </>
    );
};

export default Header;
