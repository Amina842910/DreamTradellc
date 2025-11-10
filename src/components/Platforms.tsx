import React from 'react';
const Platforms = () => {
  const platforms = [{
    name: 'Amazon',
    description: 'Access millions of customers through our Amazon storefront.',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png'
  }, {
    name: 'eBay',
    description: 'Reach global buyers through our established eBay presence.',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/2560px-EBay_logo.svg.png'
  }, {
    name: 'Shopify',
    description: 'Shop our curated collections on our Shopify store.',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/2560px-Shopify_logo_2018.svg.png'
  }, {
    name: 'Walmart',
    description: 'Find our products on Walmart Marketplace.',
    icon: 'https://1000logos.net/wp-content/uploads/2017/05/Walmart-Logo.png'
  }, {
    name: 'Target',
    description: 'Discover our offerings on Target Plus.',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Target_logo.svg/2560px-Target_logo.svg.png'
  }, {
    name: 'Etsy',
    description: 'Discover our unique offerings on Etsy.',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Etsy_logo.svg/2560px-Etsy_logo.svg.png'
  }];
  return <section id="platforms" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            Our Platforms
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Find Us Everywhere
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            A&K DreamTrade LLC maintains a strong presence across all major
            e-commerce platforms.
          </p>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {platforms.map(platform => <div key={platform.name} className="pt-6">
                <div className="flow-root bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl px-6 pb-8 h-full border-2 border-gray-100 hover:border-blue-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="-mt-6">
                    <div className="flex items-center justify-center">
                      <div className="h-20 w-52 flex items-center justify-center bg-white rounded-xl shadow-lg">
                        <img src={platform.icon} alt={platform.name} className="h-10 max-w-full object-contain" />
                      </div>
                    </div>
                    <h3 className="mt-8 text-xl font-semibold text-gray-900 tracking-tight text-center">
                      {platform.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-600 text-center">
                      {platform.description}
                    </p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default Platforms;
