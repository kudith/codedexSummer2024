"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
const owner = "/assets/owner_rm.png";

const AboutUs = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <div className="p-3 md:h-[550px] flex items-center justify-center" ref={ref}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="flex flex-col md:flex-row justify-between w-11/12 max-w-screen-xl mt-5 mb-7 pb-2 mx-auto items-center md:gap-5"
            >
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
                    transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                    className="flex flex-col mt-3 items-end text-center md:text-right"
                >
                    <p className="font-inknut text-3xl mb-3 mx-3 text-light-green">Who even</p>
                    <p className="text-xl font-hind mr-3">
                        Our Founder, Jonathan Li, shares a deep-rooted passion for board games, boba, and exquisite cuisine, which inspired him to establish Sip & Play, Park Slope&rsquo;s premier board game cafe. With a vision to create a welcoming space where community and gaming enthusiasts alike can gather, Jonathan transformed his passion into reality.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
                    transition={{ duration: 1, delay: 1, ease: 'easeOut' }}
                    className="flex justify-center items-center w-[1440px]"
                >
                    <Image
                        src={owner}
                        alt="Jonathan Li"
                        className="bg-eggshell rounded-lg shadow-lg"
                        layout="intrinsic"
                        width={800}
                        height={733}
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
                    transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                    className="flex flex-col mt-3 text-center md:text-left"
                >
                    <p className="font-inknut text-3xl mx-3 mb-3 text-light-green">are we?</p>
                    <p className="text-xl font-hind ml-3">
                        Beyond our extensive game collection, we invite you to indulge in our meticulously crafted beverages and culinary delights. From artisanal coffee and espresso to refreshing boba drinks, our menu is curated to complement your gaming experience. Pair your favorite game with our selection of sandwiches, snacks, and desserts, meticulously prepared to satisfy every palate.
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default AboutUs;
