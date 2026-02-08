import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaSignOutAlt,
  FaTachometerAlt,
  FaGraduationCap,
  FaCity,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// Counselor Login Modal (Same as before)
const CounselorLoginModal = ({ isOpen, onClose, onLogin }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/counselor/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        setLoading(false);
        return;
      }

      localStorage.setItem("counselorToken", data.token);

      const counselorProfile = {
        email: formData.email,
        role: "counselor",
        name: data.counselor?.name || formData.email.split("@")[0],
      };

      onLogin(counselorProfile);
      onClose();
      navigate("/counselors/dashboard");
    } catch (err) {
      setError("Server error. Please try again.");
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

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 focus:ring-4 focus:ring-blue-500/50 transition-all disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Login as Counselor"}
            </button>
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
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isCounselorLoggedIn, setIsCounselorLoggedIn] = useState(false);
  const [counselorProfile, setCounselorProfile] = useState(null);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  // Services options
  const servicesOptions = [
    {
      name: "Course Pages",
      path: "/course-pages-dashboard",
      icon: <FaGraduationCap className="text-blue-500" />,
      description: "Explore all courses"
    },
    {
      name: "City Target",
      path: "/city-target-dashboard", 
      icon: <FaCity className="text-purple-500" />,
      description: "Second City Target Programs"
    }
  ];

  // Check if counselor is already logged in
  useEffect(() => {
    const savedCounselor = localStorage.getItem("counselorProfile");
    const token = localStorage.getItem("counselorToken");
    
    if (savedCounselor && token) {
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
  }, [location]);

  // Handle counselor login
  const handleCounselorLogin = (profile) => {
    setCounselorProfile(profile);
    setIsCounselorLoggedIn(true);
    localStorage.setItem("counselorProfile", JSON.stringify(profile));
    navigate("/counselors/dashboard");
  };

  // Handle counselor logout
  const handleCounselorLogout = async () => {
    try {
      const token = localStorage.getItem("counselorToken");

      if (token) {
        await fetch("http://localhost:5000/api/counselor/logout", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
    } catch (err) {
      console.error("Logout failed", err);
    } finally {
      localStorage.removeItem("counselorToken");
      localStorage.removeItem("counselorProfile");
      setIsCounselorLoggedIn(false);
      setCounselorProfile(null);
      navigate("/");
    }
  };

  // Handle For Counselors click
  const handleForCounselorsClick = (e) => {
    e.preventDefault();
    
    if (!isCounselorLoggedIn) {
      setShowLoginModal(true);
    } else {
      navigate("/counselors/dashboard");
    }
  };

  // Mouse events for desktop dropdown
  const handleMouseEnter = () => {
    if (window.innerWidth > 1024) {
      setShowServicesDropdown(true);
    }
  };

  const handleMouseLeave = () => {
    setShowServicesDropdown(false);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Blogs", path: "/blog" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-sm ${
          scrolled
            ? "bg-white/95 shadow-lg py-2 border-b border-gray-100"
            : "bg-white py-4"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
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
                <motion.div key={link.name} whileHover={{ scale: 1.05 }}>
                  <Link
                    to={link.path}
                    className={`relative px-5 py-2.5 font-medium rounded-lg transition-colors ${
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
              ))}

              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <motion.div whileHover={{ scale: 1.05 }}>
                  <button
                    className={`flex items-center px-5 py-2.5 font-medium rounded-lg transition-colors ${
                      showServicesDropdown ||
                      location.pathname === "/course-pages-dashboard" || 
                      location.pathname === "/city-target-dashboard"
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                  >
                    <span className="mr-2">Services</span>
                    <FaChevronDown className={`text-xs transition-transform duration-200 ${
                      showServicesDropdown ? "rotate-180" : ""
                    }`} />
                  </button>
                </motion.div>

                <AnimatePresence>
                  {showServicesDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="py-2">
                        {servicesOptions.map((option) => (
                          <Link
                            key={option.name}
                            to={option.path}
                            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                            onClick={() => setShowServicesDropdown(false)}
                          >
                            <div className="p-2 bg-gray-100 rounded-lg">
                              {option.icon}
                            </div>
                            <div>
                              <p className="font-medium text-gray-800">{option.name}</p>
                              <p className="text-xs text-gray-500">{option.description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* For Counselors Button */}
              <div className="relative ml-2">
                {isCounselorLoggedIn ? (
                  <div className="flex items-center gap-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      onClick={() => navigate("/counselors/dashboard")}
                      className="flex items-center px-5 py-2.5 bg-gradient-to-r from-purple-50 to-purple-100 text-purple-700 font-medium rounded-lg hover:from-purple-100 hover:to-purple-200 transition-all border border-purple-200"
                    >
                      <FaTachometerAlt className="mr-2" />
                      Dashboard
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      onClick={handleCounselorLogout}
                      className="flex items-center px-4 py-2.5 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <FaSignOutAlt className="mr-2" />
                      Logout
                    </motion.button>
                  </div>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={handleForCounselorsClick}
                    className="flex items-center px-5 py-2.5 bg-gray-50 text-gray-700 hover:text-purple-600 font-medium rounded-lg hover:bg-gray-100 transition-all border border-gray-200"
                  >
                    <FaChalkboardTeacher className="mr-2" />
                    <span>For Counselors</span>
                  </motion.button>
                )}
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
                    <Link
                      key={link.name}
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
                  ))}

                  {/* Services Mobile */}
                  <div className="px-4 py-2">
                    <p className="font-medium text-gray-700 mb-2">Services</p>
                    <div className="ml-3 space-y-2">
                      {servicesOptions.map((option) => (
                        <Link
                          key={option.name}
                          to={option.path}
                          className="flex items-center gap-3 px-3 py-2.5 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {option.icon}
                          <div>
                            <p>{option.name}</p>
                            <p className="text-xs text-gray-500">{option.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* For Counselors Mobile */}
                  {isCounselorLoggedIn ? (
                    <>
                      <button
                        onClick={() => {
                          navigate("/counselors/dashboard");
                          setIsOpen(false);
                        }}
                        className="flex items-center gap-3 w-full px-4 py-3 text-purple-600 hover:bg-purple-50 font-medium rounded-lg"
                      >
                        <FaTachometerAlt />
                        Counselor Dashboard
                      </button>
                      <button
                        onClick={() => {
                          handleCounselorLogout();
                          setIsOpen(false);
                        }}
                        className="flex items-center gap-3 w-full px-4 py-3 text-red-600 hover:bg-red-50 font-medium rounded-lg"
                      >
                        <FaSignOutAlt />
                        Logout
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => {
                        setShowLoginModal(true);
                        setIsOpen(false);
                      }}
                      className="flex items-center gap-3 w-full px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-gray-50 font-medium rounded-lg"
                    >
                      <FaChalkboardTeacher />
                      For Counselors
                    </button>
                  )}
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