import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaClock, FaEnvelope } from 'react-icons/fa';


import slider1 from "../assets/slider/1000038559.png"
import south from "../assets/slider/1000038560.png"
import northan from '../assets/slider/northan.png'
const BranchLocator = () => {
  const branches = [
    {
      id: 1,
      name: "BunnyTots Central Campus ",
      // address: "123 Learning Lane, Education District, Delhi 110001",
      phone: "+91 8435470955",
      email: "contact@bunnytotsindia.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM\nSat: 9:00 AM - 2:00 PM",
      image: slider1,
      coordinates: { lat: 28.6139, lng: 77.2090 }
    },
    {
      id: 2,
      name: "BunnyTots Northern Region Campus ",
      // address: "456 Play Street, Child Haven, Mumbai 400001",
      phone: "+91 8435470955",
      email: "contact@bunnytotsindia.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM\nSat: 9:00 AM - 2:00 PM",
      image: northan,
      coordinates: { lat: 19.0760, lng: 72.8777 }
    },
    {
      id: 3,
      name: "BunnyTots Southern Region Campus ",
      // address: "789 Discovery Road, Knowledge Park, Bangalore 560001",
      phone: "+91 8435470955",
      email: "contact@bunnytotsindia.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM\nSat: 9:00 AM - 2:00 PM",
      image: south,
      coordinates: { lat: 12.9716, lng: 77.5946 }
    }
  ];

  return (
    <div className="relative bg-white overflow-hidden">
      {/* Hero Banner */}
      <div className="relative h-96 w-full">
        <img 
          src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Preschool building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Our Branches</h1>
            <p className="text-xl text-white max-w-2xl mx-auto">Find a BunnyTots preschool near you</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative py-16 px-4 sm:px-6 lg:px-8">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#E91E63]/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#E91E63]/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Introduction */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-[#E91E63]/10 text-[#EE2341] rounded-full text-sm font-medium mb-3">
              Find Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#00008B] mb-4">
              Locate Our <span className="text-[#E91E63]">Preschool Branches</span>
            </h2>
            <div className="w-24 h-1 bg-[#E91E63] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
             We're growing! Reach out to learn more about our upcoming branch locations and exciting franchise opportunities in your area.
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="bg-gray-200 rounded-xl h-96 mb-16 flex items-center justify-center">
            <div className="text-center">
              <FaMapMarkerAlt className="text-5xl text-[#E91E63] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800">Interactive Map</h3>
              <p className="text-gray-600">Map integration would go here</p>
            </div>
          </div>

          {/* Branches List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {branches.map((branch) => (
              <div key={branch.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-100">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={branch.image} 
                    alt={branch.name}
                    className="w-full h-full object-cover  transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#E91E63] mb-3">{branch.name}</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      {/* <FaMapMarkerAlt className="text-[#E91E63] mt-1 mr-3 flex-shrink-0" /> */}
                      {/* <p className="text-gray-700">{branch.address}</p> */}
                    </div>
                    
                    <div className="flex items-start">
                      <FaPhone className="text-[#E91E63] mt-1 mr-3 flex-shrink-0" />
                      <p className="text-gray-700">{branch.phone}</p>
                    </div>
                    
                    <div className="flex items-start">
                      <FaEnvelope className="text-[#E91E63] mt-1 mr-3 flex-shrink-0" />
                      <p className="text-gray-700">{branch.email}</p>
                    </div>
                    
                    <div className="flex items-start">
                      <FaClock className="text-[#E91E63] mt-1 mr-3 flex-shrink-0" />
                      <p className="text-gray-700 whitespace-pre-line">{branch.hours}</p>
                    </div>
                  </div>

                  <button className="mt-6 w-full py-2 bg-gradient-to-r from-[#0f172a] to-[#1e3a8a] text-white rounded-lg hover:bg-[#d11f3a] transition-colors">
                    Get Directions
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-[#FEEBEF] rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Can't Find Your Location?</h2>
            <p className="text-gray-700 max-w-2xl mx-auto mb-6">
              We're expanding! Contact us to learn about upcoming branches in your area or franchise opportunities.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-[#0f172a] to-[#1e3a8a] text-white font-semibold rounded-full hover:bg-[#d11f3a] transition-colors shadow-md hover:shadow-lg">
              Contact About New Branches
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BranchLocator;