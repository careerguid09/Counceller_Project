import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaCalendarAlt, 
  FaClock, 
  FaUser, 
  FaGraduationCap, 
  FaPhone, 
  FaEnvelope,
  FaCheckCircle,
  FaGlobeAmericas,
  FaChalkboardTeacher,
  FaArrowRight
} from 'react-icons/fa';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    educationLevel: '',
    targetCountry: '',
    preferredDate: '',
    preferredTime: '',
    consultationType: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const educationLevels = [
    'High School Student',
    'Undergraduate (Current)',
    'Graduate (Current)',
    'Recent Graduate',
    'Working Professional'
  ];

  const targetCountries = [
    'USA',
    'UK',
    'Canada',
    'Australia',
    'Germany',
    'Singapore',
    'Other European',
    'Multiple Countries'
  ];

  const consultationTypes = [
    { 
      type: 'Basic Strategy', 
      duration: '30 mins', 
      features: ['Profile Evaluation', 'Basic Roadmap'],
      price: 'Free'
    },
    { 
      type: 'Comprehensive', 
      duration: '45 mins', 
      features: ['Detailed Analysis', 'College Shortlist', 'Action Plan'],
      price: '₹999'
    },
    { 
      type: 'Premium', 
      duration: '60 mins', 
      features: ['All Comprehensive +', 'Scholarship Strategy', 'Essay Review Sample'],
      price: '₹1,999'
    }
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const counselors = [
    { name: 'Dr. Ananya Sharma', specialty: 'USA & Ivy League', experience: '15+ years' },
    { name: 'Rajesh Mehta', specialty: 'MBA Admissions', experience: '12+ years' },
    { name: 'Priya Patel', specialty: 'UK & Europe', experience: '10+ years' }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', { ...formData, selectedSlot });
    setIsSubmitted(true);
  };

  const nextAvailableDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }));
    }
    return dates;
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center bg-gradient-to-br from-gray-900 via-black to-gray-800 pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '30px 30px'
            }}></div>
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <FaCalendarAlt className="text-blue-400" />
                <span className="text-sm font-medium text-white/90">Book Your Session</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Free Strategy Session
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Get personalized guidance from our expert counselors and create 
                a roadmap to your dream college in 45 minutes.
               </p>

              <div className="flex flex-wrap justify-center gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">45</div>
                  <div className="text-gray-300">Minutes Session</div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-white/20"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">98%</div>
                  <div className="text-gray-300">Success Rate</div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-white/20"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">1500+</div>
                  <div className="text-gray-300">Students Guided</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Booking Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Left Column - Consultation Types */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Session</h2>
                
                <div className="space-y-4">
                  {consultationTypes.map((type, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.02 }}
                      className={`border-2 rounded-xl p-5 cursor-pointer transition-all duration-300 ${
                        formData.consultationType === type.type 
                          ? 'border-blue-500 bg-blue-50' 
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                      onClick={() => setFormData({...formData, consultationType: type.type})}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-bold text-gray-900">{type.type}</h3>
                          <p className="text-sm text-gray-600">{type.duration}</p>
                        </div>
                        <div className="text-lg font-bold text-blue-600">{type.price}</div>
                      </div>
                      
                      <div className="space-y-2">
                        {type.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2 text-sm text-gray-600">
                            <FaCheckCircle className="text-green-500 text-xs" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Available Counselors */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Available Counselors</h3>
                  <div className="space-y-4">
                    {counselors.map((counselor, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                          {counselor.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900">{counselor.name}</h4>
                          <p className="text-sm text-gray-600">{counselor.specialty}</p>
                          <p className="text-xs text-gray-500">{counselor.experience} experience</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Booking Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
              >
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="inline-flex p-4 rounded-full bg-green-100 mb-6">
                      <FaCheckCircle className="text-green-600 text-4xl" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Booking Confirmed!</h2>
                    <p className="text-gray-600 mb-6">
                      Your free strategy session has been booked. Our team will 
                      contact you within 24 hours to confirm the details.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-blue-600 font-medium hover:text-blue-700"
                    >
                      Book Another Session
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Personal Details</h2>
                    <p className="text-gray-600 mb-8">Fill in your details to book your session</p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Name */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <div className="relative">
                            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                              placeholder="Enter your full name"
                            />
                          </div>
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <div className="relative">
                            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
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
                            <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                              placeholder="Enter your phone number"
                            />
                          </div>
                        </div>

                        {/* Education Level */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Current Education Level *
                          </label>
                          <div className="relative">
                            <FaGraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <select
                              name="educationLevel"
                              value={formData.educationLevel}
                              onChange={handleChange}
                              required
                              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors appearance-none"
                            >
                              <option value="">Select your education level</option>
                              {educationLevels.map((level) => (
                                <option key={level} value={level}>{level}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        {/* Target Country */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Target Study Destination *
                          </label>
                          <div className="relative">
                            <FaGlobeAmericas className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <select
                              name="targetCountry"
                              value={formData.targetCountry}
                              onChange={handleChange}
                              required
                              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors appearance-none"
                            >
                              <option value="">Select target country</option>
                              {targetCountries.map((country) => (
                                <option key={country} value={country}>{country}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        {/* Preferred Date */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Preferred Date *
                          </label>
                          <div className="relative">
                            <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <select
                              name="preferredDate"
                              value={formData.preferredDate}
                              onChange={handleChange}
                              required
                              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors appearance-none"
                            >
                              <option value="">Select preferred date</option>
                              {nextAvailableDates().map((date, idx) => (
                                <option key={idx} value={date}>{date}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Time Slots */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-4">
                          Preferred Time Slot *
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          {timeSlots.map((slot, idx) => (
                            <motion.button
                              key={idx}
                              type="button"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => {
                                setSelectedSlot(slot);
                                setFormData({...formData, preferredTime: slot});
                              }}
                              className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                                selectedSlot === slot
                                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                                  : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                              }`}
                            >
                              <div className="flex items-center justify-center gap-2">
                                <FaClock className="text-sm" />
                                <span className="font-medium">{slot}</span>
                              </div>
                            </motion.button>
                          ))}
                        </div>
                      </div>

                      {/* Additional Message */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Additional Information (Optional)
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="3"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                          placeholder="Any specific questions or topics you'd like to discuss..."
                        />
                      </div>

                      {/* Submit Button */}
                      <div className="pt-4">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          type="submit"
                          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3"
                        >
                          <FaCalendarAlt />
                          <span>Confirm Booking</span>
                          <FaArrowRight />
                        </motion.button>
                        
                        <p className="text-center text-sm text-gray-500 mt-4">
                          By booking, you agree to our Terms & Privacy Policy
                        </p>
                      </div>
                    </form>
                  </>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-medium mb-4">
              What You Get
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Session Benefits
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your free strategy session includes comprehensive analysis and actionable insights
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Personalized Roadmap',
                description: 'Customized action plan based on your profile and goals',
                icon: '🎯'
              },
              {
                title: 'College Shortlist',
                description: 'Curated list of universities matching your profile',
                icon: '🏫'
              },
              {
                title: 'Admission Strategy',
                description: 'Step-by-step application process guidance',
                icon: '📈'
              },
              {
                title: 'Scholarship Insights',
                description: 'Information on funding opportunities',
                icon: '💰'
              },
              {
                title: 'Timeline Planning',
                description: 'Complete timeline from application to enrollment',
                icon: '⏰'
              },
              {
                title: 'Expert Q&A',
                description: 'Direct answers to all your admission queries',
                icon: '💬'
              }
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 text-center border border-gray-100 hover:shadow-md transition-all duration-300"
              >
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
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
                <FaChalkboardTeacher className="text-blue-400" />
                <span className="font-medium">Limited Slots Available</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Future?
              </h2>
              
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Join 1500+ successful students who secured admissions in top 
                universities with our expert guidance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-300"
                >
                  Book Your Free Session Now
                </button>
                <a 
                  href="tel:+919876543210" 
                  className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
                >
                  Have Questions? Call Us
                </a>
              </div>
              
              <p className="text-gray-400 text-sm mt-8">
                Free 45-minute strategy session • No commitment required
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;