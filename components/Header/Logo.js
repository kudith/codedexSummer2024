'use client';

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import logo from "@/public/assets/logo.png";

export default function Logo({ compact = false }) {
  // Pengaturan ukuran logo (tetap fleksibel)
  const logoSize = compact ? "w-12 h-12 sm:w-14 sm:h-14" : "w-16 h-16 md:w-20 md:h-20";
  
  // Pengaturan gaya teks editorial
  const titleClass = compact
    ? "text-dark-blue text-base sm:text-lg font-inknut leading-none tracking-tighter"
    : "text-dark-blue text-xl md:text-3xl font-inknut leading-none tracking-tighter";

  return (
    <Link href="/" className="group flex items-center space-x-3 transition-opacity hover:opacity-90">
      {/* Container Gambar dengan animasi scale saat hover */}
      <motion.div 
        whileHover={{ scale: 1.05, rotate: -2 }}
        whileTap={{ scale: 0.95 }}
        className={`relative ${logoSize} shrink-0`}
      >
        <Image
          src={logo}
          alt="Sip & Play Café Logo"
          fill
          sizes={compact ? "56px" : "80px"}
          priority
          className="object-contain"
        />
      </motion.div>

      {/* Teks Logo */}
      <div className="flex flex-col justify-center min-w-0">
        <span className={`${titleClass} block uppercase`}>
          Sip & Play
        </span>
        {!compact && (
          <span className="text-[10px] md:text-xs font-bold font-hind text-light-green tracking-[0.3em] uppercase mt-1">
            Board Game Café
          </span>
        )}
      </div>
    </Link>
  );
}