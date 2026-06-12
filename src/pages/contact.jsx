import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-6">
      
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h1 className="text-4xl font-bold text-blue-700">
          Contact Us
        </h1>

        <p className="text-gray-600 mt-4 text-lg">
          We are here to help you with admissions and academic inquiries.
        </p>
      </div>

      {/* Main Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        
        {/* Contact Information */}
        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 shadow-sm">
          
          <h2 className="text-2xl font-semibold text-orange-500 mb-8">
            Contact Information
          </h2>

          {/* Address */}
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-white p-3 rounded-full shadow">
              <MapPin className="text-blue-600" size={22} />
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-1">
                Address
              </h3>

              <p className="text-gray-600 leading-7">
                प्रेरणा शिक्षण संस्था <br />
                Prerana Balak, Primary, Secondary & Tukaram Gujar Jr. College
                <br />
                Laxminagar, Thergaon, Pune - 33
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-white p-3 rounded-full shadow">
              <Phone className="text-orange-500" size={22} />
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-1">
                Phone
              </h3>

              <p className="text-gray-600">
                7575919090 | 7575929090
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="bg-white p-3 rounded-full shadow">
              <Mail className="text-blue-600" size={22} />
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-1">
                Email
              </h3>

              <p className="text-gray-600">
                info@prerana.edu.in
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 shadow-sm">
          
          <h2 className="text-2xl font-semibold text-blue-700 mb-8">
            Send a Message
          </h2>

          <form className="space-y-5">
            
            {/* Name */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Message
              </label>

              <textarea
                rows="5"
                placeholder="Write your message"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="bg-gradient-to-r from-orange-500 to-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;