import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">Musafir</h2>
          <p>Blog Publisher</p>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="md:mr-8 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p>
              <FaMapMarkerAlt className="inline mr-2" />
              123 Travel Street, Lahore
            </p>
            <p>
              <FaEnvelope className="inline mr-2" />
              info@musafir.com
            </p>
            <p>
              <FaPhone className="inline mr-2" />
              +92 306 4550891
            </p>
          </div>

          {/* Additional Links or Information */}
          {/* Add more divs or use a navigation component based on your needs */}
        </div>
      </div>

      <div className="mt-8 text-center">
        <p>&copy; 2024 Musafir. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
