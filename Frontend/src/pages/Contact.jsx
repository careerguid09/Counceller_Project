import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect, useRef, useMemo } from "react";
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
  Users,
  BookOpen,
  Map,
  Search,
  ChevronDown,
  Check,
  AlertCircle,
  Info,
  X,
  Loader2,
} from "lucide-react";

// --- DATA: COUNTRIES WITH FLAGS AND CODES ---
const countriesData = [
  { name: "India", code: "+91", flag: "🇮🇳" },
  { name: "United States", code: "+1", flag: "🇺🇸" },
  { name: "United Kingdom", code: "+44", flag: "🇬🇧" },
  { name: "Canada", code: "+1", flag: "🇨🇦" },
  { name: "Australia", code: "+61", flag: "🇦🇺" },
  { name: "Germany", code: "+49", flag: "🇩🇪" },
  { name: "France", code: "+33", flag: "🇫🇷" },
  { name: "China", code: "+86", flag: "🇨🇳" },
  { name: "Japan", code: "+81", flag: "🇯🇵" },
  { name: "Singapore", code: "+65", flag: "🇸🇬" },
  { name: "UAE", code: "+971", flag: "🇦🇪" },
  { name: "Russia", code: "+7", flag: "🇷🇺" },
  { name: "Brazil", code: "+55", flag: "🇧🇷" },
  { name: "South Africa", code: "+27", flag: "🇿🇦" },
  { name: "Afghanistan", code: "+93", flag: "🇦🇫" },
  { name: "Albania", code: "+355", flag: "🇦🇱" },
  { name: "Algeria", code: "+213", flag: "🇩🇿" },
  { name: "Argentina", code: "+54", flag: "🇦🇷" },
  { name: "Austria", code: "+43", flag: "🇦🇹" },
  { name: "Bangladesh", code: "+880", flag: "🇧🇩" },
  { name: "Belgium", code: "+32", flag: "🇧🇪" },
  { name: "Bhutan", code: "+975", flag: "🇧🇹" },
  { name: "Egypt", code: "+20", flag: "🇪🇬" },
  { name: "Hong Kong", code: "+852", flag: "🇭🇰" },
  { name: "Indonesia", code: "+62", flag: "🇮🇩" },
  { name: "Ireland", code: "+353", flag: "🇮🇪" },
  { name: "Israel", code: "+972", flag: "🇮🇱" },
  { name: "Italy", code: "+39", flag: "🇮🇹" },
  { name: "Kuwait", code: "+965", flag: "🇰🇼" },
  { name: "Malaysia", code: "+60", flag: "🇲🇾" },
  { name: "Mexico", code: "+52", flag: "🇲🇽" },
  { name: "Nepal", code: "+977", flag: "🇳🇵" },
  { name: "Netherlands", code: "+31", flag: "🇳🇱" },
  { name: "New Zealand", code: "+64", flag: "🇳🇿" },
  { name: "Norway", code: "+47", flag: "🇳🇴" },
  { name: "Pakistan", code: "+92", flag: "🇵🇰" },
  { name: "Philippines", code: "+63", flag: "🇵🇭" },
  { name: "Portugal", code: "+351", flag: "🇵🇹" },
  { name: "Qatar", code: "+974", flag: "🇶🇦" },
  { name: "Saudi Arabia", code: "+966", flag: "🇸🇦" },
  { name: "South Korea", code: "+82", flag: "🇰🇷" },
  { name: "Spain", code: "+34", flag: "🇪🇸" },
  { name: "Sri Lanka", code: "+94", flag: "🇱🇰" },
  { name: "Switzerland", code: "+41", flag: "🇨🇭" },
  { name: "Thailand", code: "+66", flag: "🇹🇭" },
  { name: "Turkey", code: "+90", flag: "🇹🇷" },
  { name: "Vietnam", code: "+84", flag: "🇻🇳" },
].sort((a, b) => a.name.localeCompare(b.name));

