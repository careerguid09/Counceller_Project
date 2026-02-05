import React, { useState, useMemo } from "react";
import { 
  Users, Briefcase, Calendar, MessageSquare, Video, TrendingUp, 
  Star, Clock, GraduationCap, Building2, Trophy, FileText, Search, 
  MapPin, Filter, CheckCircle2, AlertCircle, ChevronRight,
  MoreVertical, Phone, Mail, BookOpen, Award, Globe, ShieldCheck,
  Quote, Lightbulb, Sparkles, Coffee, Laptop, LineChart, Target,
  X
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- CAREER COUNSELOR DUMMY DATA ---
const CLIENTS_DATA = [
  { 
    id: 1, 
    name: "Aarav Mehta", 
    location: "Bangalore, KA", 
    status: "upcoming", 
    type: "Career Assessment", 
    time: "10:30 AM", 
    date: "Today", 
    duration: "45 min", 
    color: "from-blue-400 to-indigo-500", 
    industry: "Software Tech",
    email: "aarav.mehta@example.com",
    phone: "+91 98765 43221",
    experience: "3 years",
    currentRole: "Software Engineer",
    targetRole: "Senior Developer",
    currentSalary: "₹12 LPA",
    targetSalary: "₹18 LPA",
    sessionsCompleted: 4,
    skillGaps: ["System Design", "Team Leadership"],
    preferredContact: "Email & WhatsApp",
    notes: "Strong technical skills, needs guidance on career progression and leadership development.",
    upcomingActions: [
      { title: "Mock Interview", date: "Dec 20, 2024", priority: "High" },
      { title: "Resume Update", date: "Dec 25, 2024", priority: "Medium" }
    ]
  },
  { 
    id: 2, 
    name: "Priya Sharma", 
    location: "Mumbai, MH", 
    status: "completed", 
    type: "Resume Review", 
    time: "09:00 AM", 
    date: "Yesterday", 
    duration: "60 min", 
    color: "from-teal-400 to-emerald-500", 
    industry: "Marketing",
    email: "priya.sharma@example.com",
    phone: "+91 98765 43222",
    experience: "5 years",
    currentRole: "Marketing Manager",
    targetRole: "Head of Marketing",
    currentSalary: "₹18 LPA",
    targetSalary: "₹25 LPA",
    sessionsCompleted: 6,
    skillGaps: ["Digital Strategy", "Budget Management"],
    preferredContact: "Phone",
    notes: "Excellent creative skills, needs to strengthen analytical and strategic planning abilities.",
    upcomingActions: [
      { title: "Strategy Presentation", date: "Jan 5, 2025", priority: "Urgent" }
    ]
  },
  { 
    id: 3, 
    name: "Raj Patel", 
    location: "Ahmedabad, GJ", 
    status: "upcoming", 
    type: "Interview Prep", 
    time: "04:30 PM", 
    date: "Today", 
    duration: "30 min", 
    color: "from-indigo-400 to-blue-600", 
    industry: "Finance",
    email: "raj.patel@example.com",
    phone: "+91 98765 43223",
    experience: "7 years",
    currentRole: "Financial Analyst",
    targetRole: "Finance Manager",
    currentSalary: "₹15 LPA",
    targetSalary: "₹22 LPA",
    sessionsCompleted: 3,
    skillGaps: ["Financial Modeling", "Team Management"],
    preferredContact: "WhatsApp",
    notes: "Strong analytical skills, needs interview practice for leadership roles.",
    upcomingActions: [
      { title: "Interview with HDFC", date: "Dec 22, 2024", priority: "Urgent" }
    ]
  },
  { 
    id: 4, 
    name: "Sneha Reddy", 
    location: "Hyderabad, TS", 
    status: "upcoming", 
    type: "Executive Coaching", 
    time: "06:00 PM", 
    date: "Tomorrow", 
    duration: "60 min", 
    color: "from-cyan-400 to-blue-500", 
    industry: "Healthcare",
    email: "sneha.reddy@example.com",
    phone: "+91 98765 43224",
    experience: "10 years",
    currentRole: "Hospital Administrator",
    targetRole: "Healthcare Consultant",
    currentSalary: "₹20 LPA",
    targetSalary: "₹30 LPA",
    sessionsCompleted: 8,
    skillGaps: ["Consulting Skills", "Client Acquisition"],
    preferredContact: "Email",
    notes: "Experienced professional seeking transition from operations to consulting.",
    upcomingActions: [
      { title: "Consulting Proposal", date: "Jan 10, 2025", priority: "High" }
    ]
  },
  { 
    id: 5, 
    name: "Vikram Singh", 
    location: "Delhi, DL", 
    status: "completed", 
    type: "Skill Gap Analysis", 
    time: "02:00 PM", 
    date: "2 days ago", 
    duration: "50 min", 
    color: "from-slate-400 to-slate-600", 
    industry: "Data Science",
    email: "vikram.singh@example.com",
    phone: "+91 98765 43225",
    experience: "4 years",
    currentRole: "Data Analyst",
    targetRole: "Data Scientist",
    currentSalary: "₹14 LPA",
    targetSalary: "₹20 LPA",
    sessionsCompleted: 5,
    skillGaps: ["Machine Learning", "Python Advanced"],
    preferredContact: "Email & Phone",
    notes: "Quick learner, needs to build portfolio with real-world projects.",
    upcomingActions: [
      { title: "ML Certification", date: "Feb 1, 2025", priority: "Medium" }
    ]
  },
];

// Client Profile Modal Component
const ClientProfileModal = ({ client, onClose }) => {
  if (!client) return null;

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
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg flex items-center justify-center">
                  <img
                    src={`https://api.dicebear.com/7.x/initials/svg?seed=${client.name}&backgroundColor=2563EB`}
                    className="rounded-2xl w-20 h-20"
                    alt={client.name}
                  />
                </div>
                <div className={`absolute -bottom-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center ${
                  client.status === 'upcoming' 
                    ? 'bg-blue-500' 
                    : 'bg-emerald-500'
                }`}>
                  {client.status === 'upcoming' ? (
                    <Calendar size={16} className="text-white" />
                  ) : (
                    <Award size={16} className="text-white" />
                  )}
                </div>
              </div>
              
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{client.name}</h1>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex items-center gap-2 text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full text-sm font-bold">
                    <MapPin size={14} />
                    {client.location}
                  </span>
                  <span className={`px-4 py-1.5 rounded-full text-sm font-bold ${
                    client.status === 'upcoming' 
                      ? 'bg-blue-100 text-blue-700 border border-blue-200'
                      : 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                  }`}>
                    {client.status === 'upcoming' ? 'Upcoming Session' : 'Completed'}
                  </span>
                  <span className="px-4 py-1.5 rounded-full text-sm font-bold bg-indigo-100 text-indigo-700">
                    {client.industry}
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
              
              {/* Career Details Card */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-6 text-xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                    <Briefcase className="text-blue-600" size={20} />
                  </div>
                  <span>Career Profile</span>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-5 rounded-2xl border border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                        <TrendingUp className="text-blue-500" size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Experience</p>
                        <p className="text-lg font-bold text-gray-900">{client.experience}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-5 rounded-2xl border border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center">
                        <Target className="text-indigo-500" size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Current Role</p>
                        <p className="text-lg font-bold text-gray-900">{client.currentRole}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-5 rounded-2xl border border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center">
                        <GraduationCap className="text-teal-500" size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Target Role</p>
                        <p className="text-lg font-bold text-gray-900">{client.targetRole}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-5 rounded-2xl border border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center">
                        <Calendar className="text-emerald-500" size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Next Session</p>
                        <p className="text-lg font-bold text-gray-900">{client.date} • {client.time}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact & Financial Information */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-6 text-xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
                    <Users className="text-indigo-600" size={20} />
                  </div>
                  <span>Contact & Financial Details</span>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-white p-5 rounded-2xl border border-gray-100">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                          <Mail className="text-blue-500" size={20} />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Email</p>
                          <p className="text-base font-bold text-gray-900">
                            {client.email}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-5 rounded-2xl border border-gray-100">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center">
                          <TrendingUp className="text-emerald-500" size={20} />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Current Salary</p>
                          <p className="text-base font-bold text-gray-900">
                            {client.currentSalary}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-5 rounded-2xl border border-gray-100">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center">
                          <Phone className="text-indigo-500" size={20} />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Phone</p>
                          <p className="text-base font-bold text-gray-900">
                            {client.phone}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-5 rounded-2xl border border-gray-100">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center">
                          <Target className="text-amber-500" size={20} />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Target Salary</p>
                          <p className="text-base font-bold text-gray-900">
                            {client.targetSalary}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Progress & Skill Analysis */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-6 text-xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                    <FileText className="text-purple-600" size={20} />
                  </div>
                  <span>Progress Analysis & Skill Gaps</span>
                </h3>
                
                <div className="bg-white p-6 rounded-2xl border border-gray-100">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 font-medium">Sessions Completed</span>
                      <span className="font-bold text-gray-900">{client.sessionsCompleted}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 font-medium">Preferred Contact</span>
                      <span className="font-bold text-blue-600">{client.preferredContact}</span>
                    </div>
                    <div className="mt-4">
                      <p className="text-gray-600 font-medium mb-2">Identified Skill Gaps:</p>
                      <div className="flex flex-wrap gap-2">
                        {client.skillGaps?.map((skill, index) => (
                          <span key={index} className="px-3 py-1 bg-red-50 text-red-700 rounded-full text-sm font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-blue-50 rounded-xl">
                      <p className="text-sm text-gray-700">
                        <span className="font-bold">Counselor Notes:</span> {client.notes}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Sidebar */}
            <div className="space-y-8">
              
              {/* Progress Stats */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-3xl border border-blue-100 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-6 text-lg">Career Progress</h3>
                
                <div className="space-y-5">
                  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-white/50">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 text-sm font-medium">Readiness Score</span>
                      <span className="text-2xl font-bold text-blue-600">
                        78%
                      </span>
                    </div>
                    <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full" 
                        style={{ width: '78%' }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-white/50">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 text-sm font-medium">Profile Strength</span>
                      <span className="text-lg font-bold text-gray-900">
                        8.5/10
                      </span>
                    </div>
                    <div className="mt-2 flex items-center gap-1">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star) => (
                        <div 
                          key={star} 
                          className={`h-2 rounded-full ${star <= 8.5 ? 'bg-indigo-500' : 'bg-gray-300'}`}
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
                  <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-100 flex items-center justify-center gap-2">
                    <Calendar size={18} />
                    Schedule Next Session
                  </button>
                  <button className="w-full bg-white border border-gray-200 text-gray-800 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                    <MessageSquare size={18} />
                    Send Career Resources
                  </button>
                  <button className="w-full bg-white border border-gray-200 text-gray-800 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                    <FileText size={18} />
                    Add Assessment Notes
                  </button>
                  <button className="w-full bg-white border border-gray-200 text-gray-800 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                    <Video size={18} />
                    Schedule Mock Interview
                  </button>
                </div>
              </div>
              
              {/* Upcoming Actions */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-6 text-lg">Upcoming Actions</h3>
                
                <div className="space-y-4">
                  {client.upcomingActions?.map((action, index) => (
                    <div key={index} className="bg-white p-4 rounded-2xl border border-gray-100">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-bold text-gray-900">{action.title}</span>
                        <span className={`px-2 py-1 ${
                          action.priority === 'Urgent' 
                            ? 'bg-red-100 text-red-700' 
                            : action.priority === 'High'
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-blue-100 text-blue-700'
                        } rounded text-xs font-bold`}>
                          {action.priority}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">{action.date}</p>
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

const StatCard = ({ label, value, icon: Icon, color, change }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 flex flex-col justify-between"
  >
    <div className="flex items-center justify-between mb-4">
      <div className={`p-3 rounded-xl ${color}`}>
        <Icon size={24} />
      </div>
      <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
        {change}
      </span>
    </div>
    <div>
      <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
      <p className="text-sm text-gray-500 font-medium">{label}</p>
    </div>
  </motion.div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedClient, setSelectedClient] = useState(null); // NEW STATE

  // Filtering Logic
  const filteredClients = useMemo(() => {
    return CLIENTS_DATA.filter((client) => {
      const matchesSearch = 
        client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        client.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
        client.location.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesStatus = 
        statusFilter === "all" || client.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [searchQuery, statusFilter]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 pb-20">
      <main className="pt-24 max-w-7xl mx-auto px-4">
        {/* Hero Welcome */}
        <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Welcome back, Dr. Sharma</h1>
            <p className="text-gray-500 mt-2 flex items-center gap-2 font-medium">
              <Calendar size={18} className="text-blue-500" />
              You have <span className="text-blue-600 font-bold">8 advisory sessions</span> booked this week.
            </p>
          </div>
        
        </header>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <StatCard label="Total Advising" value="1,248" icon={Users} color="bg-blue-50 text-blue-600" change="+8.2%" />
          <StatCard label="Placement Rate" value="94%" icon={Target} color="bg-emerald-50 text-emerald-600" change="+2%" />
          <StatCard label="Partner Firms" value="45" icon={Building2} color="bg-indigo-50 text-indigo-600" change="+4" />
          <StatCard label="Student Rating" value="4.8" icon={Star} color="bg-amber-50 text-amber-600" change="+0.1" />
        </div>

        {/* Filters & Search Section */}
        <section className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
            <div className="flex-1 max-w-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Candidate Pipeline</h2>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                  type="text"
                  placeholder="Search by name, city, or industry..."
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 font-medium transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {[
                { id: "all", label: "All Candidates", icon: Filter },
                { id: "upcoming", label: "Upcoming", icon: Calendar },
                { id: "completed", label: "Archived", icon: CheckCircle2 }
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setStatusFilter(btn.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-bold transition-all border ${
                    statusFilter === btn.id 
                    ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-100" 
                    : "bg-white border-gray-100 text-gray-500 hover:border-blue-200"
                  }`}
                >
                  <btn.icon size={16} />
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          {/* Client Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredClients.length > 0 ? (
                filteredClients.map((client) => (
                  <motion.div
                    layout
                    key={client.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="group bg-gray-50/50 hover:bg-white p-5 rounded-[2rem] border border-transparent hover:border-gray-100 hover:shadow-xl hover:shadow-blue-50 transition-all cursor-pointer relative overflow-hidden"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center border border-gray-100 overflow-hidden">
                           <img 
                            src={`https://api.dicebear.com/7.x/initials/svg?seed=${client.name}&backgroundColor=2563EB`} 
                            className="rounded-xl w-full h-full object-cover"
                            alt={client.name} 
                           />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors">{client.name}</h4>
                          <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest flex items-center gap-1 mt-1">
                            <MapPin size={10} className="text-blue-400" /> {client.location}
                          </p>
                        </div>
                      </div>
                      <button className="text-gray-300 hover:text-gray-900"><MoreVertical size={20} /></button>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <span className={`text-[10px] font-extrabold px-2 py-1 rounded-md uppercase ${
                        client.status === 'upcoming' ? 'bg-blue-100 text-blue-700' : 'bg-emerald-100 text-emerald-700'
                      }`}>
                        {client.status}
                      </span>
                      <span className="text-[10px] font-extrabold px-2 py-1 rounded-md uppercase bg-indigo-50 text-indigo-600">
                        {client.industry}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mb-5">
                      <div className="bg-white p-3 rounded-2xl border border-gray-50 flex items-center gap-3">
                        <Calendar size={14} className="text-blue-400" />
                        <div>
                          <p className="text-[10px] text-gray-400 font-bold uppercase leading-none">Date</p>
                          <p className="text-sm font-bold text-gray-700">{client.date}</p>
                        </div>
                      </div>
                      <div className="bg-white p-3 rounded-2xl border border-gray-50 flex items-center gap-3">
                        <Clock size={14} className="text-blue-400" />
                        <div>
                          <p className="text-[10px] text-gray-400 font-bold uppercase leading-none">Session</p>
                          <p className="text-sm font-bold text-gray-700">{client.time}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => setSelectedClient(client)}
                        className="flex-1 bg-gray-900 text-white py-3 rounded-xl font-bold text-xs hover:bg-blue-600 transition-colors"
                      >
                        View Full Profile
                      </button>
                      <button className="p-3 bg-white border border-gray-100 rounded-xl text-gray-400 hover:text-blue-500 hover:border-blue-100 transition-all">
                        <Phone size={16} />
                      </button>
                      <button className="p-3 bg-white border border-gray-100 rounded-xl text-gray-400 hover:text-blue-500 hover:border-blue-100 transition-all">
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
                  <h3 className="text-xl font-bold text-gray-800">No candidates found</h3>
                  <p className="text-gray-500 font-medium">Try broadening your search criteria.</p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* --- EXPANDED PAGE CONTENT (NON-INTERACTIVE) --- */}
        
        {/* Advising Philosophy */}
        <section className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-bold uppercase tracking-wider">
              <Sparkles size={16} />
              Strategic Methodology
            </div>
            <h2 className="text-4xl font-black text-gray-900 leading-tight">Bridging the gap between potential and professional success.</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Our career advising model is built on the intersection of data-driven market insights and personalized psychological profiling. We don't just find jobs; we architect sustainable professional journeys that align with long-term goals and societal impact.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 border-l-4 border-blue-500 bg-white">
                <h4 className="font-bold text-gray-900 mb-1">Market Insight</h4>
                <p className="text-sm text-gray-500">Real-time tracking of emerging industries and skill demands.</p>
              </div>
              <div className="p-4 border-l-4 border-emerald-500 bg-white">
                <h4 className="font-bold text-gray-900 mb-1">Psychometric </h4>
                <p className="text-sm text-gray-500">Deep-dive assessment of personality-career fit.</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-900 rounded-[3rem] h-[400px] flex items-center justify-center relative overflow-hidden border-8 border-white shadow-2xl">
             <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-indigo-900/40" />
             <Quote size={120} className="text-white/10 absolute top-10 left-10" />
             <div className="relative z-10 p-12 text-center text-white">
               <p className="text-2xl font-serif italic mb-6">"A career is not a ladder to be climbed, but a landscape to be explored with purpose and strategy."</p>
               <span className="font-bold text-blue-400">— Dr. Dev Sharma</span>
             </div>
          </div>
        </section>

        {/* Industry Recognition & Certification */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Global Credentials & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">ICF Master Coach</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Certified Master Coach by the International Coaching Federation, specializing in executive leadership development.</p>
            </div>
            <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-indigo-50 text-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Laptop size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">EdTech Innovator</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Pioneer in utilizing AI-driven career mapping for university students across 15+ major Indian institutions.</p>
            </div>
            <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">APAC Delegate</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Keynote speaker at the Asia-Pacific Employment Summit on the future of work in a post-automation economy.</p>
            </div>
          </div>
        </section>

        {/* Global Impact Dashboard */}
        <section className="bg-blue-600 rounded-[3rem] p-12 text-white mb-16 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 p-20 opacity-10">
            <LineChart size={300} strokeWidth={1} />
          </div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-4">Shaping Tomorrow's Workforce</h2>
              <p className="text-blue-100 mb-8 max-w-md">Our network spans across Fortune 500 companies and high-growth startups, providing unparalleled access to the global job market.</p>
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-white text-blue-600 rounded-xl font-bold text-sm hover:bg-blue-50 transition-all">Placement Report</button>
                <button className="px-6 py-3 bg-blue-700 rounded-xl font-bold text-sm hover:bg-blue-800 transition-all">Corporate Portal</button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 lg:col-span-2">
              <div className="text-center p-6 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/10">
                <p className="text-4xl font-black text-white mb-1">5,000+</p>
                <p className="text-xs font-bold uppercase tracking-widest text-blue-200">Placements Made</p>
              </div>
              <div className="text-center p-6 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/10">
                <p className="text-4xl font-black text-white mb-1">45%</p>
                <p className="text-xs font-bold uppercase tracking-widest text-blue-200">Avg. Salary Hike</p>
              </div>
              <div className="text-center p-6 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/10">
                <p className="text-4xl font-black text-white mb-1">200+</p>
                <p className="text-xs font-bold uppercase tracking-widest text-blue-200">Campus Events</p>
              </div>
              <div className="text-center p-6 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/10">
                <p className="text-4xl font-black text-white mb-1">100%</p>
                <p className="text-xs font-bold uppercase tracking-widest text-blue-200">Client Confidentiality</p>
              </div>
            </div>
          </div>
        </section>

        {/* Career Development Resources */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center">
              <BookOpen size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Academic & Career Initiatives</h2>
              <p className="text-gray-500 text-sm font-medium">Curated workshops for resume building and interview mastery.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-1 rounded-[2.5rem] border border-gray-100 overflow-hidden group">
              <div className="bg-blue-50 h-48 rounded-[2rem] m-2 flex items-center justify-center text-blue-200 group-hover:text-blue-300 transition-colors">
                <GraduationCap size={80} strokeWidth={1} />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold px-3 py-1 bg-blue-100 text-blue-600 rounded-full">Foundation</span>
                  <span className="text-sm font-bold text-gray-400">Monthly Series</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Resume Architecture 2.0</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">Designing ATS-compliant resumes that tell a compelling narrative of your professional evolution and value proposition.</p>
                <button className="w-full py-3 bg-gray-50 rounded-xl font-bold text-sm text-gray-700 hover:bg-gray-100 transition-colors">Course Curriculum</button>
              </div>
            </div>
            <div className="bg-white p-1 rounded-[2.5rem] border border-gray-100 overflow-hidden group">
              <div className="bg-indigo-50 h-48 rounded-[2rem] m-2 flex items-center justify-center text-indigo-200 group-hover:text-indigo-300 transition-colors">
                <Laptop size={80} strokeWidth={1} />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full">Advanced</span>
                  <span className="text-sm font-bold text-gray-400">Weekly Live</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Virtual Interview Domination</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">Mastering the art of digital communication, body language, and strategic storytelling for remote global positions.</p>
                <button className="w-full py-3 bg-gray-50 rounded-xl font-bold text-sm text-gray-700 hover:bg-gray-100 transition-colors">Register Session</button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Support & Trust */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-slate-900 rounded-[2rem] p-8 text-white md:col-span-2 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">Counselor Toolkit</h3>
              <p className="text-slate-400 mb-6 max-w-md font-medium">Access proprietary assessment forms, industry salary benchmarks, and interview cheat sheets.</p>
              <div className="flex flex-wrap gap-3">
                {["Industry Benchmarks 2024", "Psychometric Guide", "Interview Rubric", "LinkedIn Audit Checklist"].map(item => (
                  <button key={item} className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl text-[10px] font-bold transition-all uppercase tracking-widest">
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 right-0 opacity-10">
              <Target size={200} />
            </div>
          </div>
          
          <div className="bg-blue-600 rounded-[2rem] p-8 text-white flex flex-col justify-between shadow-xl shadow-blue-100">
            <div>
              <Lightbulb className="mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-2">Strategy Note</h3>
              <p className="text-blue-100 font-medium leading-relaxed">Always remind candidates: Your current skills are just the baseline; your curiosity is your competitive advantage.</p>
            </div>
            <button className="mt-6 w-full py-3 bg-white text-blue-600 rounded-2xl font-bold text-xs hover:bg-blue-50 transition-all flex items-center justify-center gap-2">
              <Coffee size={16} /> Advisory Mindset
            </button>
          </div>
        </section>

        {/* Security / Compliance */}
        <footer className="pt-10 border-t border-gray-100 text-center">
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-gray-400 font-bold text-[10px] uppercase tracking-widest">
              <ShieldCheck size={14} className="text-blue-500" /> GDPR Compliant
            </div>
            <div className="flex items-center gap-2 text-gray-400 font-bold text-[10px] uppercase tracking-widest">
              <ShieldCheck size={14} className="text-indigo-500" /> 256-bit Encryption
            </div>
            <div className="flex items-center gap-2 text-gray-400 font-bold text-[10px] uppercase tracking-widest">
              <ShieldCheck size={14} className="text-emerald-500" /> Professional Certification
            </div>
          </div>
          <p className="text-gray-400 text-xs font-bold uppercase tracking-tighter">© 2024 CareerPath Pro Systems. All rights reserved. Engineering Future Leaders.</p>
        </footer>

        {/* Client Profile Modal */}
        {selectedClient && (
          <ClientProfileModal 
            client={selectedClient}
            onClose={() => setSelectedClient(null)}
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