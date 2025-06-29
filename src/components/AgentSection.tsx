import React, { useState } from 'react';
import { Star, Phone, Mail, MessageCircle, Award, MapPin, Calendar, Users, TrendingUp } from 'lucide-react';
import { mockAgents, getPropertiesByAgent } from '../data/mockData';

const AgentSection = () => {
  const [selectedAgent, setSelectedAgent] = useState<number | null>(null);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    agentId: null as number | null
  });
  const [showContactForm, setShowContactForm] = useState(false);

  const handleContactAgent = (agentId: number) => {
    setContactForm(prev => ({ ...prev, agentId }));
    setShowContactForm(true);
  };

  const handleSubmitContact = (e: React.FormEvent) => {
    e.preventDefault();
    const agent = mockAgents.find(a => a.id === contactForm.agentId);
    alert(`Thank you! Your message has been sent to ${agent?.name}. They will contact you within 24 hours.`);
    setShowContactForm(false);
    setContactForm({ name: '', email: '', phone: '', message: '', agentId: null });
  };

  const handleScheduleConsultation = (agentId: number) => {
    const agent = mockAgents.find(a => a.id === agentId);
    alert(`Scheduling consultation with ${agent?.name}. You will receive a calendar invite shortly.`);
  };

  const getAgentStats = (agentId: number) => {
    const properties = getPropertiesByAgent(agentId);
    return {
      activeListings: properties.length,
      avgPrice: properties.length > 0 
        ? Math.round(properties.reduce((sum, p) => sum + p.priceValue, 0) / properties.length)
        : 0,
      recentSales: Math.floor(Math.random() * 10) + 5 // Mock recent sales
    };
  };

  return (
    <section id="agents" className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Meet Our Certified Agents
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Work with licensed, background-checked professionals who are committed 
            to helping you find your perfect home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {mockAgents.map((agent) => {
            const stats = getAgentStats(agent.id);
            const isExpanded = selectedAgent === agent.id;

            return (
              <div key={agent.id} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-emerald-200">
                {/* Agent Header */}
                <div className="p-8">
                  <div className="flex items-start space-x-6">
                    {/* Agent Photo */}
                    <div className="relative flex-shrink-0">
                      <img 
                        src={agent.image} 
                        alt={agent.name}
                        className="w-24 h-24 rounded-2xl object-cover shadow-lg"
                      />
                      <div className="absolute -bottom-2 -right-2">
                        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-2 rounded-full shadow-lg">
                          <Award className="h-5 w-5" />
                        </div>
                      </div>
                    </div>

                    {/* Agent Info */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {agent.name}
                      </h3>
                      <p className="text-gray-600 mb-3 font-medium">{agent.title}</p>
                      
                      {/* Rating */}
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-5 w-5 ${i < Math.floor(agent.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600 font-medium">
                          {agent.rating} ({agent.reviews} reviews)
                        </span>
                      </div>

                      {/* Quick Stats */}
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-3">
                          <div className="font-bold text-blue-600 text-lg">{agent.sales}</div>
                          <div className="text-gray-600 text-sm">Sales</div>
                        </div>
                        <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-3">
                          <div className="font-bold text-emerald-600 text-lg">{agent.experience}y</div>
                          <div className="text-gray-600 text-sm">Experience</div>
                        </div>
                        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-3">
                          <div className="font-bold text-orange-600 text-lg">{stats.activeListings}</div>
                          <div className="text-gray-600 text-sm">Active</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="mt-6">
                    <div className="flex flex-wrap gap-2">
                      {agent.specialties.map((specialty, index) => (
                        <span 
                          key={index}
                          className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 px-3 py-2 rounded-full text-sm font-semibold"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact Actions */}
                  <div className="mt-8 space-y-3">
                    <button 
                      onClick={() => handleContactAgent(agent.id)}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                    >
                      <MessageCircle className="h-5 w-5" />
                      <span>Message {agent.name.split(' ')[0]}</span>
                    </button>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <a 
                        href={`tel:${agent.phone}`}
                        className="flex items-center justify-center space-x-2 bg-gray-100 text-gray-700 py-3 rounded-xl hover:bg-gray-200 transition-all duration-300 font-medium"
                      >
                        <Phone className="h-4 w-4" />
                        <span>Call</span>
                      </a>
                      <a 
                        href={`mailto:${agent.email}`}
                        className="flex items-center justify-center space-x-2 bg-gray-100 text-gray-700 py-3 rounded-xl hover:bg-gray-200 transition-all duration-300 font-medium"
                      >
                        <Mail className="h-4 w-4" />
                        <span>Email</span>
                      </a>
                    </div>
                  </div>

                  {/* Expand/Collapse Button */}
                  <button
                    onClick={() => setSelectedAgent(isExpanded ? null : agent.id)}
                    className="w-full mt-6 text-blue-600 hover:text-blue-700 font-semibold py-2 hover:bg-blue-50 rounded-lg transition-all duration-300"
                  >
                    {isExpanded ? 'Show Less' : 'View Full Profile'}
                  </button>
                </div>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="border-t border-gray-200 p-8 bg-gradient-to-br from-gray-50 to-gray-100">
                    {/* Bio */}
                    <div className="mb-8">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg">About {agent.name.split(' ')[0]}</h4>
                      <p className="text-gray-600 leading-relaxed">{agent.bio}</p>
                    </div>

                    {/* Detailed Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                        <div className="flex items-center space-x-2 mb-2">
                          <TrendingUp className="h-5 w-5 text-green-500" />
                          <span className="font-semibold text-gray-900">Avg. Sale Price</span>
                        </div>
                        <div className="text-2xl font-bold text-gray-900">
                          ${stats.avgPrice.toLocaleString()}
                        </div>
                      </div>
                      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                        <div className="flex items-center space-x-2 mb-2">
                          <Calendar className="h-5 w-5 text-blue-500" />
                          <span className="font-semibold text-gray-900">Recent Sales</span>
                        </div>
                        <div className="text-2xl font-bold text-gray-900">
                          {stats.recentSales} this month
                        </div>
                      </div>
                    </div>

                    {/* Languages & Certifications */}
                    <div className="space-y-6">
                      <div>
                        <h5 className="font-bold text-gray-900 mb-3">Languages</h5>
                        <div className="flex flex-wrap gap-2">
                          {agent.languages.map((language, index) => (
                            <span key={index} className="bg-gray-200 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium">
                              {language}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-bold text-gray-900 mb-3">Certifications</h5>
                        <div className="space-y-2">
                          {agent.certifications.map((cert, index) => (
                            <div key={index} className="flex items-center space-x-3">
                              <Award className="h-4 w-4 text-yellow-500" />
                              <span className="text-gray-600">{cert}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Form Modal */}
        {showContactForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Contact {mockAgents.find(a => a.id === contactForm.agentId)?.name}
              </h3>
              <form onSubmit={handleSubmitContact} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={contactForm.email}
                    onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    value={contactForm.phone}
                    onChange={(e) => setContactForm(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={contactForm.message}
                    onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Tell us about your real estate needs..."
                  />
                </div>
                <div className="flex space-x-4 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold shadow-lg"
                  >
                    Send Message
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowContactForm(false)}
                    className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-all duration-300 font-semibold"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Find Your Dream Home?
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Connect with one of our certified agents today and start your journey 
            to homeownership with complete confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => handleScheduleConsultation(1)}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Schedule Consultation
            </button>
            <button 
              onClick={() => {
                const propertiesSection = document.getElementById('properties');
                if (propertiesSection) {
                  propertiesSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 font-bold text-lg transform hover:-translate-y-1"
            >
              Browse Properties
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentSection;