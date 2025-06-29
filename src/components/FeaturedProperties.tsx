import React, { useState, useEffect } from 'react';
import { MapPin, Bed, Bath, Square, Heart, Eye, CheckCircle, Calendar, SortAsc, Home } from 'lucide-react';
import { mockProperties, sortProperties, getAgentById, type Property } from '../data/mockData';

interface FeaturedPropertiesProps {
  searchResults?: Property[];
  searchFilters?: any;
}

const FeaturedProperties: React.FC<FeaturedPropertiesProps> = ({ searchResults, searchFilters }) => {
  const [properties, setProperties] = useState<Property[]>(mockProperties);
  const [sortBy, setSortBy] = useState('featured');
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [viewedProperties, setViewedProperties] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (searchResults && searchResults.length > 0) {
      setProperties(searchResults);
    } else {
      setProperties(mockProperties);
    }
  }, [searchResults]);

  const handleSort = (sortOption: string) => {
    setSortBy(sortOption);
    const sorted = sortProperties(properties, sortOption);
    setProperties(sorted);
  };

  const toggleFavorite = (propertyId: number) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(propertyId)) {
        newFavorites.delete(propertyId);
      } else {
        newFavorites.add(propertyId);
      }
      return newFavorites;
    });
  };

  const handleViewProperty = (propertyId: number) => {
    setViewedProperties(prev => new Set(prev).add(propertyId));
    // In a real app, this would navigate to property details
    alert(`Viewing details for property ${propertyId}`);
  };

  const handleScheduleTour = (propertyId: number) => {
    const property = properties.find(p => p.id === propertyId);
    const agent = property ? getAgentById(property.agentId) : null;
    alert(`Scheduling tour for "${property?.title}" with ${agent?.name || 'agent'}`);
  };

  const displayedProperties = properties.slice(0, 12); // Show max 12 properties

  return (
    <section id="properties" className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {searchResults && searchResults.length > 0 ? 'Search Results' : 'Featured Verified Properties'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              {searchResults && searchResults.length > 0 
                ? `Found ${searchResults.length} properties matching your criteria`
                : 'Every property has been personally inspected and verified by our team. Find your perfect home with complete confidence.'
              }
            </p>
          </div>

          {/* Sort Controls */}
          <div className="flex items-center space-x-4 mt-6 md:mt-0 bg-white rounded-xl px-4 py-2 shadow-sm border border-gray-200">
            <SortAsc className="h-5 w-5 text-gray-400" />
            <select
              value={sortBy}
              onChange={(e) => handleSort(e.target.value)}
              className="border-0 bg-transparent focus:ring-0 focus:outline-none text-gray-700 font-medium"
            >
              <option value="featured">Featured First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest First</option>
              <option value="sqft-large">Largest First</option>
              <option value="sqft-small">Smallest First</option>
            </select>
          </div>
        </div>

        {displayedProperties.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl shadow-sm">
            <div className="text-gray-400 mb-4">
              <Home className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Properties Found</h3>
            <p className="text-gray-600">Try adjusting your search criteria to find more properties.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProperties.map((property) => {
              const agent = getAgentById(property.agentId);
              const isFavorite = favorites.has(property.id);
              const isViewed = viewedProperties.has(property.id);

              return (
                <div key={property.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100 hover:border-blue-200">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={property.image} 
                      alt={property.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex flex-col space-y-2">
                      {property.verified && (
                        <div className="bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1 shadow-lg">
                          <CheckCircle className="h-3 w-3" />
                          <span>Verified</span>
                        </div>
                      )}
                      {property.featured && (
                        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                          Featured
                        </div>
                      )}
                      <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1 shadow-lg">
                        <Calendar className="h-3 w-3" />
                        <span>{property.daysOnMarket} days</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <button 
                        onClick={() => toggleFavorite(property.id)}
                        className={`p-2 rounded-full shadow-lg transition-all duration-300 ${
                          isFavorite 
                            ? 'bg-red-500 text-white scale-110' 
                            : 'bg-white/90 hover:bg-white text-gray-600 hover:scale-110'
                        }`}
                      >
                        <Heart className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
                      </button>
                      <button 
                        onClick={() => handleViewProperty(property.id)}
                        className={`p-2 rounded-full shadow-lg transition-all duration-300 ${
                          isViewed 
                            ? 'bg-blue-500 text-white scale-110' 
                            : 'bg-white/90 hover:bg-white text-gray-600 hover:scale-110'
                        }`}
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                    </div>

                    {/* Price */}
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-white/95 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-xl font-bold text-lg shadow-lg">
                        {property.price}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {property.title}
                    </h3>
                    
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="h-4 w-4 mr-2 text-blue-500" />
                      <span className="text-sm">{property.location}</span>
                    </div>

                    {/* Property Details */}
                    <div className="flex justify-between items-center text-sm text-gray-600 mb-6 bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center space-x-1">
                        <Bed className="h-4 w-4 text-blue-500" />
                        <span className="font-medium">{property.beds} beds</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Bath className="h-4 w-4 text-blue-500" />
                        <span className="font-medium">{property.baths} baths</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Square className="h-4 w-4 text-blue-500" />
                        <span className="font-medium">{property.sqft.toLocaleString()} sqft</span>
                      </div>
                    </div>

                    {/* Agent Info */}
                    {agent && (
                      <div className="flex items-center space-x-3 mb-4 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
                        <img 
                          src={agent.image} 
                          alt={agent.name}
                          className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                        />
                        <div>
                          <div className="text-sm font-semibold text-gray-900">{agent.name}</div>
                          <div className="text-xs text-gray-600">{agent.title}</div>
                        </div>
                      </div>
                    )}

                    {/* Amenities Preview */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {property.amenities.slice(0, 3).map((amenity, index) => (
                          <span 
                            key={index}
                            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {amenity}
                          </span>
                        ))}
                        {property.amenities.length > 3 && (
                          <span className="text-xs text-gray-500 px-3 py-1 bg-gray-100 rounded-full">
                            +{property.amenities.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex space-x-3">
                      <button 
                        onClick={() => handleViewProperty(property.id)}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
                      >
                        View Details
                      </button>
                      <button 
                        onClick={() => handleScheduleTour(property.id)}
                        className="flex-1 border-2 border-blue-600 text-blue-600 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold"
                      >
                        Schedule Tour
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* View All Button */}
        {!searchResults && (
          <div className="text-center mt-16">
            <button className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-10 py-4 rounded-xl hover:from-gray-800 hover:to-gray-700 transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              View All {mockProperties.length} Properties
            </button>
          </div>
        )}

        {/* Search Summary */}
        {searchResults && searchFilters && (
          <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
            <h4 className="font-bold text-blue-900 mb-3 text-lg">Search Criteria:</h4>
            <div className="flex flex-wrap gap-3">
              {searchFilters.location && (
                <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full font-medium">
                  Location: {searchFilters.location}
                </span>
              )}
              {searchFilters.propertyType && (
                <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full font-medium">
                  Type: {searchFilters.propertyType}
                </span>
              )}
              {searchFilters.priceRange && (
                <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full font-medium">
                  Price: ${searchFilters.priceRange.replace('-', ' - $')}
                </span>
              )}
              {searchFilters.bedrooms && (
                <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full font-medium">
                  Beds: {searchFilters.bedrooms}+
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProperties;