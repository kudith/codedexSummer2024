"use client"

import React, { useEffect } from 'react';
import styles from './custom.css';

const SocialMediaEmbeds = () => {
  useEffect(() => {
    let intervalId;
    
    const scrollContainer = document.getElementById('scrollContainer');
    
    const startScroll = () => {
      intervalId = setInterval(() => {
        if (scrollContainer) {
          scrollContainer.scrollLeft += 1;
        }
      }, 20);
    };

    const stopScroll = () => {
      clearInterval(intervalId);
    };

    startScroll(); // Start scrolling when the component mounts

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h3 className="text-lg font-bold text-light-green font-inknut">Created By</h3>
      <div className="relative overflow-hidden py-5">
        <div
          className="flex space-x-4 animate-scroll"
          onMouseEnter={() => stopScroll()}
          onMouseLeave={() => startScroll()}
          id="scrollContainer"
        >
          {/* Social media embed example */}
          <div className="w-64 h-64 bg-blue-500 rounded-lg flex items-center justify-center text-white">
            Embed 1
          </div>
          <div className="w-64 h-64 bg-red-500 rounded-lg flex items-center justify-center text-white">
            Embed 2
          </div>
          <div className="w-64 h-64 bg-green-500 rounded-lg flex items-center justify-center text-white">
            Embed 3
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaEmbeds;
