import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaGraduationCap,
  FaUsers,
  FaAward,
  FaUniversity,
  FaStar,
  FaQuoteLeft,
  FaMapMarkerAlt,
  FaGlobeAmericas,
  FaCalendarAlt,
  FaChalkboardTeacher,
  FaFileAlt,
  FaHandshake,
  FaQuestion,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet";

const Home = () => {
  const [imagesLoaded, setImagesLoaded] = useState({});

  const stats = [
    {
      number: "1500+",
      label: "Students Guided",
      icon: <FaUsers />,
      description: "From 50+ countries worldwide",
    },
    {
      number: "200+",
      label: "Partner Colleges",
      icon: <FaUniversity />,
      description: "Top global universities",
    },
    {
      number: "98%",
      label: "Success Rate",
      icon: <FaCheckCircle />,
      description: "Admission success rate",
    },
    {
      number: "₹25Cr+",
      label: "Scholarships Won",
      icon: <FaAward />,
      description: "Financial aid secured",
    },
  ];

  const services = [
    {
      title: "College Selection",
      desc: "AI-powered matching with 5000+ global universities",
      icon: <FaGraduationCap />,
      features: [
        "Personalized shortlisting",
        "Admission probability",
        "ROI analysis",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Admission Strategy",
      desc: "End-to-end application support & deadline management",
      icon: <FaFileAlt />,
      features: [
        "Application planning",
        "Document preparation",
        "Deadline tracking",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Career Roadmap",
      desc: "Data-driven career counseling with industry insights",
      icon: <FaChalkboardTeacher />,
      features: ["Skill assessment", "Industry trends", "Long-term planning"],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Interview Mastery",
      desc: "Mock interviews with alumni from top universities",
      icon: <FaHandshake />,
      features: [
        "Video recordings",
        "Feedback analysis",
        "Body language coaching",
      ],
      color: "from-orange-500 to-red-500",
    },
  ];

  const testimonials = [
    {
      name: "Rohan Sharma",
      college: "Stanford University",
      program: "Computer Science MS",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3",
      quote:
        "The guidance helped me secure ₹50L scholarship! Couldn't have done it alone.",
      rating: 5,
    },
    {
      name: "Priya Patel",
      college: "MIT",
      program: "Mechanical Engineering",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3",
      quote:
        "From college selection to visa process - complete support made it stress-free.",
      rating: 5,
    },
    {
      name: "Arjun Mehta",
      college: "Harvard University",
      program: "MBA",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3",
      quote:
        "Career counseling helped me discover my true passion and suitable programs.",
      rating: 5,
    },
  ];

  const featuredColleges = [
    {
      name: "IIT Bombay",
      country: "India",
      rank: "#1",
      students: "45",
      logo: "🎓",
    },
    {
      name: "Stanford",
      country: "USA",
      rank: "#2",
      students: "38",
      logo: "🌲",
    },
    { name: "MIT", country: "USA", rank: "#3", students: "42", logo: "🔬" },
    {
      name: "Cambridge",
      country: "UK",
      rank: "#4",
      students: "36",
      logo: "🏛️",
    },
    {
      name: "NUS",
      country: "Singapore",
      rank: "#5",
      students: "29",
      logo: "🦁",
    },
    {
      name: "ETH Zurich",
      country: "Switzerland",
      rank: "#6",
      students: "24",
      logo: "⛰️",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Profile Evaluation",
      desc: "Comprehensive assessment of academic & extracurricular profile",
    },
    {
      step: "02",
      title: "College Shortlisting",
      desc: "AI-based matching with personalized recommendations",
    },
    {
      step: "03",
      title: "Application Strategy",
      desc: "Crafting compelling essays & recommendation letters",
    },
    {
      step: "04",
      title: "Interview Preparation",
      desc: "Mock interviews with industry experts",
    },
    {
      step: "05",
      title: "Visa & Finances",
      desc: "Scholarship guidance & visa documentation",
    },
    {
      step: "06",
      title: "Pre-departure",
      desc: "Accommodation, travel, and orientation support",
    },
  ];

  const trackCTA = (action) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", action, {
        event_category: "engagement",
        event_label: "home_page",
      });
    }
  };

  const handleImageLoad = (idx) => {
    setImagesLoaded((prev) => ({ ...prev, [idx]: true }));
  };

  // Smooth animation settings
  const smoothTransition = { duration: 0.7, ease: "easeOut" };
  const gentleTransition = { duration: 0.8, ease: "easeInOut" };
  const staggeredDelay = 0.08;

  return (
    <div className="overflow-hidden">
      {/* SEO Meta Tags - NO CHANGES */}
      <Helmet>
        <title>
          Study Abroad Consultants | Top University Admissions | 98% Success
          Rate
        </title>
        <meta
          name="description"
          content="AI-powered study abroad guidance with 98% admission success rate. Get into Stanford, MIT, IIT with scholarship support. Book free consultation now!"
        />
        <meta
          name="keywords"
          content="study abroad, college admission, scholarship, university counseling, masters abroad, MBA abroad, engineering abroad"
        />
        <meta
          property="og:title"
          content="Dream College Admission Consultants - Your Path to Top Universities"
        />
        <meta
          property="og:description"
          content="Transform your academic aspirations into reality with AI-powered guidance and expert mentorship"
        />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "Study Abroad Consultants",
            description:
              "Premier study abroad admission consultancy with 98% success rate",
            url: window.location.href,
            successRate: "98%",
            award: "Top Rated Educational Consultancy",
            areaServed: "Worldwide",
            service: [
              "College Admission Consulting",
              "Scholarship Guidance",
              "Visa Assistance",
              "Career Counseling",
            ],
          })}
        </script>
      </Helmet>

      {/* Hero Section - SMOOTH ANIMATIONS ONLY */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-black py-6 to-gray-800">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: "30px 30px",
              }}
            ></div>
          </div>

          <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-blue-500/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-purple-500/10 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
              {/* Left Content - Gentle animation */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={gentleTransition}
                className="lg:w-1/2"
              >
                <div className="mb-8">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ ...gentleTransition, delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
                  >
                    <FaStar className="text-yellow-400  text-sm" />
                    <span className="text-sm font-medium text-white/90">
                      Trusted by 10,000+ Students
                    </span>
                  </motion.div>

                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    Your Journey to
                    <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      Dream College
                    </span>
                  </h1>

                  <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
                    AI-powered guidance meets personalized mentorship. Transform
                    your academic aspirations into reality with our
                    comprehensive admission consulting.
                  </p>
                </div>

                {/* Stats - Smooth staggered */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8">
                  {stats.map((stat, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        ...smoothTransition,
                        delay: 0.3 + idx * staggeredDelay,
                      }}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                          <div className="text-blue-400">{stat.icon}</div>
                        </div>
                        <div>
                          <div className="text-xl sm:text-2xl font-bold text-white">
                            {stat.number}
                          </div>
                          <div className="text-xs sm:text-sm text-gray-400">
                            {stat.label}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/booking"
                    className="flex-1"
                    aria-label="Book free consultation session"
                    onClick={() => trackCTA("book_consultation_click")}
                  >
                    <motion.button
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ ...smoothTransition, delay: 0.6 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 sm:px-8 py-1 rounded-xl font-semibold text-base sm:text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 focus:ring-4 focus:ring-blue-500/30 focus:outline-none"
                      aria-label="Book free consultation"
                    >
                      Book Free Consultation
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                  <Link
                    to="/services"
                    className="flex-1"
                    aria-label="Explore our services"
                  >
                    <motion.button
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ ...smoothTransition, delay: 0.65 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-transparent border-2 border-white/30 text-white px-6 sm:px-8 py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3 focus:ring-4 focus:ring-blue-500/30 focus:outline-none"
                      aria-label="Explore services"
                    >
                      Explore Services
                      <FaGlobeAmericas />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>

              {/* Right Side - Smooth entrance */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ...gentleTransition, delay: 0.3 }}
                className="lg:w-1/2 relative mt-8 lg:mt-0"
              >
                <div className="relative">
                  {/* Main card */}
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl">
                    <div className="mb-6">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                        Top University Placements
                      </h3>
                      <p className="text-gray-400 text-sm sm:text-base">
                        2023-24 Admissions
                      </p>
                    </div>

                    {/* University grid - Subtle hover */}
                    <div className="grid grid-cols-3 gap-3 sm:gap-4">
                      {featuredColleges.slice(0, 6).map((college, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            ...smoothTransition,
                            delay: 0.4 + idx * 0.05,
                          }}
                          whileHover={{ y: -3 }}
                          className="bg-gray-800/50 rounded-xl p-3 sm:p-4 text-center border border-white/5 hover:border-blue-500/30 transition-all duration-300"
                        >
                          <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">
                            {college.logo}
                          </div>
                          <div className="font-semibold text-white text-xs sm:text-sm mb-1 truncate">
                            {college.name.split(" ")[0]}
                          </div>
                          <div className="text-xs text-gray-400 truncate">
                            {college.country}
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Success metrics */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ ...smoothTransition, delay: 0.7 }}
                      className="mt-6 sm:mt-8 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl"
                    >
                      <div className="flex justify-between items-center">
                        <div className="text-center">
                          <div className="text-xl sm:text-2xl font-bold text-white">
                            98%
                          </div>
                          <div className="text-xs sm:text-sm text-gray-400">
                            Success Rate
                          </div>
                        </div>
                        <div className="h-6 sm:h-8 w-px bg-white/20"></div>
                        <div className="text-center">
                          <div className="text-xl sm:text-2xl font-bold text-white">
                            ₹25Cr+
                          </div>
                          <div className="text-xs sm:text-sm text-gray-400">
                            Scholarships
                          </div>
                        </div>
                        <div className="h-6 sm:h-8 w-px bg-white/20"></div>
                        <div className="text-center">
                          <div className="text-xl sm:text-2xl font-bold text-white">
                            50+
                          </div>
                          <div className="text-xs sm:text-sm text-gray-400">
                            Countries
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Floating elements - Smooth floating */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ ...gentleTransition, delay: 0.9 }}
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-lg shadow-lg"
                  >
                    <div className="flex items-center gap-1 sm:gap-2 text-sm">
                      <FaAward />
                      <span className="font-semibold">Top Rated</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll indicator - Smooth floating */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
        >
          <div className="text-center">
            <div className="text-white/60 text-sm mb-2">Explore More</div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
            >
              <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Trust Badges Section - NO ANIMATION */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12 opacity-70">
            <div className="text-center">
              <div className="text-2xl">🏆</div>
              <div className="text-sm text-gray-600 mt-1">
                Google Reviews 4.9/5
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl">🔒</div>
              <div className="text-sm text-gray-600 mt-1">
                ISO 9001 Certified
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl">⭐</div>
              <div className="text-sm text-gray-600 mt-1">
                5 Years Excellence
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl">📈</div>
              <div className="text-sm text-gray-600 mt-1">98% Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - Smooth scroll animations */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={gentleTransition}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-medium mb-4">
              Our Process
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              A Clear Path to Success
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Structured, transparent, and personalized - follow our proven
              6-step framework
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {processSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ ...smoothTransition, delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group"
                >
                  <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 h-full border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white flex items-center justify-center font-bold text-base sm:text-lg">
                          {step.step}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ...smoothTransition, delay: 0.5 }}
            className="text-center mt-12 sm:mt-16"
          >
            <Link to="/process" aria-label="View detailed process">
              <button className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors text-sm sm:text-base">
                View Detailed Process
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section - Gentle animations */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={gentleTransition}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-medium mb-4">
              Our Services
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive Support
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Every aspect of your admission journey, covered with expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ ...smoothTransition, delay: idx * 0.1 }}
                whileHover={{ y: -3 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full">
                  <div
                    className={`inline-flex p-3 sm:p-4 rounded-xl bg-gradient-to-r ${service.color} text-white mb-6`}
                  >
                    <div className="text-xl sm:text-2xl">{service.icon}</div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-sm sm:text-base">
                    {service.desc}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-center gap-3 text-gray-700 text-sm sm:text-base"
                      >
                        <FaCheckCircle className="text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors text-sm sm:text-base"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <span>Learn More</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Smooth fade in */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Header - Simple fade in */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-medium mb-4">
              Testimonials
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from students who achieved their dreams
            </p>
          </motion.div>

          {/* Testimonials Grid - Single container animation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto"
          >
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.15, // Increased delay for smoother sequence
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -3,
                  transition: { duration: 0.2 },
                }}
                className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-white shadow-md ${
                        !imagesLoaded[idx] ? "bg-gray-300 animate-pulse" : ""
                      }`}
                      onLoad={() => handleImageLoad(idx)}
                      loading="lazy"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <FaQuoteLeft className="text-white text-xs" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {testimonial.program}
                    </p>
                    <p className="text-xs sm:text-sm text-blue-600 font-semibold">
                      {testimonial.college}
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 italic mb-6 leading-relaxed text-sm sm:text-base">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar
                      key={i}
                      className="text-yellow-400 text-sm sm:text-base"
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section - Smooth entrance */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={gentleTransition}
              className="text-center text-white"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <FaCalendarAlt className="text-blue-400" />
                <span className="font-medium text-sm sm:text-base">
                  Limited Availability
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Start Your Journey Today
              </h2>

              <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
                Book your{" "}
                <span className="font-bold text-blue-400">
                  free 45-minute strategy session
                </span>
                and receive a personalized roadmap to your dream college.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {[
                  "Personalized Roadmap",
                  "College Shortlist",
                  "Scholarship Strategy",
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ ...smoothTransition, delay: 0.2 + idx * 0.1 }}
                    className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm"
                  >
                    <div className="text-2xl font-bold text-blue-400">✓</div>
                    <div className="text-white font-medium text-sm sm:text-base">
                      {item}
                    </div>
                  </motion.div>
                ))}
              </div>

              <Link
                to="/booking"
                onClick={() => trackCTA("final_cta_click")}
                aria-label="Book free strategy session"
              >
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...smoothTransition, delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-3 focus:ring-4 focus:ring-blue-500/30 focus:outline-none"
                  aria-label="Book free strategy session"
                >
                  <FaGraduationCap className="text-lg sm:text-xl" />
                  Book Free Strategy Session
                  <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                </motion.button>
              </Link>

              <p className="text-gray-400 text-xs sm:text-sm mt-6">
                Only 8 spots remaining this week • Join 1500+ successful
                students
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Floating Help Button - Delayed gentle appearance */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
        className="fixed bottom-6 right-6 z-50 hidden sm:block"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all focus:ring-4 focus:ring-blue-500/30 focus:outline-none"
          aria-label="Quick help"
          onClick={() => trackCTA("help_widget_click")}
        >
          <FaQuestion className="text-xl" />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Home;
