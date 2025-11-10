import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
const Hero = () => {
  return <section id="home" className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-24 sm:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/5"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full mb-6 border border-white/10">
            <span className="text-gray-300 text-sm font-medium">
              Trusted by thousands of businesses worldwide
            </span>
          </div>
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-6xl md:text-7xl">
            <span className="block mb-2">Your Premium Partner in</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300">
              Global E-Commerce
            </span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300 sm:text-2xl">
            A&K DreamTrade LLC connects premium products with customers across
            the world's leading marketplaces. Excellence in every transaction.
          </p>
          <div className="mt-10 max-w-md mx-auto sm:flex sm:justify-center gap-4">
            <a href="#contact" className="group w-full sm:w-auto flex items-center justify-center px-8 py-4 border-2 border-transparent text-base font-semibold rounded-lg text-slate-900 bg-white hover:bg-gray-100 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5">
              Get Started Today
              <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="w-full sm:w-auto mt-3 sm:mt-0 flex items-center justify-center px-8 py-4 border-2 border-white/20 text-base font-semibold rounded-lg text-white bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-200">
              Explore Services
            </a>
          </div>
          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-white">6+</div>
              <div className="text-gray-400 text-sm mt-1">Platforms</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-white">10K+</div>
              <div className="text-gray-400 text-sm mt-1">Products</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-gray-400 text-sm mt-1">Countries</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-white">99.9%</div>
              <div className="text-gray-400 text-sm mt-1">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>;
};
export default Hero;