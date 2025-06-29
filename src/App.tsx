import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProperties from './components/FeaturedProperties';
import TrustIndicators from './components/TrustIndicators';
import AgentSection from './components/AgentSection';
import Footer from './components/Footer';
import { type Property } from './data/mockData';

function App() {
  const [searchResults, setSearchResults] = useState<Property[] | undefined>(undefined);
  const [searchFilters, setSearchFilters] = useState<any>(undefined);

  const handleSearch = (results: Property[], filters: any) => {
    setSearchResults(results);
    setSearchFilters(filters);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero onSearch={handleSearch} />
      <TrustIndicators />
      <FeaturedProperties searchResults={searchResults} searchFilters={searchFilters} />
      <AgentSection />
      <Footer />
    </div>
  );
}

export default App;