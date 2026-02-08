import React, { useState, useEffect, useMemo } from "react";
import {
  Stethoscope, Pill, UserRound, Microscope, Settings, Briefcase,
  GraduationCap, BookOpen, Laptop, Languages, Leaf, Presentation,
  Calendar, Users, Star, IndianRupee, ArrowRight, Clock, LogOut,
  ChevronRight, Search, Bell, Filter, MapPin, CheckCircle,
  ChevronLeft, MoreVertical, Mail, Phone, ExternalLink,
  User, CalendarDays, BookMarked, MessageSquare, Globe, RefreshCcw,
  AlertCircle, Trash2, X
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const DOMAIN_COURSES = {
  MEDICAL: ["MBBS", "BAMS", "BHMS", "BNYS"],
  PHARMACY: ["B.Pharma", "D.Pharma", "M.Pharma", "Pharm D", "PhD Pharmacy"],
  NURSING: ["ANM", "GNM", "BSc Nursing", "MSc Nursing", "Post Basic Nursing"],
  PARAMEDICAL: [
    "X-Ray Technician (Radiology)",
    "BMLT / DMLT",
    "BPT / MPT",
    "Bachelor of Human Nutrition"
  ],
  ENGINEERING: ["Diploma Engineering", "B.Tech / BE", "M.Tech / ME", "PhD Engineering"],
  MANAGEMENT: ["BBA", "MBA", "PGDM"],
  GRADUATION: ["BA", "BSc", "BCom"],
  "POST GRADUATION": ["MA", "MSc", "MCom"],
  "VOCATIONAL COURSES": ["BCA", "MCA", "PGDCA", "B.Lib / M.Lib"],
  "LANGUAGE COURSES": ["German", "French", "Italian", "Chinese"],
  AGRICULTURE: ["BSc Agriculture", "MSc Agriculture"],
  "EDUCATION COURSES": ["B.Ed", "D.El.Ed", "CTET / STET Guidance"],
};

const StudentManagement = ({ domain, onBack }) => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [updatingId, setUpdatingId] = useState(null);

  // State for Delete Confirmation
  const [studentToDelete, setStudentToDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [courseFilter, setCourseFilter] = useState("all");

  const formatDOB = (dob) => {
    if (!dob) return "-";
    return new Date(dob).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };


  const courseOptions = useMemo(() => {
    if (!domain?.name) return ["all"];
    const courses = DOMAIN_COURSES[domain.name.toUpperCase()] || [];
    return ["all", ...courses];
  }, [domain?.name]);

  const filteredStudents = useMemo(() => {
    return students.filter(student => {
      const matchesSearch =
        student.fullName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.city?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.state?.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStatus =
        statusFilter === "all" || student.status === statusFilter;

      const matchesCourse =
        courseFilter === "all" || student.course === courseFilter;

      return matchesSearch && matchesStatus && matchesCourse;
    });
  }, [students, searchQuery, statusFilter, courseFilter]);

  const fetchStudents = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(
        `http://localhost:5000/api/clients/${domain.name}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("counselorToken") || ""}`,
          },
        }
      );

      if (!res.ok) throw new Error(`Server responded with ${res.status}`);

      const data = await res.json();
      setStudents(data.data || []);
    } catch (err) {
      console.error("Failed to fetch students:", err);
      setError("Unable to connect to the server. Please check if your backend is running at http://localhost:5000.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (domain?.name) fetchStudents();
  }, [domain.name]);

  /* ------------------ UPDATE STATUS LOGIC ------------------ */
  const handleStatusUpdate = async (studentId, newStatus) => {
    try {
      setUpdatingId(studentId);
      const res = await fetch(`http://localhost:5000/api/clients/${studentId}/status`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("counselorToken") || ""}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });

      setStudents(prev =>
        prev.map(s => (s._id === studentId ? { ...s, status: newStatus } : s))
      );
    } catch (err) {
      console.error("Failed to update status:", err);
    } finally {
      setUpdatingId(null);
    }
  };

  /* ------------------ DELETE LOGIC ------------------ */
  const handleDeleteStudent = async () => {
    if (!studentToDelete) return;
    try {
      setIsDeleting(true);
      const res = await fetch(`http://localhost:5000/api/clients/${studentToDelete._id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("counselorToken") || ""}`,
        },
      });

      if (res.ok) {
        setStudents(prev => prev.filter(s => s._id !== studentToDelete._id));
        setStudentToDelete(null);
      }
    } catch (err) {
      console.error("Failed to delete student:", err);
    } finally {
      setIsDeleting(false);
    }
  };

  const getStatusStyles = (status, isActive) => {
    const base = "flex-1 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 border";
    switch (status) {
      case "new":
        return isActive ? `${base} bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-200` : `${base} bg-white text-blue-600 border-blue-100 hover:bg-blue-50`;
      case "in-progress":
        return isActive ? `${base} bg-amber-500 text-white border-amber-500 shadow-lg shadow-amber-200` : `${base} bg-white text-amber-600 border-amber-100 hover:bg-amber-50`;
      case "completed":
        return isActive ? `${base} bg-emerald-600 text-white border-emerald-600 shadow-lg shadow-emerald-200` : `${base} bg-white text-emerald-600 border-emerald-100 hover:bg-emerald-50`;
      default: return base;
    }
  };

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
      {/* ---------------- DELETE CONFIRMATION MODAL ---------------- */}
      <AnimatePresence>
        {studentToDelete && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setStudentToDelete(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-white rounded-[2.5rem] p-10 max-w-md w-full shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6">
                <button onClick={() => setStudentToDelete(null)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                  <X size={20} className="text-slate-400" />
                </button>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-red-50 text-red-500 rounded-3xl flex items-center justify-center mb-6">
                  <Trash2 size={40} />
                </div>
                <h3 className="text-2xl font-black text-slate-800 mb-2">Delete Lead?</h3>
                <p className="text-slate-500 mb-8">
                  Are you sure you want to delete <span className="font-black text-slate-800">{studentToDelete.fullName}</span>? This action cannot be undone.
                </p>

                <div className="flex gap-4 w-full">
                  <button
                    onClick={() => setStudentToDelete(null)}
                    className="flex-1 py-4 bg-slate-100 text-slate-600 font-black rounded-2xl hover:bg-slate-200 transition-all"
                  >
                    CANCEL
                  </button>
                  <button
                    onClick={handleDeleteStudent}
                    disabled={isDeleting}
                    className="flex-1 py-4 bg-red-600 text-white font-black rounded-2xl hover:bg-red-700 transition-all flex items-center justify-center gap-2"
                  >
                    {isDeleting ? <RefreshCcw size={18} className="animate-spin" /> : <Trash2 size={18} />}
                    CONFIRM
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ---------------- HEADER ---------------- */}
      <div className="flex flex-col gap-6 mb-10">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="p-3 bg-white border rounded-xl shadow-sm hover:bg-slate-50 transition-colors"
          >
            <ChevronLeft size={22} />
          </button>
          <div>
            <h2 className="text-3xl font-black">{domain.name} Students</h2>
            <p className="text-slate-500">Manage & track students by course and status</p>
          </div>
        </div>

        {/* ---------------- FILTER BAR ---------------- */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search by name or city..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="pl-11 pr-4 py-3 border rounded-xl w-full focus:ring-2 focus:ring-blue-100 outline-none"
            />
          </div>

          <select
            value={courseFilter}
            onChange={e => setCourseFilter(e.target.value)}
            className="px-4 py-3 border rounded-xl bg-white focus:ring-2 focus:ring-blue-100 outline-none"
          >
            {courseOptions.map(course => (
              <option key={course} value={course}>
                {course === "all" ? "All Courses" : course}
              </option>
            ))}
          </select>

          <div className="flex gap-2 flex-wrap">
            {["all", "new", "in-progress", "completed"].map(status => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${statusFilter === status ? "bg-slate-900 text-white shadow-lg" : "bg-white border text-slate-600 hover:bg-slate-50"
                  }`}
              >
                {status.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ---------------- CONTENT ---------------- */}
      {error && (
        <div className="mb-8 p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center justify-between">
          <div className="flex items-center gap-3 text-red-600 text-sm font-medium">
            <AlertCircle size={20} />
            {error}
          </div>
          <button onClick={fetchStudents} className="px-4 py-2 bg-red-600 text-white text-xs font-bold rounded-xl hover:bg-red-700 transition-colors">
            Try Again
          </button>
        </div>
      )}

      {loading ? (
        <div className="py-20 text-center flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="font-bold text-slate-400">Loading students...</p>
        </div>
      ) : filteredStudents.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredStudents.map(student => (
            <motion.div
              key={student._id}
              whileHover={{ y: -4 }}
              className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-slate-100 text-slate-700 rounded-2xl flex items-center justify-center font-black text-xl shadow-inner border border-white">
                    {student.fullName?.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-800">{student.fullName}</h3>
                    <p className="text-sm text-slate-500 flex items-center gap-1">
                      <MapPin size={14} className="text-blue-500" />
                      {student.city}, {student.state}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {updatingId === student._id && <RefreshCcw size={14} className="animate-spin text-blue-500" />}

                  {/* Conditionally show Delete Icon if status is completed */}
                  {student.status === "completed" && (
                    <motion.button
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      onClick={() => setStudentToDelete(student)}
                      className="p-3 bg-red-50 text-red-500 rounded-xl hover:bg-red-100 transition-colors"
                      title="Delete Student"
                    >
                      <Trash2 size={18} />
                    </motion.button>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 text-sm mb-6 pb-6 border-b border-slate-50">
                <p className="flex items-center gap-2 text-slate-600 truncate">
                  <Mail size={16} className="text-slate-400 flex-shrink-0" />
                  {student.email}
                </p>

                <p className="flex items-center gap-2 text-slate-600">
                  <Phone size={16} className="text-slate-400 flex-shrink-0" />
                  {student.phone}
                </p>

                <p className="flex items-center gap-2 text-slate-600">
                  <GraduationCap size={16} className="text-slate-400 flex-shrink-0" />
                  {student.eduLevel}
                </p>

                <p className="flex items-center gap-2 text-slate-600">
                  <BookOpen size={16} className="text-slate-400 flex-shrink-0" />
                  <span className="font-semibold text-slate-500">Interested Course:</span>
                  <span className="font-bold text-slate-700">{student.course}</span>
                </p>

                <p className="flex items-center gap-2 text-slate-600">
                  <Calendar size={16} className="text-slate-400 flex-shrink-0" />
                  <span className="font-semibold text-slate-500">DOB:</span>
                  <span className="font-bold text-slate-700">
                    {formatDOB(student.dob)}
                  </span>

                </p>

                <p className="flex items-center gap-2 text-slate-600">
                  <span className="w-4 h-4 flex items-center justify-center rounded-full bg-slate-200 text-[10px] font-black text-slate-600">
                    A
                  </span>
                  <span className="font-semibold text-slate-500">Age:</span>
                  <span className="font-bold text-slate-700">{student.age} yrs</span>
                </p>
              </div>


              <div className="mb-6">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3 ml-1">Update Lead Status</p>
                <div className="flex flex-wrap gap-3">
                  <button onClick={() => handleStatusUpdate(student._id, "new")} className={getStatusStyles("new", student.status === "new")}>
                    {student.status === "new" && <CheckCircle size={12} />} NEW
                  </button>
                  <button onClick={() => handleStatusUpdate(student._id, "in-progress")} className={getStatusStyles("in-progress", student.status === "in-progress")}>
                    {student.status === "in-progress" && <Clock size={12} />} IN PROGRESS
                  </button>
                  <button onClick={() => handleStatusUpdate(student._id, "completed")} className={getStatusStyles("completed", student.status === "completed")}>
                    {student.status === "completed" && <CheckCircle size={12} />} COMPLETED
                  </button>
                </div>
              </div>

              {student.message && (
                <div className="bg-slate-50 p-5 rounded-2xl text-sm border border-slate-100">
                  <p className="font-black text-slate-400 text-[10px] uppercase tracking-widest mb-2 flex items-center gap-1.5">
                    <MessageSquare size={12} /> Student Note
                  </p>
                  <p className="text-slate-600 italic leading-relaxed">"{student.message}"</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-32 bg-white rounded-[3rem] border border-dashed border-slate-300">
          <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <Search size={32} className="text-slate-300" />
          </div>
          <h3 className="text-xl font-black text-slate-400">No matching students found</h3>
          <p className="text-slate-400">Try adjusting your filters or search query</p>
        </div>
      )}
    </motion.div>
  );
};

const CounselorDashboard = () => {
  const [counselorProfile, setCounselorProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedDomain, setSelectedDomain] = useState(null);

  useEffect(() => {
    const savedProfile = localStorage.getItem("counselorProfile");
    const profileData = savedProfile ? JSON.parse(savedProfile) : { name: "Dr. Sandeep", email: "sandeep@careerguide.com" };
    setCounselorProfile(profileData);
    setLoading(false);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("counselorToken");
    localStorage.removeItem("counselorProfile");
    window.location.reload();
  };

  const counselorCategories = [
    { id: 1, name: "MEDICAL", icon: Stethoscope, description: "Healthcare and surgical medical programs.", courses: ["MBBS", "BAMS", "BHMS"], stats: { rating: 4.9 }, color: "text-red-600", bgColor: "bg-red-50" },
    { id: 2, name: "PHARMACY", icon: Pill, description: "Pharmaceutical sciences and drug research.", courses: ["B.Pharm", "D.Pharm"], stats: { rating: 4.7 }, color: "text-emerald-600", bgColor: "bg-emerald-50" },
    { id: 3, name: "NURSING", icon: UserRound, description: "Clinical nursing and healthcare assistance.", courses: ["B.Sc Nursing", "GNM"], stats: { rating: 4.8 }, color: "text-blue-600", bgColor: "bg-blue-50" },
    { id: 4, name: "PARAMEDICAL", icon: Microscope, description: "Paramedical and allied health services.", courses: ["BPT", "BMLT"], stats: { rating: 4.6 }, color: "text-purple-600", bgColor: "bg-purple-50" },
    { id: 5, name: "ENGINEERING", icon: Settings, description: "Technical and technological innovations.", courses: ["B.Tech", "M.Tech"], stats: { rating: 4.9 }, color: "text-orange-600", bgColor: "bg-orange-50" },
    { id: 6, name: "MANAGEMENT", icon: Briefcase, description: "Business leadership and administration.", courses: ["MBA", "BBA"], stats: { rating: 4.7 }, color: "text-indigo-600", bgColor: "bg-indigo-50" },
    { id: 7, name: "GRADUATION", icon: BookOpen, description: "Undergraduate arts and science degrees.", courses: ["BA", "B.Sc"], stats: { rating: 4.5 }, color: "text-teal-600", bgColor: "bg-teal-50" },
    { id: 8, name: "POST GRADUATION", icon: GraduationCap, description: "Advanced master and research programs.", courses: ["MA", "M.Sc"], stats: { rating: 4.8 }, color: "text-cyan-600", bgColor: "bg-cyan-50" },
    { id: 9, name: "VOCATIONAL", icon: Laptop, description: "Skill-based technical training.", courses: ["ITI", "BCA"], stats: { rating: 4.4 }, color: "text-pink-600", bgColor: "bg-pink-50" },
    { id: 10, name: "LANGUAGES", icon: Languages, description: "Global communication and linguistics.", courses: ["IELTS", "German"], stats: { rating: 4.9 }, color: "text-yellow-600", bgColor: "bg-yellow-50" },
    { id: 11, name: "AGRICULTURE", icon: Leaf, description: "Farm science and agricultural technology.", courses: ["B.Sc Agri"], stats: { rating: 4.7 }, color: "text-lime-600", bgColor: "bg-lime-50" },
    { id: 12, name: "EDUCATION", icon: Presentation, description: "Teacher training and pedagogical studies.", courses: ["B.Ed", "M.Ed"], stats: { rating: 4.6 }, color: "text-amber-600", bgColor: "bg-amber-50" }
  ];

  if (loading || !counselorProfile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-blue-100">
      <div className="container mx-auto px-6 py-10">
        <AnimatePresence mode="wait">
          {!selectedDomain ? (
            <motion.div key="dashboard" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="relative overflow-hidden bg-slate-900 rounded-[3rem] p-12 mb-12 text-white shadow-2xl">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full -translate-y-48 translate-x-48 blur-[100px]"></div>
                <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
                  <div className="max-w-xl">
                    <h2 className="text-5xl font-black mb-4 leading-tight">Welcome Back, {counselorProfile?.name}! 👋</h2>
                    <p className="text-slate-400 text-lg leading-relaxed">
                      Your counseling dashboard is ready. Select a domain below to manage leads and update student progress in real-time.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <button className="px-8 py-4 bg-blue-600 text-white font-black rounded-[1.5rem] hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/40 flex items-center gap-2">
                      Review Performance <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="mb-10">
                <h2 className="text-3xl font-black text-slate-800 tracking-tight">Specialization Domains</h2>
                <p className="text-slate-500 font-medium">Click a category to manage focused student data</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {counselorCategories.map((category, idx) => {
                  const Icon = category.icon;
                  return (
                    <motion.div
                      key={category.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      whileHover={{ y: -10, scale: 1.02 }}
                      onClick={() => setSelectedDomain(category)}
                      className="group bg-white rounded-[2.5rem] border border-slate-200 p-8 shadow-sm hover:shadow-2xl hover:border-blue-100 transition-all duration-500 cursor-pointer flex flex-col relative overflow-hidden"
                    >
                      <div className={`w-16 h-16 rounded-[1.5rem] ${category.bgColor} ${category.color} flex items-center justify-center mb-8 shadow-lg group-hover:rotate-12 transition-transform duration-500`}>
                        <Icon size={24} />
                      </div>
                      <h3 className="text-2xl font-black text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">{category.name}</h3>
                      <p className="text-slate-400 font-medium text-sm leading-relaxed mb-8 flex-grow">{category.description}</p>
                      <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                        <div className="flex items-center gap-2">
                          <Star size={16} fill="currentColor" className="text-amber-400" />
                          <span className="text-sm font-black text-slate-800">{category.stats.rating}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-blue-600 font-black text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                          Review Leads <ChevronRight size={18} />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ) : (
            <StudentManagement key="management" domain={selectedDomain} onBack={() => setSelectedDomain(null)} />
          )}
        </AnimatePresence>
      </div>

      <footer className="container mx-auto px-6 py-12 mt-20 border-t border-slate-200">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex items-center gap-3 opacity-50 grayscale hover:grayscale-0 transition-all cursor-pointer">
            <div className="bg-slate-800 p-2 rounded-xl text-white">
              <GraduationCap size={20} />
            </div>
            <span className="text-xl font-black tracking-tighter">CounselorPro</span>
          </div>
          <div className="flex items-center gap-8">
            <button onClick={handleLogout} className="flex items-center gap-2 px-6 py-3 bg-red-50 text-red-600 font-black rounded-2xl text-xs uppercase tracking-widest hover:bg-red-100 transition-all">
              <LogOut size={16} /> Logout System
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CounselorDashboard;