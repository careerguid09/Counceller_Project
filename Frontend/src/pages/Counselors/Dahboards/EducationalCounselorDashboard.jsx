import React, { useState, useMemo } from "react";
import { 
  Users, Heart, Calendar, MessageSquare, Video, TrendingUp, 
  Star, Clock, GraduationCap, Building2, Trophy, FileText, Search, 
  MapPin, Filter, CheckCircle2, AlertCircle, ChevronRight,
  MoreVertical, Phone, Mail, BookOpen, Award, Globe, ShieldCheck,
  Quote, Lightbulb, Sparkles, Coffee, Laptop, LineChart, Target,
  School, Landmark, PenTool, Microscope, X
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- EDUCATIONAL COUNSELOR DUMMY DATA ---
const STUDENT_DATA = [
  { 
    id: 1, 
    name: "Arjun Sharma", 
    location: "New Delhi, DL", 
    status: "upcoming", 
    type: "College Selection", 
    time: "10:00 AM", 
    date: "Today", 
    duration: "45 min", 
    color: "from-emerald-400 to-teal-500", 
    grade: "12th Science", 
    target: "JEE Advanced",
    email: "arjun.sharma@example.com",
    phone: "+91 98765 43210",
    parentContact: "+91 98765 43211",
    sessionsCompleted: 8,
    testScore: "85%",
    profileStrength: "9.2/10",
    targetCountries: "USA, UK, Canada",
    preferredContact: "WhatsApp & Email",
    notes: "Showing consistent improvement in quantitative sections. Needs focus on essay writing for Ivy League applications.",
    upcomingDeadlines: [
      { title: "SAT Registration", date: "Dec 20, 2024", priority: "Urgent" },
      { title: "Stanford Application", date: "Jan 5, 2025", priority: "High" }
    ]
  },
  { 
    id: 2, 
    name: "Neha Patel", 
    location: "Ahmedabad, GJ", 
    status: "completed", 
    type: "Career Guidance", 
    time: "02:30 PM", 
    date: "Yesterday", 
    duration: "60 min", 
    color: "from-green-400 to-emerald-600", 
    grade: "11th Commerce", 
    target: "SAT/TOEFL",
    email: "neha.patel@example.com",
    phone: "+91 98765 43212",
    parentContact: "+91 98765 43213",
    sessionsCompleted: 12,
    testScore: "92%",
    profileStrength: "9.5/10",
    targetCountries: "USA, Australia",
    preferredContact: "Email",
    notes: "Excellent communication skills. Strong candidate for business schools. Working on extra-curricular profile.",
    upcomingDeadlines: [
      { title: "TOEFL Exam", date: "Jan 15, 2025", priority: "Medium" }
    ]
  },
  { 
    id: 3, 
    name: "Rohan Kumar", 
    location: "Patna, BR", 
    status: "upcoming", 
    type: "Application Review", 
    time: "04:00 PM", 
    date: "Today", 
    duration: "30 min", 
    color: "from-teal-400 to-cyan-500", 
    grade: "12th Humanities", 
    target: "CUET",
    email: "rohan.kumar@example.com",
    phone: "+91 98765 43214",
    parentContact: "+91 98765 43215",
    sessionsCompleted: 5,
    testScore: "78%",
    profileStrength: "8.5/10",
    targetCountries: "India",
    preferredContact: "Phone & WhatsApp",
    notes: "Strong in humanities, needs guidance on college selection for political science programs.",
    upcomingDeadlines: [
      { title: "CUET Registration", date: "Feb 1, 2025", priority: "High" }
    ]
  },
  { 
    id: 4, 
    name: "Kavya Verma", 
    location: "Lucknow, UP", 
    status: "upcoming", 
    type: "Test Preparation", 
    time: "06:00 PM", 
    date: "Tomorrow", 
    duration: "60 min", 
    color: "from-emerald-500 to-green-700", 
    grade: "10th", 
    target: "Board Exams",
    email: "kavya.verma@example.com",
    phone: "+91 98765 43216",
    parentContact: "+91 98765 43217",
    sessionsCompleted: 3,
    testScore: "88%",
    profileStrength: "8.8/10",
    targetCountries: "India",
    preferredContact: "WhatsApp",
    notes: "Early stage counseling. Building foundation for science stream selection.",
    upcomingDeadlines: [
      { title: "School Pre-Boards", date: "Nov 30, 2024", priority: "Medium" }
    ]
  },
  { 
    id: 5, 
    name: "Vikas Mehta", 
    location: "Mumbai, MH", 
    status: "completed", 
    type: "University Shortlisting", 
    time: "11:00 AM", 
    date: "2 days ago", 
    duration: "45 min", 
    color: "from-cyan-500 to-blue-600", 
    grade: "12th Science", 
    target: "NEET",
    email: "vikas.mehta@example.com",
    phone: "+91 98765 43218",
    parentContact: "+91 98765 43219",
    sessionsCompleted: 15,
    testScore: "95%",
    profileStrength: "9.8/10",
    targetCountries: "India",
    preferredContact: "Email & WhatsApp",
    notes: "Top performer. Aiming for AIIMS. Needs guidance on backup medical colleges.",
    upcomingDeadlines: [
      { title: "NEET Application", date: "Mar 10, 2025", priority: "Urgent" }
    ]
  },
];

const StatCard = ({ label, value, icon: Icon, color, change, sub }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 flex flex-col justify-between"
  >
    <div className="flex items-center justify-between mb-4">
      <div className={`p-3 rounded-xl ${color}`}>
        <Icon size={24} />
      </div>
      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
        {change}
      </span>
    </div>
    <div>
      <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
      <p className="text-sm text-gray-500 font-medium">{label}</p>
      <p className="text-[10px] text-gray-400 mt-1 uppercase font-bold tracking-tighter">{sub}</p>
    </div>
  </motion.div>
);

// Student Profile Modal Component
const StudentProfileModal = ({ student, onClose }) => {
  if (!student) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-white rounded-[2.5rem] w-full max-w-4xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-6">
              <div className="relative">
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 shadow-lg flex items-center justify-center">
                  <img
                    src={`https://api.dicebear.com/7.x/initials/svg?seed=${student.name}&backgroundColor=059669`}
                    className="rounded-2xl w-20 h-20"
                    alt={student.name}
                  />
                </div>
                <div className={`absolute -bottom-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center ${
                  student.status === 'upcoming' 
                    ? 'bg-emerald-500' 
                    : 'bg-blue-500'
                }`}>
                  {student.status === 'upcoming' ? (
                    <Clock size={16} className="text-white" />
                  ) : (
                    <Award size={16} className="text-white" />
                  )}
                </div>
              </div>
              
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{student.name}</h1>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex items-center gap-2 text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full text-sm font-bold">
                    <MapPin size={14} />
                    {student.location}
                  </span>
                  <span className={`px-4 py-1.5 rounded-full text-sm font-bold ${
                    student.status === 'upcoming' 
                      ? 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                      : 'bg-blue-100 text-blue-700 border border-blue-200'
                  }`}>
                    {student.status === 'upcoming' ? 'Confirmed Session' : 'Completed'}
                  </span>
                  <span className="px-4 py-1.5 rounded-full text-sm font-bold bg-teal-100 text-teal-700">
                    {student.grade}
                  </span>
                </div>
              </div>
            </div>
            
            <button 
              onClick={onClose}
              className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <X size={24} className="text-gray-600" />
            </button>
          </div>
          
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Academic Details Card */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-6 text-xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                    <GraduationCap className="text-emerald-600" size={20} />
                  </div>
                  <span>Academic Profile</span>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-5 rounded-2xl border border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center">
                        <School className="text-emerald-500" size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Current Grade</p>
                        <p className="text-lg font-bold text-gray-900">{student.grade}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-5 rounded-2xl border border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                        <Target className="text-blue-500" size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Target Exam</p>
                        <p className="text-lg font-bold text-gray-900">{student.target}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-5 rounded-2xl border border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center">
                        <Calendar className="text-amber-500" size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Next Session</p>
                        <p className="text-lg font-bold text-gray-900">{student.date} • {student.time}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-5 rounded-2xl border border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center">
                        <BookOpen className="text-purple-500" size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Session Type</p>
                        <p className="text-lg font-bold text-gray-900">{student.type}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Information */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-6 text-xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                    <Users className="text-blue-600" size={20} />
                  </div>
                  <span>Contact & Communication</span>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-white p-5 rounded-2xl border border-gray-100">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center">
                          <Mail className="text-emerald-500" size={20} />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Email</p>
                          <p className="text-base font-bold text-gray-900">
                            {student.email}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-5 rounded-2xl border border-gray-100">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                          <Phone className="text-blue-500" size={20} />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Parent's Contact</p>
                          <p className="text-base font-bold text-gray-900">
                            {student.parentContact}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-5 rounded-2xl border border-gray-100">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center">
                          <MessageSquare className="text-amber-500" size={20} />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Preferred Contact</p>
                          <p className="text-base font-bold text-gray-900">
                            {student.preferredContact}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-5 rounded-2xl border border-gray-100">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center">
                          <Globe className="text-purple-500" size={20} />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Target Countries</p>
                          <p className="text-base font-bold text-gray-900">
                            {student.targetCountries}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Progress Notes */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-6 text-xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                    <FileText className="text-purple-600" size={20} />
                  </div>
                  <span>Progress Notes & History</span>
                </h3>
                
                <div className="bg-white p-6 rounded-2xl border border-gray-100">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 font-medium">Sessions Completed</span>
                      <span className="font-bold text-gray-900">{student.sessionsCompleted}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 font-medium">Mock Test Score</span>
                      <span className="font-bold text-emerald-600">{student.testScore}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 font-medium">Profile Strength</span>
                      <span className="font-bold text-blue-600">{student.profileStrength}</span>
                    </div>
                    <div className="mt-4 p-4 bg-emerald-50 rounded-xl">
                      <p className="text-sm text-gray-700">
                        <span className="font-bold">Counselor Notes:</span> {student.notes}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Sidebar */}
            <div className="space-y-8">
              
              {/* Quick Stats */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-3xl border border-emerald-100 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-6 text-lg">Academic Performance</h3>
                
                <div className="space-y-5">
                  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-white/50">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 text-sm font-medium">Test Readiness</span>
                      <span className="text-2xl font-bold text-emerald-600">
                        {student.testScore}
                      </span>
                    </div>
                    <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-emerald-500 h-2 rounded-full" 
                        style={{ width: student.testScore }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-white/50">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 text-sm font-medium">Profile Strength</span>
                      <span className="text-lg font-bold text-gray-900">
                        {student.profileStrength}
                      </span>
                    </div>
                    <div className="mt-2 flex items-center gap-1">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star) => (
                        <div 
                          key={star} 
                          className={`h-2 rounded-full ${
                            star <= parseFloat(student.profileStrength) ? 'bg-emerald-500' : 'bg-gray-300'
                          }`}
                          style={{ width: '8%' }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-white/50">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 text-sm font-medium">Satisfaction</span>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star 
                            key={star} 
                            size={18} 
                            className="text-amber-400 fill-amber-400" 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-6 text-lg">Quick Actions</h3>
                
                <div className="space-y-3">
                  <button className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-100 flex items-center justify-center gap-2">
                    <Calendar size={18} />
                    Schedule Next Session
                  </button>
                  <button className="w-full bg-white border border-gray-200 text-gray-800 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                    <MessageSquare size={18} />
                    Send Progress Update
                  </button>
                  <button className="w-full bg-white border border-gray-200 text-gray-800 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                    <FileText size={18} />
                    Add Session Notes
                  </button>
                  <button className="w-full bg-white border border-gray-200 text-gray-800 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                    <TrendingUp size={18} />
                    View Full Application
                  </button>
                </div>
              </div>
              
              {/* Upcoming Deadlines */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-6 text-lg">Upcoming Deadlines</h3>
                
                <div className="space-y-4">
                  {student.upcomingDeadlines?.map((deadline, index) => (
                    <div key={index} className="bg-white p-4 rounded-2xl border border-gray-100">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-bold text-gray-900">{deadline.title}</span>
                        <span className={`px-2 py-1 ${
                          deadline.priority === 'Urgent' 
                            ? 'bg-red-100 text-red-700' 
                            : deadline.priority === 'High'
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-blue-100 text-blue-700'
                        } rounded text-xs font-bold`}>
                          {deadline.priority}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">{deadline.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedStudent, setSelectedStudent] = useState(null); // NEW STATE

  // Filtering Logic
  const filteredStudents = useMemo(() => {
    return STUDENT_DATA.filter((student) => {
      const matchesSearch = 
        student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.target.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.location.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesStatus = 
        statusFilter === "all" || student.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [searchQuery, statusFilter]);

  return (
    <div className="min-h-screen bg-[#F9FBFA] text-slate-900 pb-20">
    
      <main className="pt-24 max-w-7xl mx-auto px-4">
        {/* Hero Welcome */}
        <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Academic Portal, Dr. Sharma</h1>
            <p className="text-gray-500 mt-2 flex items-center gap-2 font-medium">
              <Calendar size={18} className="text-emerald-500" />
              There are <span className="text-emerald-600 font-bold">12 application deadlines</span> approaching this week.
            </p>
          </div>
          
        </header>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <StatCard label="Total Students" value="482" icon={Users} color="bg-emerald-50 text-emerald-600" change="+14%" sub="156 active cases" />
          <StatCard label="Success Rate" value="92%" icon={Trophy} color="bg-amber-50 text-amber-600" change="+3%" sub="Top tier admissions" />
          <StatCard label="Avg. Score Improvement" value="+180" icon={TrendingUp} color="bg-blue-50 text-blue-600" change="+5%" sub="SAT/JEE Average" />
          <StatCard label="Scholarships" value="₹4.2Cr" icon={Landmark} color="bg-indigo-50 text-indigo-600" change="+22%" sub="Awarded this year" />
        </div>

        {/* Student Management Pipeline */}
        <section className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
            <div className="flex-1 max-w-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Student Enrollment Pipeline</h2>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                  type="text"
                  placeholder="Search by student, exam, or location..."
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-500 font-medium transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {[
                { id: "all", label: "All Students", icon: Filter },
                { id: "upcoming", label: "Confirmed", icon: Calendar },
                { id: "completed", label: "Success Stories", icon: CheckCircle2 }
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setStatusFilter(btn.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-bold transition-all border ${
                    statusFilter === btn.id 
                    ? "bg-emerald-600 border-emerald-600 text-white shadow-lg shadow-emerald-100" 
                    : "bg-white border-gray-100 text-gray-500 hover:border-emerald-200"
                  }`}
                >
                  <btn.icon size={16} />
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          {/* Student Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student) => (
                  <motion.div
                    layout
                    key={student.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="group bg-gray-50/50 hover:bg-white p-5 rounded-[2rem] border border-transparent hover:border-gray-100 hover:shadow-xl hover:shadow-emerald-50 transition-all cursor-pointer relative overflow-hidden"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center border border-gray-100 overflow-hidden">
                           <img 
                            src={`https://api.dicebear.com/7.x/initials/svg?seed=${student.name}&backgroundColor=059669`} 
                            className="rounded-xl w-full h-full object-cover"
                            alt={student.name} 
                           />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 leading-tight group-hover:text-emerald-600 transition-colors">{student.name}</h4>
                          <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest flex items-center gap-1 mt-1">
                            <MapPin size={10} className="text-emerald-400" /> {student.location}
                          </p>
                        </div>
                      </div>
                      <button className="text-gray-300 hover:text-gray-900"><MoreVertical size={20} /></button>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <span className={`text-[10px] font-extrabold px-2 py-1 rounded-md uppercase ${
                        student.status === 'upcoming' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'
                      }`}>
                        {student.status}
                      </span>
                      <span className="text-[10px] font-extrabold px-2 py-1 rounded-md uppercase bg-teal-50 text-teal-600">
                        {student.grade}
                      </span>
                      <span className="text-[10px] font-extrabold px-2 py-1 rounded-md uppercase bg-amber-50 text-amber-600">
                        {student.target}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mb-5">
                      <div className="bg-white p-3 rounded-2xl border border-gray-50 flex items-center gap-3">
                        <Calendar size={14} className="text-emerald-400" />
                        <div>
                          <p className="text-[10px] text-gray-400 font-bold uppercase leading-none">Next Meet</p>
                          <p className="text-sm font-bold text-gray-700">{student.date}</p>
                        </div>
                      </div>
                      <div className="bg-white p-3 rounded-2xl border border-gray-50 flex items-center gap-3">
                        <Clock size={14} className="text-emerald-400" />
                        <div>
                          <p className="text-[10px] text-gray-400 font-bold uppercase leading-none">Time</p>
                          <p className="text-sm font-bold text-gray-700">{student.time}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => setSelectedStudent(student)}
                        className="flex-1 bg-gray-900 text-white py-3 rounded-xl font-bold text-xs hover:bg-emerald-600 transition-colors"
                      >
                        View Full Profile
                      </button>
                      <button className="p-3 bg-white border border-gray-100 rounded-xl text-gray-400 hover:text-emerald-500 hover:border-emerald-100 transition-all">
                        <Phone size={16} />
                      </button>
                      <button className="p-3 bg-white border border-gray-100 rounded-xl text-gray-400 hover:text-emerald-500 hover:border-emerald-100 transition-all">
                        <Mail size={16} />
                      </button>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full py-20 text-center">
                  <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <AlertCircle size={40} className="text-gray-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">No student profiles match</h3>
                  <p className="text-gray-500 font-medium">Try checking for different grades or exam targets.</p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* --- EXPANDED PAGE CONTENT (NON-INTERACTIVE) --- */}
        
        {/* Educational Philosophy */}
        <section className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-600 rounded-full text-sm font-bold uppercase tracking-wider">
              <Sparkles size={16} />
              Educational Philosophy
            </div>
            <h2 className="text-4xl font-black text-gray-900 leading-tight">Empowering students through holistic academic strategy.</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              We believe that every student has a unique academic fingerprint. Our counseling isn't just about university placement; it's about identifying the intersection of a student's innate talent, academic rigor, and future market demands to build a lifelong career foundation.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 border-l-4 border-emerald-500 bg-white">
                <h4 className="font-bold text-gray-900 mb-1">Rigor & Fit</h4>
                <p className="text-sm text-gray-500">Matching academic ability with the right institutional culture.</p>
              </div>
              <div className="p-4 border-l-4 border-indigo-500 bg-white">
                <h4 className="font-bold text-gray-900 mb-1">Skill Architect</h4>
                <p className="text-sm text-gray-500">Beyond grades: building leadership, research, and communication.</p>
              </div>
            </div>
          </div>
          <div className="bg-emerald-900 rounded-[3rem] h-[400px] flex items-center justify-center relative overflow-hidden border-8 border-white shadow-2xl">
             <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 to-teal-900/40" />
             <Quote size={120} className="text-white/10 absolute top-10 left-10" />
             <div className="relative z-10 p-12 text-center text-white">
               <p className="text-2xl font-serif italic mb-6">"Education is not the learning of facts, but the training of the mind to think and the soul to lead."</p>
               <span className="font-bold text-emerald-400">— Dr. Ananya Kapoor</span>
             </div>
          </div>
        </section>

        {/* Credentials & Recognition */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">National Credentials & Accreditations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">National Merit Advisor</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Certified advisor for the National Merit Scholarship Program, helping students secure full-ride academic grants.</p>
            </div>
            <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <School size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Ivy League Consultant</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Recognized as a Premier International Admissions Consultant with a 94% admission rate to Tier-1 global universities.</p>
            </div>
            <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Global Ed-Tech Fellow</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Active fellow at the International Institute of Educational Planning, specializing in South Asian student mobility.</p>
            </div>
          </div>
        </section>

        {/* Admission Impact Statistics */}
        <section className="bg-emerald-600 rounded-[3rem] p-12 text-white mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-20 opacity-10">
            <LineChart size={300} strokeWidth={1} />
          </div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-4">Shaping India's Academic Future</h2>
              <p className="text-emerald-100 mb-8 max-w-md">Our practice reaches beyond individual counseling. We partner with over 150 schools to provide baseline psychological and academic profiling.</p>
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-white text-emerald-600 rounded-xl font-bold text-sm hover:bg-emerald-50 transition-all">Impact Report 2024</button>
                <button className="px-6 py-3 bg-emerald-700 rounded-xl font-bold text-sm hover:bg-emerald-800 transition-all">School Partners</button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 lg:col-span-2">
              <div className="text-center p-6 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/10">
                <p className="text-4xl font-black text-white mb-1">10,000+</p>
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-200">Admissions Secured</p>
              </div>
              <div className="text-center p-6 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/10">
                <p className="text-4xl font-black text-white mb-1">₹50Cr+</p>
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-200">Total Scholarships</p>
              </div>
              <div className="text-center p-6 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/10">
                <p className="text-4xl font-black text-white mb-1">200+</p>
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-200">Ivy League Offers</p>
              </div>
              <div className="text-center p-6 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/10">
                <p className="text-4xl font-black text-white mb-1">100%</p>
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-200">Student Satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        {/* Academic Initiatives & Events */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center">
              <BookOpen size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Upcoming Educational Seminars</h2>
              <p className="text-gray-500 text-sm font-medium">Spreading knowledge on the future of global academic landscapes.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-1 rounded-[2.5rem] border border-gray-100 overflow-hidden group shadow-sm">
              <div className="bg-emerald-50 h-48 rounded-[2rem] m-2 flex items-center justify-center text-emerald-200 group-hover:text-emerald-300 transition-colors">
                <PenTool size={80} strokeWidth={1} />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold px-3 py-1 bg-emerald-100 text-emerald-600 rounded-full">Interactive Workshop</span>
                  <span className="text-sm font-bold text-gray-400">Feb 22, 2024</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Mastering the Ivy League Essay</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">An intensive session focusing on narrative storytelling, authentic voice, and showcasing intellectual curiosity in college apps.</p>
                <button className="w-full py-3 bg-gray-50 rounded-xl font-bold text-sm text-gray-700 hover:bg-emerald-50 transition-colors">Register Session</button>
              </div>
            </div>
            <div className="bg-white p-1 rounded-[2.5rem] border border-gray-100 overflow-hidden group shadow-sm">
              <div className="bg-indigo-50 h-48 rounded-[2rem] m-2 flex items-center justify-center text-indigo-200 group-hover:text-indigo-300 transition-colors">
                <Microscope size={80} strokeWidth={1} />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full">Webinar</span>
                  <span className="text-sm font-bold text-gray-400">March 05, 2024</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Research & STEM Profile Building</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">Discovering how high school students can publish research, secure internships, and build a competitive STEM profile for top unis.</p>
                <button className="w-full py-3 bg-gray-50 rounded-xl font-bold text-sm text-gray-700 hover:bg-emerald-50 transition-colors">Learn More</button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Resources & Daily Insight */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-slate-900 rounded-[2rem] p-8 text-white md:col-span-2 relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">Counselor Academic Toolkit</h3>
              <p className="text-slate-400 mb-6 max-w-md font-medium">Access our internal database of scholarship deadlines, university essay prompts, and test prep rubrics.</p>
              <div className="flex flex-wrap gap-3">
                {["Scholarship Deadlines 2024", "University Fit Matrix", "Common App Cheat-Sheet", "Portfolio Guidelines"].map(item => (
                  <button key={item} className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl text-[10px] font-bold transition-all uppercase tracking-widest">
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 right-0 opacity-10">
              <School size={200} />
            </div>
          </div>
          
          <div className="bg-emerald-600 rounded-[2rem] p-8 text-white flex flex-col justify-between shadow-xl shadow-emerald-100">
            <div>
              <Star className="mb-4" fill="currentColor" size={32} />
              <h3 className="text-2xl font-bold mb-2">Advisory Insight</h3>
              <p className="text-emerald-100 font-medium leading-relaxed">Early engagement is key. Profiles built starting in Grade 9 consistently result in 40% higher admission rates to Ivy Plus unis.</p>
            </div>
            <button className="mt-6 w-full py-3 bg-white text-emerald-600 rounded-2xl font-bold text-xs hover:bg-emerald-50 transition-all flex items-center justify-center gap-2">
              <Coffee size={16} /> Counselor Wisdom
            </button>
          </div>
        </section>

        {/* Security / Compliance */}
        <footer className="pt-10 border-t border-gray-100 text-center">
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-gray-400 font-bold text-[10px] uppercase tracking-widest">
              <ShieldCheck size={14} className="text-emerald-500" /> Student Data Privacy Act
            </div>
            <div className="flex items-center gap-2 text-gray-400 font-bold text-[10px] uppercase tracking-widest">
              <ShieldCheck size={14} className="text-blue-500" /> End-to-End Secure Counseling
            </div>
            <div className="flex items-center gap-2 text-gray-400 font-bold text-[10px] uppercase tracking-widest">
              <ShieldCheck size={14} className="text-amber-500" /> Certified Education Consultant
            </div>
          </div>
          <p className="text-gray-400 text-xs font-bold uppercase tracking-tighter">© 2024 EduGuide Pro Educational Systems. All rights reserved. Architecting Academic Success.</p>
        </footer>

        {/* Student Profile Modal */}
        {selectedStudent && (
          <StudentProfileModal 
            student={selectedStudent}
            onClose={() => setSelectedStudent(null)}
          />
        )}
      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}