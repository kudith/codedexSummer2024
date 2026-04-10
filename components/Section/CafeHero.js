"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Pastikan path import sesuai dengan struktur foldermu
import BoardImage from "../../public/assets/board.png";
import LogoImage from "../../public/assets/logo.png";

const CafeHero = () => {
  return (
    <section className="relative w-full min-h-[90vh] bg-sea-blue overflow-hidden font-hind flex items-center py-20 lg:py-0">
      {/* Background Decor - Menggunakan palet warna kustom */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-24 left-24 w-[500px] h-[500px] bg-eggshell rounded-full blur-3xl opacity-60"></div>
        <div className="absolute top-1/2 -right-20 w-96 h-96 bg-light-green/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col lg:flex-row items-center gap-16 lg:gap-12 z-10">
        {/* Left Section (Typography & CTA) */}
        <div className="w-full lg:w-1/2 flex flex-col text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-light-green font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-6 block">
              Park Slope&rsquo;s Premier Board Game Cafe
            </span>

            <h1 className="font-inknut text-5xl md:text-7xl xl:text-8xl text-dark-brown leading-[1.05] mb-8 tracking-tighter">
              Are you ready to <br className="hidden lg:block" />
              <span className="text-light-green relative inline-block mt-2">
                sip & play?
                {/* Decorative underline */}
                <span className="absolute -bottom-2 left-0 w-full h-2 bg-dark-brown/10 -z-10 rounded-full"></span>
              </span>
            </h1>

            <p className="text-dark-blue text-lg md:text-xl font-medium leading-relaxed max-w-xl mx-auto lg:mx-0 mb-12">
              Explore your newest friendgroup hotspot. Bring on the heat with
              intensive strategy games, and chill it out with our signature boba
              and artisanal coffee.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <Link href="/menu">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-dark-brown text-sea-blue font-inknut text-sm tracking-widest uppercase rounded-sm shadow-[8px_8px_0px_0px_#72A409] hover:shadow-none hover:translate-y-[8px] hover:translate-x-[8px] transition-all duration-200 border-2 border-dark-brown"
                >
                  Explore Now
                </motion.button>
              </Link>

              <div className="flex flex-col items-center lg:items-start">
                <span className="text-xs font-bold text-dark-brown/40 uppercase tracking-widest">
                  Est. 2024
                </span>
                <span className="text-sm font-bold text-dark-brown uppercase">
                  Brooklyn, NY
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Section (Visual Collage - No 3D) */}
        <div className="w-full lg:w-1/2 relative flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full max-w-[550px] aspect-square flex items-center justify-center"
          >
            {/* Main Image Frame (Board) */}
            <motion.div
              initial={{ rotate: -2 }}
              whileHover={{ rotate: 0 }}
              className="absolute top-10 left-10 w-[70%] h-[80%] bg-eggshell border-2 border-dark-brown rounded-2xl shadow-[20px_20px_0px_0px_#DAB281] overflow-hidden z-10"
            >
              <Image
                src={BoardImage}
                alt="Board Games Collection"
                fill
                className="object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-700"
                priority
                sizes="(max-width: 768px) 100vw, 70vw"
              />
            </motion.div>

            {/* BIG LOGO - Fokus utama baru */}
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: -10 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
              whileHover={{ rotate: 0, scale: 1.05 }}
              className="absolute bottom-10 right-0 w-64 h-64 md:w-80 md:h-80 z-20 drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
            >
              <div className="relative w-full h-full transform hover:scale-105 transition-transform duration-500">
                <Image
                  src={LogoImage}
                  alt="Sip & Play Massive Logo"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </div>

              {/* Decorative Tag behind logo */}
              <div className="absolute -top-4 -right-4 bg-light-green text-dark-brown font-black py-2 px-6 rounded-full border-2 border-dark-brown text-xs uppercase tracking-[0.2em] -rotate-12 z-30 shadow-md">
                Board Game Cafe
              </div>
            </motion.div>

            {/* Accent Elements */}
            <div className="absolute -bottom-4 left-20 w-24 h-24 bg-olive-green/20 rounded-full blur-2xl z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CafeHero;
