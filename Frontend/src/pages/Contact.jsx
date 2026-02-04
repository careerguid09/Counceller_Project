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
  GraduationCap, 
  List,
  ChevronRight,
  MessageCircle
} from 'lucide-react';

const WhatsAppIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    width="20" 
    height="20" 
    stroke="currentColor" 
    strokeWidth="2" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const Contact = () => {

  useEffect(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}, []);


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: '',
    educationLevel: '',
    targetCountry: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const categories = [
    'Relationships',
    'Career Guidance',
    'Educational',
    'Mental Health',
  ];

  const educationLevels = [
    'High School',
    'Undergraduate',
    'Graduate',
    'Postgraduate',
    'PhD'
  ];

  const targetCountries = [
    'USA',
    'UK',
    'Canada',
    'Australia',
    'Germany',
    'Singapore',
    'Other'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setIsLoading(false);
      setFormData({ 
        name: '', 
        email: '', 
        phone: '', 
        subject: '', 
        category: '',
        educationLevel: '', 
        targetCountry: '', 
        message: '' 
      });
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: 'Call Us',
      info: '+91 98765 43210',
      subinfo: 'Mon-Sat, 9AM to 6PM',
      color: 'bg-blue-50 border-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: 'Email Us',
      info: 'contact@careerguide.com',
      subinfo: 'Response within 24 hours',
      color: 'bg-green-50 border-green-100',
      iconColor: 'text-green-600'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: 'Visit Office',
      info: '123 Education Street',
      subinfo: 'Knowledge City, Delhi 110001',
      color: 'bg-purple-50 border-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: 'Working Hours',
      info: 'Monday - Saturday',
      subinfo: '9:00 AM - 6:00 PM',
      color: 'bg-orange-50 border-orange-100',
      iconColor: 'text-orange-600'
    },
  ];

  const quickLinks = [
    { label: 'Book Free Consultation', href: '#', icon: <Calendar className="w-5 h-5" /> },
    { label: 'Chat on WhatsApp', href: 'https://wa.me/919876543210', icon: <WhatsAppIcon /> },
    { label: 'Meet Our Counselors', href: '#', icon: <User className="w-5 h-5" /> }
  ];

  return (
    <div className="overflow-hidden font-sans">
      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Left Column - Contact Info */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6 mb-8"
              >
                {contactInfo.map((info, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 5 }}
                    className={`${info.color} border rounded-2xl p-6 hover:shadow-md transition-all duration-300`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl ${info.color.replace('50', '100')}`}>
                        <div className={info.iconColor}>
                          {info.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">{info.title}</h3>
                        <p className="text-gray-700 font-medium mb-1">{info.info}</p>
                        <p className="text-sm text-gray-500">{info.subinfo}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

             
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
              >
                <div className="mb-8">
                  <div className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-medium mb-4">
                    Book session with Experts
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Get in Touch with Our Experts
                  </h2>
                  <p className="text-gray-600">
                    Fill out the form below and our admission experts will get back to you within 24 hours.
                  </p>
                </div>

                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3"
                  >
                    <CheckCircle className="text-green-600 w-5 h-5" />
                    <div>
                      <p className="font-medium text-green-800">Message sent successfully!</p>
                      <p className="text-sm text-green-600">We'll get back to you within 24 hours.</p>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
                          placeholder="Enter your name"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    {/* Inquiry Category */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Inquiry Category *
                      </label>
                      <div className="relative">
                        <List className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <select
                          name="category"
                          value={formData.category}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors appearance-none bg-white"
                        >
                          <option value="">Select Category</option>
                          {categories.map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Inquiry Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
                        placeholder="What is this regarding?"
                      />
                    </div>

                    {/* Education Level */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Current Education Level
                      </label>
                      <div className="relative">
                        <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <select
                          name="educationLevel"
                          value={formData.educationLevel}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors appearance-none bg-white"
                        >
                          <option value="">Select level</option>
                          {educationLevels.map((level) => (
                            <option key={level} value={level}>{level}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Target Country */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Select your country
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <select
                          name="targetCountry"
                          value={formData.targetCountry}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors appearance-none bg-white"
                        >
                          <option value="">Select country</option>
                          {targetCountries.map((country) => (
                            <option key={country} value={country}>{country}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                     <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                       Enter your city
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
                          placeholder="Enter your city"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none bg-white"
                      placeholder="Tell us about your goals or questions..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex items-center gap-4">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                        isLoading
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-lg hover:shadow-blue-500/25'
                      } text-white`}
                    >
                      {isLoading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          booking session...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Book Session
                        </>
                      )}
                    </button>
                    
                    <p className="text-sm text-gray-500">
                      * Required fields. We respect your privacy.
                    </p>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-medium mb-4">
              FAQs
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions about our services
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  question: "How soon will I hear back after submitting my inquiry?",
                  answer: "We respond to all inquiries within 24 hours on business days."
                },
                {
                  question: "Do you offer free initial consultations?",
                  answer: "Yes, we offer a free 45-minute strategy session with our experts."
                },
                {
                  question: "What information should I prepare?",
                  answer: "It helps to have your academic transcripts and target goals ready."
                },
                {
                  question: "Do you assist with visa applications?",
                  answer: "Yes, we provide comprehensive support for documentation and preparation."
                }
              ].map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-all duration-300"
                >
                  <h3 className="font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <Calendar className="w-4 h-4 text-blue-400" />
                <span className="font-medium">Ready to Start Your Journey?</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Book a Free Strategy Session
              </h2>
              
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Get personalized guidance from our experts and create 
                a roadmap to your dream college.
              </p>
              
            
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;