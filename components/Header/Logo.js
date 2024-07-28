import Image from "next/image";
import logo from "@/public/assets/logo.png";
import React from "react";

export default function Logo() {
    return (
        <div className="flex items-center space-x-4">
            <div className="relative w-20 h-20">
                <Image src={logo}
                       alt="Sip & Play Café Logo"
                       layout="fill"
                       objectFit="contain"
                />
            </div>
            <div>
                <h1 className="text-eggshell text-2xl font-inknut md:text-4xl mb-2">Sip & Play Café</h1>
            </div>
        </div>
    )
}