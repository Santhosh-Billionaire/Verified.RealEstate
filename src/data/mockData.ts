// Mock data for the real estate platform
export interface Property {
  id: number;
  title: string;
  price: string;
  priceValue: number;
  location: string;
  city: string;
  state: string;
  zipCode: string;
  image: string;
  images: string[];
  beds: number;
  baths: number;
  sqft: number;
  propertyType: 'house' | 'condo' | 'townhouse' | 'apartment';
  verified: boolean;
  featured: boolean;
  description: string;
  yearBuilt: number;
  lotSize: string;
  parking: string;
  amenities: string[];
  agentId: number;
  listingDate: string;
  daysOnMarket: number;
  virtualTour?: string;
  floorPlan?: string;
}

export interface Agent {
  id: number;
  name: string;
  title: string;
  image: string;
  rating: number;
  reviews: number;
  sales: number;
  specialties: string[];
  phone: string;
  email: string;
  bio: string;
  experience: number;
  languages: string[];
  certifications: string[];
  socialMedia: {
    linkedin?: string;
    facebook?: string;
    instagram?: string;
  };
}

export const mockAgents: Agent[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    title: 'Senior Real Estate Agent',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    rating: 4.9,
    reviews: 127,
    sales: 250,
    specialties: ['Luxury Homes', 'First-Time Buyers', 'Investment Properties'],
    phone: '(555) 123-4567',
    email: 'sarah@verified.realestate',
    bio: 'With over 8 years of experience in luxury real estate, Sarah has helped hundreds of families find their dream homes. She specializes in high-end properties and first-time buyer guidance.',
    experience: 8,
    languages: ['English', 'Spanish'],
    certifications: ['Certified Residential Specialist', 'Luxury Home Marketing Specialist'],
    socialMedia: {
      linkedin: 'https://linkedin.com/in/sarahjohnson',
      facebook: 'https://facebook.com/sarahjohnsonrealty',
      instagram: 'https://instagram.com/sarahjohnsonhomes'
    }
  },
  {
    id: 2,
    name: 'Michael Chen',
    title: 'Investment Property Specialist',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    rating: 4.8,
    reviews: 98,
    sales: 180,
    specialties: ['Investment Properties', 'Commercial', 'Multi-Family'],
    phone: '(555) 234-5678',
    email: 'michael@verified.realestate',
    bio: 'Michael is a seasoned investment property specialist with a keen eye for profitable real estate opportunities. He has helped investors build portfolios worth millions.',
    experience: 12,
    languages: ['English', 'Mandarin', 'Cantonese'],
    certifications: ['Certified Commercial Investment Member', 'Real Estate Investment Advisor'],
    socialMedia: {
      linkedin: 'https://linkedin.com/in/michaelchen',
      facebook: 'https://facebook.com/michaelchenrealty'
    }
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    title: 'Residential Sales Expert',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    rating: 5.0,
    reviews: 89,
    sales: 145,
    specialties: ['Family Homes', 'Relocation', 'New Construction'],
    phone: '(555) 345-6789',
    email: 'emily@verified.realestate',
    bio: 'Emily brings passion and dedication to every transaction. She understands that buying a home is one of life\'s biggest decisions and guides her clients every step of the way.',
    experience: 6,
    languages: ['English', 'Spanish', 'Portuguese'],
    certifications: ['Graduate Realtor Institute', 'Relocation Specialist'],
    socialMedia: {
      linkedin: 'https://linkedin.com/in/emilyrodriguez',
      instagram: 'https://instagram.com/emilyrodriguezhomes'
    }
  },
  {
    id: 4,
    name: 'David Thompson',
    title: 'Luxury Home Specialist',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    rating: 4.9,
    reviews: 156,
    sales: 320,
    specialties: ['Luxury Homes', 'Waterfront Properties', 'Historic Homes'],
    phone: '(555) 456-7890',
    email: 'david@verified.realestate',
    bio: 'David specializes in luxury and historic properties, bringing unmatched expertise to high-end real estate transactions. His attention to detail is legendary.',
    experience: 15,
    languages: ['English', 'French'],
    certifications: ['Certified Luxury Home Marketing Specialist', 'Historic Property Specialist'],
    socialMedia: {
      linkedin: 'https://linkedin.com/in/davidthompson',
      facebook: 'https://facebook.com/davidthompsonluxury'
    }
  }
];

