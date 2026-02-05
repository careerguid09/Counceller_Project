import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowRight, FaGraduationCap, FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    'College Selection',
    'Admission Strategy',
    'Career Roadmap',
    'Interview Preparation',
    'Scholarship Guidance',
    'Document Review',
    'Test Preparation',
    'Visa Assistance'
  ];

  const socialLinks = [
    { icon: <FaFacebook />, label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: <FaTwitter />, label: 'Twitter', color: 'hover:bg-blue-400' },
    { icon: <FaInstagram />, label: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: <FaLinkedin />, label: 'LinkedIn', color: 'hover:bg-blue-700' },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur-sm opacity-50"
                />
                <div className="relative w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <FaGraduationCap className="text-xl text-white" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold">CareerGuide</h2>
                <p className="text-sm text-gray-400">College Admission Experts</p>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transforming student aspirations into global opportunities through 
              expert guidance and personalized counseling since 2015.
            </p>
            
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 ${social.color} hover:text-white transition-all duration-300`}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <motion.li
                  key={idx}
                  whileHover={{ x: 5 }}
                  className="group"
                >
                  <a
                    href={link.path}
                    className="flex items-center text-gray-400 hover:text-white transition-colors group-hover:text-blue-400"
                  >
                    <FaArrowRight className="mr-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, idx) => (
                <motion.li
                  key={idx}
                  whileHover={{ x: 5 }}
                  className="group"
                >
                  <a
                    href="/services"
                    className="flex items-center text-gray-400 hover:text-white transition-colors group-hover:text-blue-400"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact Info</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Education Street, Knowledge City, Delhi 110001</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-blue-400 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-gray-400 hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-400 flex-shrink-0" />
                <a href="mailto:contact@careerguide.com" className="text-gray-400 hover:text-white transition-colors">
                  contact@careerguide.com
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Stay Updated</h4>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email address"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute right-1 top-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-md hover:from-blue-600 hover:to-blue-700 transition-all"
                >
                  Subscribe
                </motion.button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Get admission tips and scholarship alerts
              </p>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '1500+', label: 'Students Guided' },
              { number: '98%', label: 'Success Rate' },
              { number: '200+', label: 'Partner Colleges' },
              { number: '₹25Cr+', label: 'Scholarships Secured' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} CareerGuide. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <a href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="/sitemap" className="hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
            
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <span>Made with</span>
              <FaHeart className="text-red-500 animate-pulse" />
              <span>for students</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;