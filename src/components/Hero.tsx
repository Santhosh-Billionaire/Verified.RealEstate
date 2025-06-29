import React, { useState } from 'react';
import { Search, MapPin, Home, DollarSign, Filter } from 'lucide-react';
import { filterProperties, mockProperties } from '../data/mockData';

interface HeroProps {
  onSearch?: (results: any[], filters: any) => void;
}

const Hero: React.FC<HeroProps> = ({ onSearch }) => {
  const [searchFilters, setSearchFilters] = useState({
    location: '',
    propertyType: '',
    priceRange: '',
    bedrooms: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setSearchFilters(prev => ({ ...prev, [field]: value }));
  };

  const handleSearch = () => {
    const results = filterProperties(mockProperties, searchFilters);
    if (onSearch) {
      onSearch(results, searchFilters);
    }
    
    // Scroll to properties section
    const propertiesSection = document.getElementById('properties');
    if (propertiesSection) {
      propertiesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 py-20 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Find Your Perfect Home with
            <span className="text-blue-200 block">100% Verification</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
            Every property is verified by our experts. If any listing information is incorrect, 
            we guarantee your money back. No hidden fees, no surprises.
          </p>
          
          {/* Trust Badge */}
          <div className="inline-flex items-center bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 px-4 py-2 rounded-full text-sm font-medium mb-12">
            <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
            Money-Back Guarantee on All Listings
          </div>
        </div>

        {/* Advanced Search */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* Location */}
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="City, State, or ZIP"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900"
                value={searchFilters.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
              />
            </div>

            {/* Property Type */}
            <div className="relative">
              <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none bg-white text-gray-900"
                value={searchFilters.propertyType}
                onChange={(e) => handleInputChange('propertyType', e.target.value)}
              >
                <option value="">Property Type</option>
                <option value="house">House</option>
                <option value="condo">Condo</option>
                <option value="townhouse">Townhouse</option>
                <option value="apartment">Apartment</option>
              </select>
            </div>

            {/* Price Range */}
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none bg-white text-gray-900"
                value={searchFilters.priceRange}
                onChange={(e) => handleInputChange('priceRange', e.target.value)}
              >
                <option value="">Price Range</option>
                <option value="0-200000">Under $200k</option>
                <option value="200000-400000">$200k - $400k</option>
                <option value="400000-600000">$400k - $600k</option>
                <option value="600000-800000">$600k - $800k</option>
                <option value="800000-1000000">$800k - $1M</option>
                <option value="1000000+">$1M+</option>
              </select>
            </div>

            {/* Bedrooms */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none bg-white text-gray-900"
                value={searchFilters.bedrooms}
                onChange={(e) => handleInputChange('bedrooms', e.target.value)}
              >
                <option value="">Bedrooms</option>
                <option value="1">1+ Bed</option>
                <option value="2">2+ Beds</option>
                <option value="3">3+ Beds</option>
                <option value="4">4+ Beds</option>
                <option value="5">5+ Beds</option>
              </select>
            </div>
          </div>

          {/* Search Button */}
          <button 
            onClick={handleSearch}
            className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
          >
            <Search className="h-5 w-5" />
            <span>Search Verified Properties</span>
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-blue-200 mb-2">25,000+</div>
            <div className="text-blue-100">Verified Properties</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-emerald-300 mb-2">100%</div>
            <div className="text-blue-100">Money-Back Guarantee</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-orange-300 mb-2">500+</div>
            <div className="text-blue-100">Certified Agents</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;