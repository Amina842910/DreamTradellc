import React from 'react';
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
const Contact = () => {
  return <section id="contact" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            Contact Us
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Get In Touch
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We're here to answer your questions and discuss how we can help your
            business grow.
          </p>
        </div>
        <div className="mt-10">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Contact Information
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Reach out to us through any of these channels.
              </p>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500 flex items-center">
                    <MailIcon className="h-5 w-5 text-blue-500 mr-2" />
                    Email
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    contact@dreamtradellc.com
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500 flex items-center">
                    <PhoneIcon className="h-5 w-5 text-blue-500 mr-2" />
                    Phone
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    +1 (330) 554-3385
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500 flex items-center">
                    <MapPinIcon className="h-5 w-5 text-blue-500 mr-2" />
                    Address
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    123 E-Commerce Way, Suite 456
                    <br />
                    Business District, NY 10001
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-6">
              <div className="mt-5 md:mt-0">
                <form action="https://formspree.io/f/myzlygey" method="POST" className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        First name
                      </label>
                      <input type="text" name="first-name" id="first-name" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border" />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Last name
                      </label>
                      <input type="text" name="last-name" id="last-name" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border" />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email address
                      </label>
                      //<input type="text" name="email" id="email" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border" />
                        <input type="hidden" name="_subject" value="New Contact Message" />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone number
                      </label>
                      <input type="text" name="phone" id="phone" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border" />
                    </div>
                    <div className="col-span-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message
                      </label>
                      <textarea name="message" id="message" rows={4} className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border"></textarea>
                    </div>
                  </div>
                  <div className="mt-6">
                    <button type="submit" className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-1">
                <div className="bg-blue-50 p-6 rounded-lg shadow h-full flex flex-col justify-center">
                  <h3 className="text-lg font-medium text-gray-900">
                    Business Hours
                  </h3>
                  <div className="mt-6 space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Monday - Friday:</span>
                      <span className="text-gray-900">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Saturday:</span>
                      <span className="text-gray-900">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Sunday:</span>
                      <span className="text-gray-900">Closed</span>
                    </div>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-lg font-medium text-gray-900">
                      Customer Support
                    </h3>
                    <p className="mt-2 text-gray-500">
                      Our customer support team is available during business
                      hours to assist you with any inquiries or concerns.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;
