import React from 'react';
import { Shield, CheckCircle, Award, Users } from 'lucide-react';

const TrustIndicators = () => {
  const indicators = [
    {
      icon: Shield,
      title: 'Verified Listings',
      description: 'Every property is personally inspected and verified by our expert team',
      color: 'text-blue-600'
    },
    {
      icon: CheckCircle,
      title: 'Money-Back Guarantee',
      description: 'If any listing detail is incorrect, we guarantee your money back',
      color: 'text-emerald-600'
    },
    {
      icon: Award,
      title: 'Certified Agents',
      description: 'Work only with licensed, background-checked real estate professionals',
      color: 'text-orange-600'
    },
    {
      icon: Users,
      title: 'Trusted by 50K+',
      description: 'Join thousands of satisfied homebuyers who found their perfect home',
      color: 'text-purple-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Verified.RealEstate?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another real estate platform. We're your trusted partner 
            in finding the perfect home with complete peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {indicators.map((indicator, index) => {
            const Icon = indicator.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`h-8 w-8 ${indicator.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {indicator.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {indicator.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Trust Badges */}
        <div className="mt-20 flex flex-wrap justify-center items-center gap-8 opacity-70">
          <div className="text-sm font-semibold text-gray-500 tracking-wider">TRUSTED BY</div>
          <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm">
            <Shield className="h-5 w-5 text-blue-500" />
            <span className="text-gray-700 font-medium">Better Business Bureau A+</span>
          </div>
          <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm">
            <CheckCircle className="h-5 w-5 text-emerald-500" />
            <span className="text-gray-700 font-medium">Licensed & Insured</span>
          </div>
          <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm">
            <Award className="h-5 w-5 text-orange-500" />
            <span className="text-gray-700 font-medium">Industry Awards Winner</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;