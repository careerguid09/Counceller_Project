import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Calendar,
  User,
  MessageCircle,
  ChevronRight,
  Shield,
  Globe,
  Headphones,
  Users
} from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    service: '',
    message: '',
  });


  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const services = [
    'Career Counselors',
    'Relationship Counselors',
    'Mental Health Counselors',
    'Educational Counselors',
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/clients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      // success
      setIsSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        city: '',
        category: '',
        message: '',
      });

      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error("Form submit error:", error);
      alert("Failed to submit form. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with slight gradient */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-indigo-50/30" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6"
            >
              <Globe className="w-4 h-4" />
              <span>Global Support Network</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Connect With Our Expert
              <span className="text-blue-600 block">Counseling Team</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
            >
              Begin your journey towards better mental health and personal growth.
              Our certified counselors are here to guide you every step of the way.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

            {/* Left Info Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Contact Cards */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Details</h2>

                {[
                  {
                    icon: <Phone className="w-5 h-5" />,
                    title: 'Phone Support',
                    info: '+1 (555) 123-4567',
                    subinfo: 'Available 24/7',
                    color: 'bg-blue-50 text-blue-600'
                  },
                  {
                    icon: <Mail className="w-5 h-5" />,
                    title: 'Email',
                    info: 'support@counselhub.com',
                    subinfo: 'Response within 2 hours',
                    color: 'bg-green-50 text-green-600'
                  },
                  {
                    icon: <MapPin className="w-5 h-5" />,
                    title: 'Our Office',
                    info: '123 Wellness Avenue',
                    subinfo: 'San Francisco, CA',
                    color: 'bg-purple-50 text-purple-600'
                  },
                  {
                    icon: <Clock className="w-5 h-5" />,
                    title: 'Working Hours',
                    info: 'Mon - Sun',
                    subinfo: '8:00 AM - 10:00 PM',
                    color: 'bg-amber-50 text-amber-600'
                  }
                ].map((info, idx) => (
                  <div key={idx} className="flex items-start space-x-4 mb-6 last:mb-0">
                    <div className={`p-3 rounded-xl ${info.color} flex-shrink-0`}>
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{info.title}</h3>
                      <p className="text-gray-700 font-medium mt-1">{info.info}</p>
                      <p className="text-sm text-gray-500 mt-1">{info.subinfo}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 p-8">
                <h3 className="font-bold text-gray-900 mb-6">Quick Actions</h3>

                <div className="space-y-4">
                  <a
                    href="tel:+15551234567"
                    className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Phone className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="font-medium text-gray-900">Call Now</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </a>

                  <a
                    href="https://wa.me/15551234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:border-green-300 hover:shadow-md transition-all group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <MessageCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="font-medium text-gray-900">WhatsApp Chat</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Form Column - Takes 2 columns */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
                {/* Form Header */}
                <div className="mb-10">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-3xl font-bold text-gray-900">Schedule Your Session</h2>
                    <div className="hidden md:flex items-center space-x-2 px-3 py-1.5 bg-blue-50 rounded-full">
                      <Headphones className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium text-blue-700">Expert Support</span>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Fill out the form below and one of our specialists will contact you to schedule
                    your first consultation. All inquiries are confidential.
                  </p>
                </div>

                {/* Success Message */}
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl"
                  >
                    <div className="flex items-start space-x-4">
                      <CheckCircle className="text-green-600 w-6 h-6 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-green-800 text-lg mb-2">Thank You for Reaching Out!</h4>
                        <p className="text-green-700">
                          Your consultation request has been received. Our team will contact you within
                          2 hours to schedule your session. Check your email for confirmation.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Details */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                      <User className="w-5 h-5 mr-3 text-blue-600" />
                      Personal Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          placeholder="your.email@example.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>


                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          City / Town
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          placeholder="Enter your city or town"
                        />
                      </div>



                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Service Interested In *
                        </label>
                        <select
                          name="category"
                          value={formData.category}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Message Section */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                      <MessageCircle className="w-5 h-5 mr-3 text-blue-600" />
                      Tell Us About Your Needs
                    </h3>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                        placeholder="Please describe what you'd like to discuss during your consultation..."
                      />
                      <p className="text-sm text-gray-500 mt-2">
                        Be as detailed as possible so we can match you with the right specialist.
                      </p>
                    </div>
                  </div>

                  {/* Submit Section */}
                  <div className="pt-6 border-t border-gray-200">
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Shield className="w-4 h-4 text-blue-600" />
                        <span>100% Confidential & Secure</span>
                      </div>

                      <button
                        type="submit"
                        disabled={isLoading}
                        className={`flex items-center justify-center px-8 py-4 rounded-lg font-semibold transition-all ${isLoading
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg'
                          } text-white`}
                      >
                        {isLoading ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                            Processing...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-3" />
                            Request Consultation
                            <ChevronRight className="w-5 h-5 ml-2" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Assurance Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Services</h2>
            <p className="text-gray-600 text-lg">
              We provide professional counseling with a personal touch
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Expert Counselors',
                description: 'Certified professionals with 10+ years of experience'
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Complete Privacy',
                description: 'HIPAA compliant, 100% confidential sessions'
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: 'Flexible Scheduling',
                description: '24/7 availability across time zones'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl p-8 text-center border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-blue-50 rounded-2xl flex items-center justify-center">
                  <div className="text-blue-600">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-12 border border-blue-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ready to Begin Your Journey?
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Take the first step towards personal growth and wellness.
                Our team is ready to support you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#"
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center"
                >
                  <Calendar className="w-5 h-5 mr-3" />
                  Book Free Session
                </a>
                <a
                  href="tel:+15551234567"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg border-2 border-blue-200 hover:border-blue-300 hover:shadow-sm transition-all font-semibold flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  Call for Inquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;