// --- SEARCHABLE SELECT COMPONENT ---
const SearchableSelect = ({
  label,
  options,
  value,
  onChange,
  placeholder,
  icon: Icon,
  disabled,
  isPhoneSelector,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const containerRef = useRef(null);

  const filteredOptions = useMemo(() => {
    return options.filter((opt) => {
      const searchStr =
        typeof opt === "string" ? opt : `${opt.name} ${opt.code}`;
      return searchStr.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }, [options, searchTerm]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getDisplayValue = () => {
    if (!value) return placeholder;
    if (isPhoneSelector) {
      const found = countriesData.find((c) => c.code === value);
      return found ? `${found.flag} ${found.code}` : value;
    }
    return value;
  };

  return (
    <div className="space-y-2 relative" ref={containerRef}>
      {label && (
        <label className="text-sm font-semibold text-slate-700">{label}</label>
      )}
      <div
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={`w-full px-4 py-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
          disabled
            ? "bg-slate-50 border-slate-100 opacity-50"
            : "bg-white border-slate-200 hover:border-blue-300"
        } ${isOpen ? "ring-2 ring-blue-500 border-blue-500" : ""}`}
      >
        <div className="flex items-center gap-2 truncate text-slate-700">
          {Icon && <Icon className="w-4 h-4 text-slate-400" />}
          <span className="font-medium">{getDisplayValue()}</span>
        </div>
        <ChevronDown
          className={`w-4 h-4 text-slate-400 transition-transform flex-shrink-0 ${isOpen ? "rotate-180" : ""}`}
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute z-50 w-64 md:w-80 mt-2 bg-white border border-slate-200 rounded-xl shadow-2xl overflow-hidden left-0"
          >
            <div className="p-2 border-b border-slate-100 flex items-center gap-2 sticky top-0 bg-white">
              <Search className="w-4 h-4 text-slate-400" />
              <input
                type="text"
                autoFocus
                className="w-full text-sm outline-none py-1"
                placeholder="Search country name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            <div className="max-h-60 overflow-y-auto">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((opt) => {
                  const isString = typeof opt === "string";
                  const labelStr = isString
                    ? opt
                    : `${opt.flag} ${opt.name} (${opt.code})`;
                  const valStr = isString ? opt : opt.code;

                  return (
                    <div
                      key={isString ? opt : opt.name}
                      onClick={(e) => {
                        e.stopPropagation();
                        onChange(valStr);
                        setIsOpen(false);
                        setSearchTerm("");
                      }}
                      className="px-4 py-3 text-sm hover:bg-blue-50 cursor-pointer flex items-center justify-between border-b border-slate-50 last:border-0"
                    >
                      <span className="truncate">{labelStr}</span>
                      {(isString ? value === opt : value === opt.code) && (
                        <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      )}
                    </div>
                  );
                })
              ) : (
                <div className="px-4 py-3 text-sm text-slate-400 italic text-center">
                  No results found
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Custom Toast Component (React Toastify jaise exact)
const Toast = ({ message, type = "success", onClose, progress = 100 }) => {
  const icons = {
    success: <CheckCircle className="w-5 h-5" />,
    error: <X className="w-5 h-5" />,
    warning: <AlertCircle className="w-5 h-5" />,
    info: <Info className="w-5 h-5" />,
    loading: <Loader2 className="w-5 h-5 animate-spin" />,
  };

  const colors = {
    success: {
      bg: "bg-green-500",
      border: "border-green-500",
      text: "text-white",
      icon: "text-green-500",
      text: "text-white",
    },
    error: {
      bg: "bg-red-500",
      border: "border-red-600",
      text: "text-white",
      icon: "text-red-100",
    },
    warning: {
      bg: "bg-amber-500",
      border: "border-amber-600",
      text: "text-amber-900",
      icon: "text-amber-700",
    },
    info: {
      bg: "bg-blue-500",
      border: "border-blue-600",
      text: "text-white",
      icon: "text-blue-100",
    },
    loading: {
      bg: "bg-slate-700",
      border: "border-slate-800",
      text: "text-white",
      icon: "text-slate-300",
    },
  };

  const title = {
    success: "Success",
    error: "Error",
    warning: "Warning",
    info: "Information",
    loading: "Loading...",
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      className={`relative overflow-hidden rounded-lg shadow-xl ${colors[type].border} border`}
    >
      {/* Progress bar (React Toastify jaise) */}
      <div
        className={`absolute top-0 left-0 h-1 ${colors[type].bg} transition-all duration-300`}
        style={{ width: `${progress}%` }}
      />

      <div className={`${colors[type].bg} px-4 py-3 flex items-start gap-3`}>
        <div className={`flex-shrink-0 ${colors[type].icon}`}>
          {icons[type]}
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-sm mb-1">{title[type]}</div>
          <div className={`text-sm ${colors[type].text}`}>{message}</div>
        </div>
        {type !== "loading" && (
          <button
            onClick={onClose}
            className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity ml-2"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </motion.div>
  );
};

const Contact = () => {
  const domainData = {
    MEDICAL: ["MBBS", "BAMS", "BHMS", "BNYS"],
    PHARMACY: ["B.Pharma", "D.Pharma", "M.Pharma", "Pharm D", "PhD Pharmacy"],
    NURSING: ["ANM", "GNM", "BSc Nursing", "MSc Nursing", "Post Basic Nursing"],
    PARAMEDICAL: [
      "X-Ray Technician (Radiology)",
      "BMLT / DMLT",
      "BPT / MPT",
      "Bachelor of Human Nutrition",
    ],
    ENGINEERING: [
      "Diploma Engineering",
      "B.Tech / BE",
      "M.Tech / ME",
      "PhD Engineering",
    ],
    MANAGEMENT: ["BBA", "MBA", "PGDM"],
    GRADUATION: ["BA", "BSc", "BCom"],
    "POST GRADUATION": ["MA", "MSc", "MCom"],
    "VOCATIONAL COURSES": ["BCA", "MCA", "PGDCA", "B.Lib / M.Lib"],
    "LANGUAGE COURSES": [
      "German",
      "French",
      "Italian",
      "Chinese (Bachelor & Diploma)",
    ],
    AGRICULTURE: ["BSc Agriculture", "MSc Agriculture"],
    "EDUCATION COURSES": ["B.Ed", "D.El.Ed", "CTET / STET Guidance"],
  };

  const eduLevels = [
    "High School (10th)",
    "Intermediate (12th)",
    "Diploma Holder",
    "Undergraduate",
    "Postgraduate",
    "PhD / Doctorate",
  ];

  // --- STATE ---
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+91",
    phone: "",
    dob: "",
    age: "",
    country: "",
    state: "",
    city: "",
    eduLevel: "",
    domain: "",
    course: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [toasts, setToasts] = useState([]);

  const toast = {
    success: (message, duration = 4000) =>
      addToast(message, "success", duration),
    error: (message, duration = 4000) => addToast(message, "error", duration),
    warning: (message, duration = 4000) =>
      addToast(message, "warning", duration),
    info: (message, duration = 4000) => addToast(message, "info", duration),
    loading: (message) => addToast(message, "loading", 0),
    dismiss: (id) => removeToast(id),
  };

  const addToast = (message, type = "success", duration = 4000) => {
    const id = Date.now() + Math.random();
    const newToast = { id, message, type, progress: 100 };

    setToasts((prev) => [...prev, newToast]);

    if (type !== "loading" && duration > 0) {
      const interval = setInterval(() => {
        setToasts((prev) =>
          prev.map((t) =>
            t.id === id
              ? {
                  ...t,
                  progress: Math.max(0, t.progress - 100 / (duration / 100)),
                }
              : t,
          ),
        );
      }, 100);

      setTimeout(() => {
        clearInterval(interval);
        removeToast(id);
      }, duration);
    }

    return id;
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const calculateAge = (birthDate) => {
    if (!birthDate) return "";
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age >= 0 ? age : "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedData = { ...formData, [name]: value };

    if (name === "dob") {
      updatedData.age = calculateAge(value);
    }

    setFormData(updatedData);
  };

  const handleCountryChange = (val) => {
    const selected = countriesData.find((c) => c.name === val);
    setFormData({
      ...formData,
      country: val,
      countryCode: selected ? selected.code : formData.countryCode,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.phone.length < 8) {
      toast.error("Please enter a valid phone number (minimum 8 digits).");
      return;
    }

    if (!formData.eduLevel || !formData.domain || !formData.course) {
      toast.warning("Please fill all required academic fields.");
      return;
    }

    setIsLoading(true);
    const loadingToastId = toast.loading("Submitting your form...");

    try {
      const response = await fetch("http://localhost:5000/api/clients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          phone: `${formData.countryCode} ${formData.phone}`,
        }),
      });

      toast.dismiss(loadingToastId);

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Something went wrong");
      }

      setIsSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        countryCode: "+91",
        phone: "",
        dob: "",
        age: "",
        country: "",
        state: "",
        city: "",
        eduLevel: "",
        domain: "",
        course: "",
        message: "",
      });

      toast.success("Form submitted successfully! Our team will contact soon.");

      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Form submit error:", error);
      toast.error(
        error.message || "Submission failed. Please try again later.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="fixed top-4 right-4 z-[9999] flex flex-col gap-3 w-80">
        <AnimatePresence>
          {toasts.map((toastItem) => (
            <Toast
              key={toastItem.id}
              message={toastItem.message}
              type={toastItem.type}
              progress={toastItem.progress}
              onClose={() => removeToast(toastItem.id)}
            />
          ))}
        </AnimatePresence>
      </div>

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900 pb-12">
        <section className="pt-24 pb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 -z-10" />
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6"
            >
              <Globe className="w-4 h-4" />
              <span>Global Academic Support</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
            >
              Empower Your Future with <br />
              <span className="text-blue-600">Expert Guidance</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-2xl mx-auto text-lg text-slate-600"
            >
              Whether it's Medical, Engineering, or Vocational training, our
              counselors provide personalized roadmaps for your career success.
            </motion.p>
          </div>
        </section>

        <section className="pb-24">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
              <div className="lg:col-span-4 space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm"
                >
                  <h2 className="text-2xl font-bold mb-8">
                    Contact Information
                  </h2>
                  <div className="space-y-6">
                    {[
                      {
                        icon: <Phone className="w-5 h-5" />,
                        title: "Call Us",
                        val: "+1 (555) 123-4567",
                        bg: "bg-blue-50 text-blue-600",
                      },
                      {
                        icon: <Mail className="w-5 h-5" />,
                        title: "Email",
                        val: "admissions@counselhub.com",
                        bg: "bg-emerald-50 text-emerald-600",
                      },
                      {
                        icon: <MapPin className="w-5 h-5" />,
                        title: "Global HQ",
                        val: "Wellness Plaza, San Francisco",
                        bg: "bg-purple-50 text-purple-600",
                      },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4">
                        <div
                          className={`p-3 rounded-2xl ${item.bg} flex-shrink-0`}
                        >
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                            {item.title}
                          </p>
                          <p className="font-bold text-slate-800">{item.val}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-blue-600 rounded-3xl p-8 text-white shadow-xl shadow-blue-200 relative overflow-hidden"
                >
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-4">
                      Confidential Consultation
                    </h3>
                    <p className="text-blue-100 mb-6">
                      Your data is protected by high-level encryption and HIPAA
                      standards.
                    </p>
                    <div className="flex items-center gap-3 bg-white/10 p-4 rounded-2xl backdrop-blur-sm">
                      <Shield className="w-6 h-6" />
                      <span className="font-semibold">Privacy Guaranteed</span>
                    </div>
                  </div>
                  <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-8"
              >
                <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl p-8 md:p-12">
                  <div className="mb-10">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">
                      Request Your Roadmap
                    </h2>
                    <p className="text-slate-500">
                      Please provide accurate details for a tailored counseling
                      session.
                    </p>
                  </div>

                  <AnimatePresence>
                    {isSubmitted && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="mb-8 overflow-hidden"
                      >
                        <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl flex items-center gap-4">
                          <div className="p-3 bg-emerald-500 rounded-full text-white">
                            <CheckCircle className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="font-bold text-emerald-900">
                              Application Received!
                            </h4>
                            <p className="text-emerald-700">
                              One of our specialists will call you within 24
                              hours.
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <form onSubmit={handleSubmit} className="space-y-10">
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                          1
                        </div>
                        <h3 className="text-lg font-bold text-slate-800">
                          Personal Details
                        </h3>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-700">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                              type="text"
                              name="fullName"
                              required
                              value={formData.fullName}
                              onChange={handleChange}
                              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                              placeholder="John Doe"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-700">
                            Email Address{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                              type="email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                              placeholder="john@example.com"
                            />
                          </div>
                        </div>

                        <div className="space-y-2 md:col-span-2">
                          <label className="text-sm font-semibold text-slate-700">
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <div className="flex flex-col sm:flex-row gap-3">
                            <div className="w-full sm:w-48 shrink-0">
                              <SearchableSelect
                                isPhoneSelector
                                options={countriesData}
                                value={formData.countryCode}
                                onChange={(val) =>
                                  setFormData({ ...formData, countryCode: val })
                                }
                                placeholder="Select Code"
                              />
                            </div>
                            <div className="flex-1 relative">
                              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                              <input
                                type="tel"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={(e) => {
                                  const val = e.target.value.replace(/\D/g, "");
                                  setFormData({ ...formData, phone: val });
                                }}
                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all font-bold tracking-wider"
                                placeholder="Enter number"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 md:col-span-2">
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">
                              Date of Birth{" "}
                              <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="date"
                              name="dob"
                              required
                              value={formData.dob}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">
                              Age
                            </label>
                            <input
                              type="text"
                              name="age"
                              readOnly
                              value={formData.age}
                              className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50 text-slate-500 font-bold"
                              placeholder="---"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section 2: Location (Country is Select, State/City are Manual) */}
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold">
                          2
                        </div>
                        <h3 className="text-lg font-bold text-slate-800">
                          Location Details
                        </h3>
                      </div>
                      <div className="grid md:grid-cols-3 gap-6">
                        <SearchableSelect
                          label="Country"
                          options={countriesData.map((c) => c.name)}
                          value={formData.country}
                          placeholder="Search country..."
                          icon={Globe}
                          onChange={handleCountryChange}
                        />

                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-700">
                            State / Province
                          </label>
                          <div className="relative">
                            <Map className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                              type="text"
                              name="state"
                              value={formData.state}
                              onChange={handleChange}
                              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none"
                              placeholder="Type your state"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-700">
                            City / Town
                          </label>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                              type="text"
                              name="city"
                              value={formData.city}
                              onChange={handleChange}
                              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none"
                              placeholder="Type your city"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section 3: Educational Interests */}
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
                          3
                        </div>
                        <h3 className="text-lg font-bold text-slate-800">
                          Academic Goals
                        </h3>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-700">
                            Current Education Level{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <select
                            name="eduLevel"
                            value={formData.eduLevel}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500"
                          >
                            <option value="">Choose Current Level *</option>
                            {eduLevels.map((e) => (
                              <option key={e} value={e}>
                                {e}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-700">
                            Interested Domain{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <select
                            name="domain"
                            required
                            value={formData.domain}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500"
                          >
                            <option value="">Select Career Domain *</option>
                            {Object.keys(domainData).map((d) => (
                              <option key={d} value={d}>
                                {d}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="md:col-span-2 space-y-2">
                          <label className="text-sm font-semibold text-slate-700">
                            Interested Course{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="hidden"
                            name="course"
                            value={formData.course}
                            required
                          />

                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                            {!formData.domain ? (
                              <p className="col-span-full text-slate-400 text-sm italic py-2">
                                Please select a domain first to view courses...
                              </p>
                            ) : (
                              domainData[formData.domain].map((course) => (
                                <button
                                  type="button"
                                  key={course}
                                  onClick={() =>
                                    setFormData({ ...formData, course })
                                  }
                                  className={`px-4 py-3 rounded-xl border text-sm font-medium transition-all text-left ${
                                    formData.course === course
                                      ? "bg-blue-600 border-blue-600 text-white shadow-md"
                                      : "bg-white border-slate-200 text-slate-600 hover:border-blue-300"
                                  }`}
                                >
                                  {course}
                                </button>
                              ))
                            )}
                          </div>

                          {formData.domain && !formData.course && (
                            <p className="text-red-500 text-sm mt-2">
                              ⚠️ Please select a course
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Section 4: Message */}
                    <div className="space-y-4">
                      <label className="text-sm font-semibold text-slate-700">
                        Additional Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                        placeholder="Share any specific requirements or questions..."
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-slate-100">
                      <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <Shield className="w-4 h-4 text-emerald-500" />
                        Secure Form Processing
                      </div>
                      <button
                        type="submit"
                        disabled={
                          isLoading ||
                          !formData.eduLevel ||
                          !formData.domain ||
                          !formData.course
                        }
                        className={`w-full md:w-auto px-10 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all ${
                          isLoading ||
                          !formData.eduLevel ||
                          !formData.domain ||
                          !formData.course
                            ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                            : "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1"
                        }`}
                      >
                        {isLoading ? (
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Confirm Request
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { label: "Verified Experts", val: "500+", icon: <Users /> },
                { label: "Success Rate", val: "98%", icon: <CheckCircle /> },
                {
                  label: "Partnered Universities",
                  val: "2k+",
                  icon: <BookOpen />,
                },
                { label: "Global Offices", val: "24", icon: <Map /> },
              ].map((stat, i) => (
                <div key={i} className="text-center space-y-2">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-blue-400">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold">{stat.val}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
