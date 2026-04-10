'use client';

import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import MobileMenu from './MobileMenu';
import Logo from "@/components/Header/Logo";
import { AnimatePresence, motion } from 'framer-motion';

const navTransition = {
    layout: { type: 'spring', stiffness: 170, damping: 28, mass: 0.9 },
    y: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
};

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const toggleNavbar = () => setIsOpen(!isOpen);
    const closeNavbar = () => setIsOpen(false);

    return (
        <>
            <div className="h-[80px] md:h-[110px]" aria-hidden="true" />

            <div className="fixed top-0 inset-x-0 z-50 pointer-events-none px-4">
                {/* Desktop Version */}
                <div className="hidden md:block pointer-events-auto">
                    <Navbar closeNavbar={closeNavbar} isScrolled={isScrolled} />
                </div>

                {/* Mobile Version (Aesthetic Refresh) */}
                <div className="md:hidden pointer-events-auto flex justify-center">
                    <motion.nav
                        layout
                        initial={false}
                        animate={{
                            y: isScrolled ? 12 : 0,
                            borderRadius: isScrolled ? 16 : 0,
                            width: isScrolled ? '100%' : '100%',
                        }}
                        transition={navTransition}
                        className={`bg-sea-blue border-2 border-dark-brown transition-all duration-300 ${
                            isScrolled 
                            ? 'shadow-[6px_6px_0px_0px_#49361F] p-2 mt-2' 
                            : 'border-t-0 border-x-0 p-4 w-screen'
                        }`}
                    >
                        <div className="flex justify-between items-center px-2">
                            <Logo compact />
                            
                            <button
                                onClick={toggleNavbar}
                                className="flex items-center gap-2 group"
                                aria-label="Open menu"
                            >
                                <span className="text-[10px] font-black text-dark-brown uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">Menu</span>
                                <div className="p-2 bg-dark-brown text-sea-blue rounded-lg shadow-[3px_3px_0px_0px_#72A409]">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                                        <line x1="4" y1="8" x2="20" y2="8" />
                                        <line x1="4" y1="16" x2="20" y2="16" />
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </motion.nav>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <MobileMenu isOpen={isOpen} toggleNavbar={toggleNavbar} closeNavbar={closeNavbar} />
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;