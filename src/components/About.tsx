import React from 'react';
const About = () => {
  return <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            About Us
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            The A&K DreamTrade Story
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="prose prose-blue prose-lg text-gray-600">
              <p>
                A&K DreamTrade LLC was founded with a simple mission: to connect
                quality products with customers across the digital marketplace.
                What started as a small operation has grown into a
                multi-platform retail and wholesale business with a global
                reach.
              </p>
              <p>
                Our team of e-commerce experts specializes in identifying market
                trends, sourcing high-quality products, and delivering
                exceptional customer service. We've built strong relationships
                with manufacturers and suppliers worldwide, allowing us to offer
                competitive pricing for both retail customers and wholesale
                partners.
              </p>
              <p>
                With a presence on Amazon, eBay, Shopify, Walmart, Target, and
                Etsy, we've diversified our reach to meet customers wherever
                they prefer to shop. Our commitment to quality, reliability, and
                customer satisfaction has earned us a reputation as a trusted
                partner in the e-commerce space.
              </p>
            </div>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&auto=format&fit=crop" alt="Team collaboration" className="rounded-2xl shadow-2xl" />
          </div>
        </div>
        <div className="mt-16">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl px-8 py-12">
            <h2 className="text-3xl font-bold leading-7 text-gray-900 text-center mb-12">
              Our Values
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">💎</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Quality
                </h3>
                <p className="text-base text-gray-600">
                  We never compromise on the quality of our products or service.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Integrity
                </h3>
                <p className="text-base text-gray-600">
                  We conduct our business with honesty and transparency.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Innovation
                </h3>
                <p className="text-base text-gray-600">
                  We constantly adapt to the evolving e-commerce landscape.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">⭐</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Customer Focus
                </h3>
                <p className="text-base text-gray-600">
                  We put our customers' needs at the center of everything we do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;