export const mockProperties: Property[] = [
  {
    id: 1,
    title: 'Modern Downtown Condo',
    price: '$485,000',
    priceValue: 485000,
    location: 'Downtown Seattle, WA',
    city: 'Seattle',
    state: 'WA',
    zipCode: '98101',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    images: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    beds: 2,
    baths: 2,
    sqft: 1200,
    propertyType: 'condo',
    verified: true,
    featured: true,
    description: 'Stunning modern condo in the heart of downtown Seattle. Floor-to-ceiling windows offer breathtaking city views. Premium finishes throughout including hardwood floors, granite countertops, and stainless steel appliances.',
    yearBuilt: 2018,
    lotSize: 'N/A',
    parking: '1 Garage Space',
    amenities: ['City Views', 'Hardwood Floors', 'Granite Countertops', 'Stainless Appliances', 'In-Unit Laundry', 'Gym', 'Rooftop Deck'],
    agentId: 1,
    listingDate: '2024-01-15',
    daysOnMarket: 12,
    virtualTour: 'https://example.com/virtual-tour-1'
  },
  {
    id: 2,
    title: 'Charming Family Home',
    price: '$625,000',
    priceValue: 625000,
    location: 'Maple Valley, WA',
    city: 'Maple Valley',
    state: 'WA',
    zipCode: '98038',
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    images: [
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    beds: 4,
    baths: 3,
    sqft: 2400,
    propertyType: 'house',
    verified: true,
    featured: true,
    description: 'Beautiful family home in quiet neighborhood. Open floor plan perfect for entertaining. Large backyard with mature landscaping. Updated kitchen with island and pantry.',
    yearBuilt: 2005,
    lotSize: '0.25 acres',
    parking: '2-Car Garage',
    amenities: ['Open Floor Plan', 'Updated Kitchen', 'Large Backyard', 'Master Suite', 'Walk-in Closets', 'Fireplace', 'Deck'],
    agentId: 3,
    listingDate: '2024-01-10',
    daysOnMarket: 17,
    virtualTour: 'https://example.com/virtual-tour-2'
  },
  {
    id: 3,
    title: 'Luxury Waterfront Villa',
    price: '$1,250,000',
    priceValue: 1250000,
    location: 'Bellevue, WA',
    city: 'Bellevue',
    state: 'WA',
    zipCode: '98004',
    image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    images: [
      'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    beds: 5,
    baths: 4,
    sqft: 3800,
    propertyType: 'house',
    verified: true,
    featured: true,
    description: 'Exceptional waterfront estate with panoramic lake views. Custom-built luxury home featuring high-end finishes, gourmet kitchen, wine cellar, and private dock.',
    yearBuilt: 2015,
    lotSize: '0.75 acres',
    parking: '3-Car Garage + Circular Driveway',
    amenities: ['Waterfront', 'Private Dock', 'Wine Cellar', 'Gourmet Kitchen', 'Home Theater', 'Office', 'Guest Suite', 'Pool'],
    agentId: 4,
    listingDate: '2024-01-08',
    daysOnMarket: 19,
    virtualTour: 'https://example.com/virtual-tour-3'
  },
  {
    id: 4,
    title: 'Cozy Starter Home',
    price: '$385,000',
    priceValue: 385000,
    location: 'Tacoma, WA',
    city: 'Tacoma',
    state: 'WA',
    zipCode: '98402',
    image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    images: [
      'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1571464/pexels-photo-1571464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    beds: 3,
    baths: 2,
    sqft: 1600,
    propertyType: 'house',
    verified: true,
    featured: false,
    description: 'Perfect starter home in established neighborhood. Recently updated with new flooring and paint. Fenced backyard great for pets and children.',
    yearBuilt: 1985,
    lotSize: '0.15 acres',
    parking: '1-Car Garage + Driveway',
    amenities: ['Updated Flooring', 'Fresh Paint', 'Fenced Yard', 'Storage Shed', 'Covered Porch'],
    agentId: 3,
    listingDate: '2024-01-12',
    daysOnMarket: 15
  },
  {
    id: 5,
    title: 'Contemporary Townhouse',
    price: '$545,000',
    priceValue: 545000,
    location: 'Kirkland, WA',
    city: 'Kirkland',
    state: 'WA',
    zipCode: '98033',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    images: [
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1571465/pexels-photo-1571465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    beds: 3,
    baths: 2.5,
    sqft: 1850,
    propertyType: 'townhouse',
    verified: true,
    featured: false,
    description: 'Modern townhouse in desirable Kirkland location. Open concept living with vaulted ceilings. Private patio and attached garage.',
    yearBuilt: 2010,
    lotSize: 'N/A',
    parking: '2-Car Garage',
    amenities: ['Vaulted Ceilings', 'Open Concept', 'Private Patio', 'Modern Kitchen', 'Master Suite'],
    agentId: 2,
    listingDate: '2024-01-14',
    daysOnMarket: 13
  },
  {
    id: 6,
    title: 'Historic Craftsman',
    price: '$795,000',
    priceValue: 795000,
    location: 'Capitol Hill, WA',
    city: 'Seattle',
    state: 'WA',
    zipCode: '98102',
    image: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    images: [
      'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1571466/pexels-photo-1571466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    beds: 4,
    baths: 3,
    sqft: 2200,
    propertyType: 'house',
    verified: true,
    featured: false,
    description: 'Beautifully restored 1920s Craftsman home. Original hardwood floors, built-in cabinetry, and period details throughout. Walking distance to shops and restaurants.',
    yearBuilt: 1925,
    lotSize: '0.12 acres',
    parking: 'Street Parking',
    amenities: ['Original Hardwood', 'Built-in Cabinetry', 'Period Details', 'Updated Kitchen', 'Restored Features', 'Garden'],
    agentId: 4,
    listingDate: '2024-01-09',
    daysOnMarket: 18
  },
  {
    id: 7,
    title: 'Modern Loft Apartment',
    price: '$425,000',
    priceValue: 425000,
    location: 'South Lake Union, WA',
    city: 'Seattle',
    state: 'WA',
    zipCode: '98109',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    beds: 1,
    baths: 1,
    sqft: 950,
    propertyType: 'apartment',
    verified: true,
    featured: false,
    description: 'Industrial-style loft in trendy South Lake Union. Exposed brick, high ceilings, and modern amenities. Perfect for urban professionals.',
    yearBuilt: 2012,
    lotSize: 'N/A',
    parking: '1 Parking Space',
    amenities: ['Exposed Brick', 'High Ceilings', 'Modern Kitchen', 'In-Unit Laundry', 'Gym Access', 'Rooftop Terrace'],
    agentId: 1,
    listingDate: '2024-01-16',
    daysOnMarket: 11
  },
  {
    id: 8,
    title: 'Suburban Family Estate',
    price: '$875,000',
    priceValue: 875000,
    location: 'Redmond, WA',
    city: 'Redmond',
    state: 'WA',
    zipCode: '98052',
    image: 'https://images.pexels.com/photos/1396125/pexels-photo-1396125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    images: [
      'https://images.pexels.com/photos/1396125/pexels-photo-1396125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    beds: 5,
    baths: 3.5,
    sqft: 3200,
    propertyType: 'house',
    verified: true,
    featured: true,
    description: 'Spacious family home in excellent school district. Formal dining room, family room with fireplace, and large kitchen with island. Beautifully landscaped yard.',
    yearBuilt: 2000,
    lotSize: '0.33 acres',
    parking: '3-Car Garage',
    amenities: ['Formal Dining', 'Family Room', 'Fireplace', 'Large Kitchen', 'Master Suite', 'Landscaped Yard', 'Deck'],
    agentId: 3,
    listingDate: '2024-01-11',
    daysOnMarket: 16
  }
];

// Helper functions for filtering and searching
export const filterProperties = (
  properties: Property[],
  filters: {
    location?: string;
    propertyType?: string;
    priceRange?: string;
    bedrooms?: string;
    searchTerm?: string;
  }
) => {
  return properties.filter(property => {
    // Location filter
    if (filters.location && filters.location.trim()) {
      const locationMatch = 
        property.city.toLowerCase().includes(filters.location.toLowerCase()) ||
        property.state.toLowerCase().includes(filters.location.toLowerCase()) ||
        property.zipCode.includes(filters.location) ||
        property.location.toLowerCase().includes(filters.location.toLowerCase());
      if (!locationMatch) return false;
    }

    // Property type filter
    if (filters.propertyType && filters.propertyType !== '') {
      if (property.propertyType !== filters.propertyType) return false;
    }

    // Price range filter
    if (filters.priceRange && filters.priceRange !== '') {
      const [min, max] = filters.priceRange.split('-').map(p => p === '+' ? Infinity : parseInt(p));
      if (property.priceValue < min || (max && property.priceValue > max)) return false;
    }

    // Bedrooms filter
    if (filters.bedrooms && filters.bedrooms !== '') {
      const minBeds = parseInt(filters.bedrooms);
      if (property.beds < minBeds) return false;
    }

    // Search term filter
    if (filters.searchTerm && filters.searchTerm.trim()) {
      const searchLower = filters.searchTerm.toLowerCase();
      const searchMatch = 
        property.title.toLowerCase().includes(searchLower) ||
        property.description.toLowerCase().includes(searchLower) ||
        property.location.toLowerCase().includes(searchLower) ||
        property.amenities.some(amenity => amenity.toLowerCase().includes(searchLower));
      if (!searchMatch) return false;
    }

    return true;
  });
};

export const sortProperties = (properties: Property[], sortBy: string) => {
  const sorted = [...properties];
  
  switch (sortBy) {
    case 'price-low':
      return sorted.sort((a, b) => a.priceValue - b.priceValue);
    case 'price-high':
      return sorted.sort((a, b) => b.priceValue - a.priceValue);
    case 'newest':
      return sorted.sort((a, b) => new Date(b.listingDate).getTime() - new Date(a.listingDate).getTime());
    case 'oldest':
      return sorted.sort((a, b) => new Date(a.listingDate).getTime() - new Date(b.listingDate).getTime());
    case 'sqft-large':
      return sorted.sort((a, b) => b.sqft - a.sqft);
    case 'sqft-small':
      return sorted.sort((a, b) => a.sqft - b.sqft);
    default:
      return sorted;
  }
};

export const getAgentById = (id: number): Agent | undefined => {
  return mockAgents.find(agent => agent.id === id);
};

export const getPropertiesByAgent = (agentId: number): Property[] => {
  return mockProperties.filter(property => property.agentId === agentId);
};