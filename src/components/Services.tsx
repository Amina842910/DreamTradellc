import React from 'react';
import { ShoppingCartIcon, TruckIcon, UsersIcon, BarChartIcon } from 'lucide-react';
const Services = () => {
  const services = [{
    name: 'Retail Sales',
    description: 'We offer premium products directly to consumers across multiple platforms, ensuring the best shopping experience.',
    icon: <ShoppingCartIcon className="h-6 w-6" />,
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&auto=format&fit=crop'
  }, {
    name: 'Wholesale Distribution',
    description: 'Partner with us for bulk purchases at competitive prices. We supply businesses of all sizes.',
    icon: <TruckIcon className="h-6 w-6" />,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop'
  }, {
    name: 'Multi-Platform Management',
    description: "We handle all aspects of e-commerce across multiple platforms so you don't have to.",
    icon: <UsersIcon className="h-6 w-6" />,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop'
  }, {
    name: 'Market Analysis',
    description: 'We continuously analyze market trends to offer the most in-demand products at competitive prices.',
    icon: <BarChartIcon className="h-6 w-6" />,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop'
  }];
  return <section id="services" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            Our Services
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What We Offer
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            A&K DreamTrade LLC provides comprehensive retail and wholesale
            solutions.
          </p>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {services.map(service => <div key={service.name} className="relative group">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="h-48 overflow-hidden">
                    <img src={service.image} alt={service.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-blue-500 text-white shadow-lg">
                        {service.icon}
                      </div>
                      <h3 className="ml-4 text-xl leading-6 font-semibold text-gray-900">
                        {service.name}
                      </h3>
                    </div>
                    <p className="text-base text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default Services;