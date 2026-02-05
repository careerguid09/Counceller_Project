import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaPhoneAlt,
  FaWhatsapp,
  FaCalendarAlt,
  FaChevronDown,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaUserFriends,
  FaBrain,
  FaUserMd,
  FaGraduationCap,
  FaBriefcaseMedical,
  FaSignInAlt,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// Login Modal Component
const CounselorLoginModal = ({ isOpen, onClose, onLogin }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Demo validation - in real app, API call karna hoga
      if (formData.email === "counselor@example.com" && formData.password === "password123") {
        onLogin({
          id: 1,
          name: "John Doe",
          email: formData.email,
          specialization: "Career Counseling",
          isVerified: true,
        });
        onClose();
      } else {
        setError("Invalid email or password. Demo: counselor@example.com / password123");
      }
    } catch (err) {
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md"
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Counselor Login</h2>
              <p className="text-gray-600 mt-1">Access your counselor dashboard</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <FaTimes className="text-gray-500" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="counselor@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span className="ml-2 text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 focus:ring-4 focus:ring-blue-500/50 transition-all disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Login as Counselor"}
            </button>

            <div className="text-center pt-4 border-t border-gray-200">
              <p className="text-gray-600">
                New counselor?{" "}
                <a href="/counselor-register" className="text-blue-600 font-medium hover:text-blue-700">
                  Register here
                </a>
              </p>
            </div>

            <div className="text-xs text-gray-500 text-center pt-4">
              <p>Demo credentials: counselor@example.com / password123</p>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

// Main Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [counselorsOpen, setCounselorsOpen] = useState(false);
  const [mobileCounselorsOpen, setMobileCounselorsOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isCounselorLoggedIn, setIsCounselorLoggedIn] = useState(false);
  const [counselorProfile, setCounselorProfile] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Check if counselor is already logged in
  useEffect(() => {
    const savedCounselor = localStorage.getItem("counselorProfile");
    if (savedCounselor) {
      setCounselorProfile(JSON.parse(savedCounselor));
      setIsCounselorLoggedIn(true);
    }
  }, []);

  // Detect scroll for navbar background effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setCounselorsOpen(false);
    setMobileCounselorsOpen(false);
  }, [location]);

  // Counselor categories with icons and descriptions
  const counselorCategories = [
    {
      id: 1,
      name: "Relationship Counselors",
      icon: <FaUserFriends />,
      path: "/counselors/dashboard/relationship",
      description: "Marriage, Family & Relationship Experts",
      color: "text-pink-600",
      bgColor: "bg-pink-50",
    },
    {
      id: 2,
      name: "Career Counselors",
      icon: <FaBriefcaseMedical />,
      path: "/counselors/dashboard/career",
      description: "Career Guidance & Professional Development",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      id: 3,
      name: "Educational Counselors",
      icon: <FaGraduationCap />,
      path: "/Counselors/EducationalCounselorDashboard",
      description: "Academic Planning & College Admissions",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      id: 4,
      name: "Mental Health Counselors",
      icon: <FaBrain />,
      path: "/counselors/dashboard/mental-health",
      description: "Therapy & Psychological Support",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ];

  // Handle counselor login
  const handleCounselorLogin = (profile) => {
    setCounselorProfile(profile);
    setIsCounselorLoggedIn(true);
    localStorage.setItem("counselorProfile", JSON.stringify(profile));
  };

  // Handle counselor logout
  const handleCounselorLogout = () => {
    setIsCounselorLoggedIn(false);
    setCounselorProfile(null);
    setCounselorsOpen(false);
    localStorage.removeItem("counselorProfile");
    navigate("/");
  };

  // Handle For Counselors click - opens login modal or dropdown based on login status
  const handleForCounselorsClick = (e) => {
    e.preventDefault();
    
    if (!isCounselorLoggedIn) {
      setShowLoginModal(true);
      setCounselorsOpen(false);
    } else {
      setCounselorsOpen(!counselorsOpen);
      setServicesOpen(false);
    }
  };

  // Handle counselor category selection
  const handleCounselorSelect = (category) => {
    setCounselorsOpen(false);
    setMobileCounselorsOpen(false);
    setIsOpen(false);
    navigate(category.path);
  };

  // Handle Book Session click
  const handleBookSession = () => {
    navigate("/booking");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Services",
      path: "/services",
      submenu: [
        { name: "College Selection", path: "/services/college-selection" },
        { name: "Career Counseling", path: "/services/career-counseling" },
        {
          name: "Application Assistance",
          path: "/services/application-assistance",
        },
        { name: "Test Preparation", path: "/services/test-prep" },
        { name: "Interview Coaching", path: "/services/interview-coaching" },
      ],
    },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-sm ${
          scrolled
            ? "bg-white/90 shadow-lg py-3 border-b border-gray-100"
            : "bg-white py-4"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex-shrink-0"
            >
              <Link to="/" className="flex items-center gap-3 group">
                <div className="relative">
                  <motion.div
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow"
                  >
                    <FaUserGraduate className="text-white text-lg" />
                  </motion.div>
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">CareerGuide</h1>
                  <p className="text-xs text-gray-500 font-medium">Expert Admissions Counseling</p>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  {link.submenu ? (
                    <>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        onClick={() => {
                          setServicesOpen(!servicesOpen);
                          setCounselorsOpen(false);
                        }}
                        className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors rounded-lg group"
                      >
                        <span>{link.name}</span>
                        <motion.div
                          animate={{ rotate: servicesOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <FaChevronDown className="ml-1 text-xs" />
                        </motion.div>
                      </motion.button>

                      {/* Services Dropdown */}
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
                          >
                            {link.submenu.map((subItem, idx) => (
                              <motion.div
                                key={subItem.name}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                              >
                                <Link
                                  to={subItem.path}
                                  className="block px-5 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 transition-colors font-medium group/item"
                                  onClick={() => setServicesOpen(false)}
                                >
                                  <div className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                    <span>{subItem.name}</span>
                                  </div>
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                    >
                      <Link
                        to={link.path}
                        className={`relative px-4 py-2 font-medium rounded-lg transition-colors ${
                          location.pathname === link.path
                            ? "text-blue-600"
                            : "text-gray-700 hover:text-blue-600"
                        }`}
                      >
                        {link.name}
                        {location.pathname === link.path && (
                          <motion.div
                            layoutId="underline"
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
                          />
                        )}
                      </Link>
                    </motion.div>
                  )}
                </div>
              ))}

              {/* For Counselors Button */}
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={handleForCounselorsClick}
                  className="flex items-center px-4 py-2 text-gray-700 hover:text-purple-600 font-medium transition-colors rounded-lg"
                >
                  {isCounselorLoggedIn ? (
                    <>
                      <FaUserCircle className="mr-2 text-purple-600" />
                      <span className="text-purple-600">Counselor</span>
                    </>
                  ) : (
                    <>
                      <FaChalkboardTeacher className="mr-2" />
                      <span>For Counselors</span>
                    </>
                  )}
                  <motion.div
                    animate={{ rotate: counselorsOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaChevronDown className="ml-1 text-xs" />
                  </motion.div>
                </motion.button>

                {/* Counselors Dropdown - Only shows if logged in */}
                <AnimatePresence>
                  {counselorsOpen && isCounselorLoggedIn && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 py-3 z-50"
                    >
                      {/* Counselor Profile Section */}
                      <div className="px-4 pb-3 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                            <FaUserCircle className="text-white text-lg" />
                          </div>
                          <div>
                            <p className="font-bold text-gray-900">{counselorProfile?.name}</p>
                            <p className="text-xs text-gray-500">{counselorProfile?.email}</p>
                          </div>
                        </div>
                        <div className="mt-3 flex gap-2">
                          <button
                            onClick={() => navigate("/counselors/dashboard")}
                            className="flex-1 py-2 bg-purple-50 text-purple-700 font-medium rounded-lg hover:bg-purple-100 transition-colors"
                          >
                            Dashboard
                          </button>
                          <button
                            onClick={handleCounselorLogout}
                            className="flex-1 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                          >
                            <FaSignOutAlt />
                            Logout
                          </button>
                        </div>
                      </div>

                      {/* Categories Section */}
                      <div className="px-4 mt-2 mb-2">
                        <p className="text-sm text-gray-500 font-medium">Counselor Categories</p>
                      </div>
                      
                      <div className="space-y-1 max-h-72 overflow-y-auto">
                        {counselorCategories.map((category, idx) => (
                          <motion.button
                            key={category.id}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.03 }}
                            onClick={() => handleCounselorSelect(category)}
                            className="flex items-center w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors group/category"
                          >
                            <div className={`p-2 rounded-lg ${category.bgColor} mr-3`}>
                              <div className={category.color}>
                                {category.icon}
                              </div>
                            </div>
                            <div className="flex-1">
                              <p className="font-medium text-gray-900 group-hover/category:text-purple-600">
                                {category.name}
                              </p>
                              <p className="text-xs text-gray-500 mt-0.5">
                                {category.description}
                              </p>
                            </div>
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

             
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="lg:hidden p-2.5 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <FaTimes className="text-gray-700 text-lg" />
              ) : (
                <FaBars className="text-gray-700 text-lg" />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden overflow-hidden border-t border-gray-100 mt-4"
              >
                <div className="py-4 space-y-1">
                  {navLinks.map((link) => (
                    <div key={link.name}>
                      {link.submenu ? (
                        <>
                          <button
                            onClick={() => {
                              setServicesOpen(!servicesOpen);
                              setMobileCounselorsOpen(false);
                            }}
                            className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:text-blue-600 font-medium"
                          >
                            <span>{link.name}</span>
                            <motion.div
                              animate={{ rotate: servicesOpen ? 180 : 0 }}
                            >
                              <FaChevronDown className="text-xs" />
                            </motion.div>
                          </button>

                          <AnimatePresence>
                            {servicesOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="ml-4 space-y-1"
                              >
                                {link.submenu.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    to={subItem.path}
                                    className="block px-4 py-2.5 text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-colors"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {subItem.name}
                                </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          to={link.path}
                          className={`block px-4 py-3 rounded-lg transition-colors ${
                            location.pathname === link.path
                              ? "text-blue-600 bg-blue-50/50"
                              : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {link.name}
                        </Link>
                      )}
                    </div>
                  ))}

                  {/* For Counselors Mobile */}
                  <div>
                    <button
                      onClick={() => {
                        if (!isCounselorLoggedIn) {
                          setShowLoginModal(true);
                          setIsOpen(false);
                        } else {
                          setMobileCounselorsOpen(!mobileCounselorsOpen);
                          setServicesOpen(false);
                        }
                      }}
                      className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:text-purple-600 font-medium"
                    >
                      <div className="flex items-center gap-2">
                        {isCounselorLoggedIn ? (
                          <>
                            <FaUserCircle className="text-purple-600" />
                            <span className="text-purple-600">Counselor Dashboard</span>
                          </>
                        ) : (
                          <>
                            <FaChalkboardTeacher />
                            <span>For Counselors</span>
                          </>
                        )}
                      </div>
                      {isCounselorLoggedIn && (
                        <motion.div
                          animate={{ rotate: mobileCounselorsOpen ? 180 : 0 }}
                        >
                          <FaChevronDown className="text-xs" />
                        </motion.div>
                      )}
                    </button>

                    {/* Logout button for mobile if logged in */}
                    {isCounselorLoggedIn && !mobileCounselorsOpen && (
                      <button
                        onClick={handleCounselorLogout}
                        className="flex items-center gap-2 w-full px-4 py-3 text-red-600 hover:bg-red-50 font-medium"
                      >
                        <FaSignOutAlt />
                        <span>Logout</span>
                      </button>
                    )}

                    <AnimatePresence>
                      {mobileCounselorsOpen && isCounselorLoggedIn && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="ml-6 space-y-1"
                        >
                          {/* Counselor Profile Info */}
                          <div className="p-3 bg-purple-50 rounded-lg mb-2">
                            <p className="font-bold text-gray-900">{counselorProfile?.name}</p>
                            <p className="text-xs text-gray-500">{counselorProfile?.email}</p>
                          </div>

                          {/* Dashboard Link */}
                          <Link
                            to="/counselors/dashboard"
                            className="block px-4 py-2.5 text-purple-600 hover:bg-purple-50/50 rounded-lg font-medium"
                            onClick={() => setIsOpen(false)}
                          >
                            My Dashboard
                          </Link>

                          {/* Categories */}
                          {counselorCategories.map((category) => (
                            <button
                              key={category.id}
                              onClick={() => handleCounselorSelect(category)}
                              className="flex items-center w-full px-4 py-2.5 text-gray-600 hover:text-purple-600 hover:bg-purple-50/50 rounded-lg transition-colors text-left"
                            >
                              <div className={`p-2 rounded-lg ${category.bgColor} mr-3`}>
                                <div className={category.color}>
                                  {category.icon}
                                </div>
                              </div>
                              <div>
                                <p className="font-medium">{category.name}</p>
                                <p className="text-xs text-gray-500">{category.description}</p>
                              </div>
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

              
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Login Modal */}
      <CounselorLoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLogin={handleCounselorLogin}
      />
    </>
  );
};

export default Navbar;