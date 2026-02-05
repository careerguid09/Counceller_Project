import { motion } from 'framer-motion';
import { 
  FaRocket, 
  FaUsers, 
  FaAward, 
  FaHandshake,
  FaLightbulb,
  FaGlobeAmericas,
  FaChartLine,
  FaHeart
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: <FaRocket />,
      title: "Innovation First",
      description: "Leveraging cutting-edge AI and data analytics to provide personalized guidance",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaHandshake />,
      title: "Integrity & Trust",
      description: "Transparent processes with 100% honest assessment and realistic goal setting",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FaUsers />,
      title: "Student Success",
      description: "Every decision is made with the student's best interests at heart",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FaGlobeAmericas />,
      title: "Global Excellence",
      description: "World-class standards combined with local expertise and understanding",
      color: "from-orange-500 to-red-500"
    }
  ];

  const milestones = [
    { year: "2020", title: "Foundation", description: "Started with a vision to revolutionize college admissions" },
    { year: "2021", title: "First 100", description: "Guided 100+ students to top universities globally" },
    { year: "2022", title: "AI Integration", description: "Launched AI-powered admission prediction system" },
    { year: "2023", title: "Global Expansion", description: "Expanded to 25+ countries with local counselors" },
    { year: "2024", title: "Excellence", description: "Awarded 'Best Education Consultancy 2024'" }
  ];

  const team = [
    {
      name: "Dr. Ananya Sharma",
      role: "Founder & CEO",
      education: "PhD, Stanford University",
      experience: "15+ years in education consulting",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3"
    },
    {
      name: "Rajesh Mehta",
      role: "Head of Admissions",
      education: "MBA, Harvard Business School",
      experience: "12+ years admission experience",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3"
    },
    {
      name: "Priya Patel",
      role: "Counseling Director",
      education: "M.Ed, University of Toronto",
      experience: "10+ years in student counseling",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-black to-gray-800 pt-20">
        <div className="absolute inset-0">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '30px 30px'
            }}></div>
          </div>
          
          {/* Gradient Overlays */}
          <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-blue-500/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-purple-500/10 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                  <FaLightbulb className="text-yellow-400" />
                  <span className="text-sm font-medium text-white/90">Our Story</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Transforming Dreams into
                  <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Global Opportunities
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  We bridge the gap between ambition and achievement. With innovative 
                  technology and personalized guidance, we've helped thousands of students 
                  secure admissions in the world's top universities.
                </p>
                
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">1500+</div>
                    <div className="text-gray-400">Students Guided</div>
                  </div>
                  <div className="w-px h-12 bg-white/20"></div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">200+</div>
                    <div className="text-gray-400">Partner Colleges</div>
                  </div>
                  <div className="w-px h-12 bg-white/20"></div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">98%</div>
                    <div className="text-gray-400">Success Rate</div>
                  </div>
                </div>
                
                <Link to="/booking">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-3"
                  >
                    Start Your Journey
                    <FaRocket />
                  </motion.button>
                </Link>
              </motion.div>

              {/* Right Content - Mission Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl">
                  <div className="mb-8">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 mb-4">
                      <FaHeart className="text-2xl text-pink-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                    <p className="text-gray-300 leading-relaxed">
                      To democratize access to world-class education by providing 
                      personalized, data-driven guidance that empowers students to 
                      achieve their academic dreams.
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <FaChartLine className="text-green-400" />
                        What Sets Us Apart
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3 text-gray-300">
                          <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                          <span>AI-powered personalized college matching</span>
                        </li>
                        <li className="flex items-start gap-3 text-gray-300">
                          <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                          <span>End-to-end application support</span>
                        </li>
                        <li className="flex items-start gap-3 text-gray-300">
                          <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                          <span>Scholarship optimization strategies</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-medium mb-4">
              Our Values
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What We Stand For
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Core principles that guide every aspect of our work
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="bg-gray-50 rounded-2xl p-8 h-full border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${value.color} text-white mb-6`}>
                    <div className="text-2xl">
                      {value.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-medium mb-4">
              Our Journey
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Milestones of Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to becoming a trusted global partner
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500"></div>
              
              {/* Milestones */}
              {milestones.map((milestone, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`relative flex ${idx % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} mb-12`}
                >
                  <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} px-4`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white flex items-center justify-center font-bold">
                          {milestone.year}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{milestone.title}</h3>
                        </div>
                      </div>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full border-4 border-blue-500 shadow-lg"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-medium mb-4">
              Our Leadership
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Experts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="bg-gray-50 rounded-2xl p-8 h-full border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 text-center">
                  <div className="relative inline-block mb-6">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <FaAward className="text-white text-lg" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                  
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                      <span>{member.education}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                      <span>{member.experience}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <Link to={`/team/${member.name.toLowerCase().replace(' ', '-')}`}>
                      <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors text-sm">
                        View Profile →
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <FaHandshake className="text-blue-400" />
                <span className="font-medium">Join Our Success Stories</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Begin Your Journey?
              </h2>
              
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Let our experienced team guide you to your dream college with 
                personalized support every step of the way.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/booking" className="flex-1 max-w-sm">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300"
                  >
                    Book Free Consultation
                  </motion.button>
                </Link>
                <Link to="/contact" className="flex-1 max-w-sm">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
                  >
                    Contact Our Team
                  </motion.button>
                </Link>
              </div>
              
              <p className="text-gray-400 text-sm mt-8">
                1500+ success stories and counting • 98% satisfaction rate
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;