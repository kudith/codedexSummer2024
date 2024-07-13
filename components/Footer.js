import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faFacebook,
  faTiktok,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 bg-dark-blue">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Footer section 1 */}
        <div className="flex-1 px-4 py-4 md:py-0">
          <h3 className="text-lg font-bold text-light-green font-hind mb-2">Created By</h3>
          <p className="font-hind text-sm">This website was created for Codédex Summer Hackathon 2024 by Bratee, Aditya, and Ritwik.</p>
        </div>

        {/* Footer section 2 */}
        <div className="flex-1 px-4 py-4 md:py-0">
          <h3 className="text-lg font-bold text-light-green font-hind mb-2">Contact Us</h3>
          <ul className="list-none space-y-1 font-hind text-sm">
            <li>sipnplaynyc@gmail.com</li>
            <li>718-971-1684</li>
          </ul>
          <div className="social-container flex space-x-4 mt-4">
            <a href="https://discord.com/invite/bdURvWC" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faDiscord} size="lg" />
            </a>
            <a href="https://www.facebook.com/sipnplaynyc/" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="https://www.tiktok.com/@sipnplaynycofficial" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faTiktok} size="lg" />
            </a>
            <a href="https://www.instagram.com/sipnplaynyc/?hl=en" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
          </div>
        </div>

        {/* Footer section 3 */}
        <div className="flex-1 px-4 py-4 md:py-0">
          <h3 className="text-lg font-bold text-light-green font-hind mb-2">Location</h3>
          <p className="font-hind text-sm mb-4">471 5th Ave Brooklyn, NY 11215</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.265213180678!2d-73.9869174!3d40.668124999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25afce910cb65%3A0x51750a9972fb4c0a!2s471%205th%20Ave%2C%20Brooklyn%2C%20NY%2011215%2C%20USA!5e0!3m2!1sen!2sae!4v1720780877931!5m2!1sen!2sae"
            width="100%"
            height="200"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
