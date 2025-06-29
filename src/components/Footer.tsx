import React from 'react';
import { Shield, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="h-10 w-10 text-blue-400" />
              <span className="text-2xl font-bold">
                Verified<span className="text-blue-400">.RealEstate</span>
              </span>
            </div>
            <p className="text-gray-300 mb-8 max-w-md leading-relaxed text-lg">
              Your trusted partner in real estate. Every property verified, 
              every agent certified, and every transaction backed by our 
              money-back guarantee.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-3 bg-white/5 rounded-lg">
                <Phone className="h-6 w-6 text-blue-400" />
                <span className="text-gray-300 text-lg">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-4 p-3 bg-white/5 rounded-lg">
                <Mail className="h-6 w-6 text-blue-400" />
                <span className="text-gray-300 text-lg">hello@verified.realestate</span>
              </div>
              <div className="flex items-center space-x-4 p-3 bg-white/5 rounded-lg">
                <MapPin className="h-6 w-6 text-blue-400" />
                <span className="text-gray-300 text-lg">Seattle, WA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#properties" className="text-gray-300 hover:text-blue-400 transition-colors text-lg hover:translate-x-1 transform duration-300 block">Properties</a></li>
              <li><a href="#agents" className="text-gray-300 hover:text-blue-400 transition-colors text-lg hover:translate-x-1 transform duration-300 block">Agents</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors text-lg hover:translate-x-1 transform duration-300 block">About Us</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors text-lg hover:translate-x-1 transform duration-300 block">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors text-lg hover:translate-x-1 transform duration-300 block">List Property</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors text-lg hover:translate-x-1 transform duration-300 block">Property Verification</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors text-lg hover:translate-x-1 transform duration-300 block">Home Buying</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors text-lg hover:translate-x-1 transform duration-300 block">Home Selling</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors text-lg hover:translate-x-1 transform duration-300 block">Investment Properties</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors text-lg hover:translate-x-1 transform duration-300 block">Market Analysis</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 pt-12 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-2xl p-8 border border-blue-500/20">
            <div className="mb-6 md:mb-0">
              <h4 className="text-2xl font-bold mb-3 text-white">Stay Updated</h4>
              <p className="text-gray-300 text-lg">Get the latest verified properties delivered to your inbox.</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 md:w-80 px-6 py-4 rounded-l-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              />
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-r-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold text-lg shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-lg">
            © 2024 Verified.RealEstate. All rights reserved.
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-6 mt-6 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110">
              <Facebook className="h-7 w-7" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110">
              <Twitter className="h-7 w-7" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110">
              <Instagram className="h-7 w-7" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110">
              <Linkedin className="h-7 w-7" />
            </a>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-gray-800 pt-6 mt-8">
          <div className="flex flex-wrap justify-center space-x-8 text-gray-400">
            <a href="#" className="hover:text-blue-400 transition-colors text-lg">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors text-lg">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition-colors text-lg">Cookie Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors text-lg">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;