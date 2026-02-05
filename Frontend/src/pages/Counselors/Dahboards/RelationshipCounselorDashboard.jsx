import React, { useState, useMemo } from "react";
import { 
  Users, Heart, Calendar, MessageSquare, Video, TrendingUp, 
  Star, Clock, UserCheck, Baby, Handshake, Search, 
  MapPin, Filter, CheckCircle2, AlertCircle, ChevronRight,
  MoreVertical, Phone, Mail, BookOpen, Award, Globe, ShieldCheck,
  Quote, Lightbulb, Sparkles, Coffee, X, FileText
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- RELATIONSHIP COUNSELOR DUMMY DATA ---
const CLIENTS_DATA = [
  {
    id: 1,
    name: "Rahul & Priya Sharma",
    location: "Mumbai, MH",
    status: "upcoming",
    type: "Couple Therapy",
    time: "10:30 AM",
    date: "Today",
    duration: "60 min",
    color: "from-pink-400 to-rose-500",
    email: "rahul.priya@example.com",
    phone: "+91 98765 43441",
    emergencyContact: "+91 98765 43442",
    relationshipYears: "5",
    children: "1 (3 years)",
    occupation: "IT Manager & Teacher",
    sessionsCompleted: 8,
    conflictAreas: ["Communication", "Work-Life Balance"],
    progressScore: "75%",
    preferredContact: "Joint Sessions",
    therapistNotes: "Improving communication skills. Need to work on active listening. Making good progress.",
    relationshipType: "Married",
    nextSteps: [
      { title: "Communication Exercise", date: "Dec 22, 2024", priority: "High" },
      { title: "Date Night Planning", date: "Dec 28, 2024", priority: "Medium" }
    ]
  },
  {
    id: 2,
    name: "Anjali Mehta",
    location: "Delhi, DL",
    status: "completed",
    type: "Individual Counseling",
    time: "09:00 AM",
    date: "Yesterday",
    duration: "45 min",
    color: "from-blue-400 to-indigo-500",
    email: "anjali.mehta@example.com",
    phone: "+91 98765 43443",
    emergencyContact: "+91 98765 43444",
    relationshipYears: "N/A",
    children: "None",
    occupation: "Marketing Executive",
    sessionsCompleted: 12,
    conflictAreas: ["Self-Esteem", "Dating Anxiety"],
    progressScore: "85%",
    preferredContact: "Video Call",
    therapistNotes: "Working on self-worth and relationship patterns. Good progress with cognitive restructuring.",
    relationshipType: "Single",
    nextSteps: [
      { title: "Self-Esteem Workshop", date: "Jan 5, 2025", priority: "Medium" }
    ]
  },
  {
    id: 3,
    name: "Vikram & Sneha Singh",
    location: "Bangalore, KA",
    status: "upcoming",
    type: "Family Counseling",
    time: "04:30 PM",
    date: "Today",
    duration: "90 min",
    color: "from-purple-400 to-fuchsia-500",
    email: "vikram.sneha@example.com",
    phone: "+91 98765 43445",
    emergencyContact: "+91 98765 43446",
    relationshipYears: "12",
    children: "2 (8 & 5 years)",
    occupation: "Doctor & Architect",
    sessionsCompleted: 6,
    conflictAreas: ["Parenting Styles", "In-Law Issues"],
    progressScore: "65%",
    preferredContact: "Family Sessions",
    therapistNotes: "Complex family dynamics. Working on boundaries and united parenting approach.",
    relationshipType: "Married",
    nextSteps: [
      { title: "Family Meeting", date: "Dec 23, 2024", priority: "High" }
    ]
  },
  {
    id: 4,
    name: "Neha & Raj Patel",
    location: "Ahmedabad, GJ",
    status: "upcoming",
    type: "Pre-marital",
    time: "06:00 PM",
    date: "Tomorrow",
    duration: "60 min",
    color: "from-orange-400 to-red-500",
    email: "neha.raj@example.com",
    phone: "+91 98765 43447",
    emergencyContact: "+91 98765 43448",
    relationshipYears: "2",
    children: "None",
    occupation: "Entrepreneur & Lawyer",
    sessionsCompleted: 3,
    conflictAreas: ["Financial Planning", "Family Expectations"],
    progressScore: "80%",
    preferredContact: "Joint Counseling",
    therapistNotes: "Pre-marital counseling for wedding next year. Working on communication and conflict resolution.",
    relationshipType: "Engaged",
    nextSteps: [
      { title: "Financial Planning Session", date: "Jan 10, 2025", priority: "High" }
    ]
  },
  {
    id: 5,
    name: "Siddharth Varma",
    location: "Hyderabad, TS",
    status: "completed",
    type: "Relationship Coaching",
    time: "02:00 PM",
    date: "2 days ago",
    duration: "50 min",
    color: "from-teal-400 to-emerald-500",
    email: "siddharth.varma@example.com",
    phone: "+91 98765 43449",
    emergencyContact: "+91 98765 43450",
    relationshipYears: "N/A",
    children: "None",
    occupation: "Software Developer",
    sessionsCompleted: 5,
    conflictAreas: ["Dating Skills", "Social Anxiety"],
    progressScore: "70%",
    preferredContact: "Individual Sessions",
    therapistNotes: "Working on social skills and relationship building. Progress in self-confidence.",
    relationshipType: "Single",
    nextSteps: [
      { title: "Social Skills Practice", date: "Feb 1, 2025", priority: "Medium" }
    ]
  },
];

// --- PROFESSIONAL MILESTONES DATA ---
const MILESTONES = [
  { year: "2018", title: "Founded HeartSync Counseling Center", description: "Started private practice focusing on relationship therapy", icon: "🏛️" },
  { year: "2020", title: "Published 'Connective Conversations'", description: "Bestselling book on couple communication techniques", icon: "📚" },
  { year: "2021", title: "Awarded 'Counselor of the Year'", description: "Recognized by National Association of Therapists", icon: "🏆" },
  { year: "2023", title: "International Conference Keynote", description: "Featured speaker at Global Therapy Symposium", icon: "🌍" },
  { year: "2024", title: "Research Grant Awarded", description: "$250K grant for studying digital therapy efficacy", icon: "🔬" },
];

// --- APPROACHES DATA ---
const THERAPY_APPROACHES = [
  { name: "Emotionally Focused Therapy", sessions: 156, color: "from-rose-400 to-rose-600", icon: Heart },
  { name: "Cognitive Behavioral Therapy", sessions: 142, color: "from-blue-400 to-blue-600", icon: Lightbulb },
  { name: "Gottman Method", sessions: 98, color: "from-emerald-400 to-emerald-600", icon: Handshake },
  { name: "Narrative Therapy", sessions: 76, color: "from-purple-400 to-purple-600", icon: BookOpen },
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
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-rose-50 to-pink-50 shadow-lg flex items-center justify-center">
                  <img
                    src={`https://api.dicebear.com/7.x/initials/svg?seed=${client.name}&backgroundColor=F43F5E`}
                    className="rounded-2xl w-20 h-20"
                    alt={client.name}
                  />
                </div>
                <div className={`absolute -bottom-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center ${
                  client.status === 'upcoming' 
                    ? 'bg-rose-500' 
                    : 'bg-emerald-500'
                }`}>
                  {client.status === 'upcoming' ? (
                    <Calendar size={16} className="text-white" />
                  ) : (
                    <Heart size={16} className="text-white" />
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
                      ? 'bg-amber-100 text-amber-700 border border-amber-200'
                      : 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                  }`}>
                    {client.status === 'upcoming' ? 'Upcoming Session' : 'Completed'}
                  </span>
                  <span className="px-4 py-1.5 rounded-full text-sm font-bold bg-rose-100 text-rose-700">
                    {client.relationshipType}
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
              
              {/* Relationship Details Card */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-6 text-xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center">
                    <Heart className="text-rose-600" size={20} />
                  </div>
                  <span>Relationship Profile</span>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-5 rounded-2xl border border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center">
                        <Users className="text-rose-500" size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Relationship</p>
                        <p className="text-lg font-bold text-gray-900">{client.relationshipType}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-5 rounded-2xl border border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                        <Calendar className="text-blue-500" size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Years Together</p>
                        <p className="text-lg font-bold text-gray-900">{client.relationshipYears} years</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-5 rounded-2xl border border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center">
                        <Baby className="text-emerald-500" size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Children</p>
                        <p className="text-lg font-bold text-gray-900">{client.children}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-5 rounded-2xl border border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center">
                        <TrendingUp className="text-indigo-500" size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Next Session</p>
                        <p className="text-lg font-bold text-gray-900">{client.date} • {client.time}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact & Background Information */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-6 text-xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                    <UserCheck className="text-blue-600" size={20} />
                  </div>
                  <span>Contact & Background</span>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-white p-5 rounded-2xl border border-gray-100">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center">
                          <Mail className="text-rose-500" size={20} />
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
                          <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Occupation</p>
                          <p className="text-base font-bold text-gray-900">
                            {client.occupation}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-5 rounded-2xl border border-gray-100">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                          <Phone className="text-blue-500" size={20} />
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
                        <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center">
                          <MessageSquare className="text-purple-500" size={20} />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Preferred Contact</p>
                          <p className="text-base font-bold text-gray-900">
                            {client.preferredContact}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Progress & Conflict Areas */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-6 text-xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                    <FileText className="text-purple-600" size={20} />
                  </div>
                  <span>Therapy Progress & Focus Areas</span>
                </h3>
                
                <div className="bg-white p-6 rounded-2xl border border-gray-100">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 font-medium">Sessions Completed</span>
                      <span className="font-bold text-gray-900">{client.sessionsCompleted}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 font-medium">Progress Score</span>
                      <span className="font-bold text-emerald-600">{client.progressScore}</span>
                    </div>
                    <div className="mt-4">
                      <p className="text-gray-600 font-medium mb-2">Focus Areas:</p>
                      <div className="flex flex-wrap gap-2">
                        {client.conflictAreas?.map((area, index) => (
                          <span key={index} className="px-3 py-1 bg-rose-50 text-rose-700 rounded-full text-sm font-medium">
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-rose-50 rounded-xl">
                      <p className="text-sm text-gray-700">
                        <span className="font-bold">Therapist Notes:</span> {client.therapistNotes}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Sidebar */}
            <div className="space-y-8">
              
              {/* Progress Stats */}
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-3xl border border-rose-100 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-6 text-lg">Relationship Health</h3>
                
                <div className="space-y-5">
                  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-white/50">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 text-sm font-medium">Therapy Progress</span>
                      <span className="text-2xl font-bold text-rose-600">
                        {client.progressScore}
                      </span>
                    </div>
                    <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-rose-500 h-2 rounded-full" 
                        style={{ width: client.progressScore }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-white/50">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 text-sm font-medium">Relationship Strength</span>
                      <span className="text-lg font-bold text-gray-900">
                        {parseInt(client.progressScore) / 10}/10
                      </span>
                    </div>
                    <div className="mt-2 flex items-center gap-1">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((level) => (
                        <div 
                          key={level} 
                          className={`h-2 rounded-full ${level <= parseInt(client.progressScore) / 10 ? 'bg-rose-500' : 'bg-gray-300'}`}
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
                <h3 className="font-bold text-gray-800 mb-6 text-lg">Therapy Actions</h3>
                
                <div className="space-y-3">
                  <button className="w-full bg-rose-600 text-white py-4 rounded-xl font-bold hover:bg-rose-700 transition-colors shadow-lg shadow-rose-100 flex items-center justify-center gap-2">
                    <Calendar size={18} />
                    Schedule Next Session
                  </button>
                  <button className="w-full bg-white border border-gray-200 text-gray-800 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                    <MessageSquare size={18} />
                    Send Communication Exercise
                  </button>
                  <button className="w-full bg-white border border-gray-200 text-gray-800 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                    <FileText size={18} />
                    Add Session Notes
                  </button>
                  <button className="w-full bg-white border border-gray-200 text-gray-800 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                    <Video size={18} />
                    Schedule Video Session
                  </button>
                </div>
              </div>
              
              {/* Next Steps */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-6 text-lg">Next Steps</h3>
                
                <div className="space-y-4">
                  {client.nextSteps?.map((step, index) => (
                    <div key={index} className="bg-white p-4 rounded-2xl border border-gray-100">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-bold text-gray-900">{step.title}</span>
                        <span className={`px-2 py-1 ${
                          step.priority === 'High' 
                            ? 'bg-rose-100 text-rose-700' 
                            : step.priority === 'Medium'
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-blue-100 text-blue-700'
                        } rounded text-xs font-bold`}>
                          {step.priority}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">{step.date}</p>
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

// Stat Card Component
const StatCard = ({ label, value, icon: Icon, color, change }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 flex flex-col justify-between"
  >
    <div className="flex items-center justify-between mb-4">
      <div className={`p-3 rounded-xl ${color}`}>
        <Icon size={24} />
      </div>
      <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">
        {change}
      </span>
    </div>
    <div>
      <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
      <p className="text-sm text-gray-500 font-medium">{label}</p>
    </div>
  </motion.div>
);

// Main App Component
export default function App() {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedClient, setSelectedClient] = useState(null);
  const [selectedMilestone, setSelectedMilestone] = useState(0);

  // Filtering Logic
  const filteredClients = useMemo(() => {
    return CLIENTS_DATA.filter((client) => {
      const matchesSearch =
        client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        client.location.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStatus =
        statusFilter === "all" || client.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [searchQuery, statusFilter]);

  return (
    <div className="min-h-screen bg-[#FDFCFD] text-slate-900 pb-20">
      <AnimatePresence>
        {selectedClient && (
          <ClientProfileModal 
            client={selectedClient} 
            onClose={() => setSelectedClient(null)} 
          />
        )}
      </AnimatePresence>

      <main className="pt-24 max-w-7xl mx-auto px-4">
        {/* Hero Welcome */}
        <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
              Good morning, Dr. Kapoor
            </h1>
            <p className="text-gray-500 mt-2 flex items-center gap-2 font-medium">
              <Calendar size={18} className="text-rose-500" />
              You have{" "}
              <span className="text-rose-600 font-bold">5 sessions</span>{" "}
              scheduled for today.
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="px-6 py-3 bg-white border border-gray-100 text-gray-700 rounded-2xl font-bold hover:bg-gray-50 transition-colors flex items-center gap-2">
              <Coffee size={18} />
              Take Break
            </button>
            <button className="px-6 py-3 bg-rose-600 text-white rounded-2xl font-bold hover:bg-rose-700 transition-colors flex items-center gap-2">
              <Calendar size={18} />
              Add Session
            </button>
          </div>
        </header>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <StatCard
            label="Total Clients"
            value="156"
            icon={Users}
            color="bg-rose-50 text-rose-600"
            change="+12.5%"
          />
          <StatCard
            label="Completed"
            value="842"
            icon={CheckCircle2}
            color="bg-emerald-50 text-emerald-600"
            change="+24"
          />
          <StatCard
            label="Avg Rating"
            value="4.9"
            icon={Star}
            color="bg-amber-50 text-amber-600"
            change="+0.2"
          />
          <StatCard
            label="Engagement"
            value="92%"
            icon={TrendingUp}
            color="bg-indigo-50 text-indigo-600"
            change="+5%"
          />
        </div>

        {/* Filters & Search Section */}
        <section className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
            <div className="flex-1 max-w-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Client Management
              </h2>
              <div className="relative">
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search by name or city..."
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-rose-500 font-medium transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {[
                { id: "all", label: "All Sessions", icon: Filter },
                { id: "upcoming", label: "Upcoming", icon: Calendar },
                { id: "completed", label: "Completed", icon: CheckCircle2 },
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setStatusFilter(btn.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-bold transition-all border ${
                    statusFilter === btn.id
                      ? "bg-rose-600 border-rose-600 text-white shadow-lg shadow-rose-100"
                      : "bg-white border-gray-100 text-gray-500 hover:border-rose-200"
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
                    className="group bg-gray-50/50 hover:bg-white p-5 rounded-[2rem] border border-transparent hover:border-gray-100 hover:shadow-xl hover:shadow-gray-100 transition-all cursor-pointer relative overflow-hidden"
                    onClick={() => setSelectedClient(client)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-50/20 to-pink-50/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="flex items-start justify-between mb-4 relative z-10">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-rose-500">
                          <img 
                            src={`https://api.dicebear.com/7.x/initials/svg?seed=${client.name}&backgroundColor=F43F5E`} 
                            className="rounded-xl"
                            alt={client.name} 
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 leading-tight group-hover:text-rose-600 transition-colors">{client.name}</h4>
                          <p className="text-xs text-gray-500 font-bold uppercase tracking-tighter flex items-center gap-1">
                            <MapPin size={10} /> {client.location}
                          </p>
                        </div>
                      </div>
                      <button className="text-gray-300 hover:text-gray-900">
                        <MoreVertical size={20} />
                      </button>
                    </div>

                    <div className="flex items-center gap-2 mb-4 relative z-10">
                      <span className={`text-[10px] font-extrabold px-2 py-1 rounded-md uppercase ${
                        client.status === 'upcoming' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'
                      }`}>
                        {client.status}
                      </span>
                      <span className="text-[10px] font-extrabold px-2 py-1 rounded-md uppercase bg-gray-100 text-gray-500">
                        {client.type}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mb-5 relative z-10">
                      <div className="bg-white p-3 rounded-2xl border border-gray-50 flex items-center gap-3">
                        <Calendar size={14} className="text-gray-400" />
                        <div>
                          <p className="text-[10px] text-gray-400 font-bold uppercase leading-none">Date</p>
                          <p className="text-sm font-bold text-gray-700">{client.date}</p>
                        </div>
                      </div>
                      <div className="bg-white p-3 rounded-2xl border border-gray-50 flex items-center gap-3">
                        <Clock size={14} className="text-gray-400" />
                        <div>
                          <p className="text-[10px] text-gray-400 font-bold uppercase leading-none">Time</p>
                          <p className="text-sm font-bold text-gray-700">{client.time}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 relative z-10">
                      <button className="flex-1 bg-gray-900 text-white py-3 rounded-xl font-bold text-xs hover:bg-gray-800 transition-colors">
                        View Full Profile
                      </button>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full py-20 text-center">
                  <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <AlertCircle size={40} className="text-gray-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    No clients found
                  </h3>
                  <p className="text-gray-500 font-medium">
                    Try adjusting your search or filters.
                  </p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Practice Philosophy */}
        <section className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-50 text-rose-600 rounded-full text-sm font-bold uppercase tracking-wider">
              <Sparkles size={16} />
              Clinical Philosophy
            </div>
            <h2 className="text-4xl font-black text-gray-900 leading-tight">
              Empowering growth through empathetic connection.
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              At HeartSync, we believe that every individual and couple
              possesses the innate capacity for healing and growth. Our approach
              combines evidence-based techniques with a deeply compassionate
              environment, focusing on the systemic dynamics that shape our
              relationships.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 border-l-4 border-rose-500 bg-white rounded-2xl shadow-sm">
                <h4 className="font-bold text-gray-900 mb-1">Human-Centric</h4>
                <p className="text-sm text-gray-500">
                  Prioritizing the person over the diagnosis in every
                  interaction.
                </p>
              </div>
              <div className="p-4 border-l-4 border-indigo-500 bg-white rounded-2xl shadow-sm">
                <h4 className="font-bold text-gray-900 mb-1">Holistic View</h4>
                <p className="text-sm text-gray-500">
                  Considering emotional, social, and spiritual well-being.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 rounded-[3rem] h-[400px] flex items-center justify-center relative overflow-hidden border-8 border-white shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-100/50 to-indigo-100/50" />
            <Quote
              size={120}
              className="text-white/40 absolute top-10 left-10"
            />
            <div className="relative z-10 p-12 text-center">
              <p className="text-2xl font-serif italic text-gray-800 mb-6">
                "The greatest gift you can give another is the purity of your
                attention and the depth of your presence."
              </p>
              <span className="font-bold text-rose-600">
                — Dr. Ananya Kapoor
              </span>
            </div>
          </div>
        </section>

        {/* Professional Milestones & Recognition */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Recognition & Excellence
          </h2>
          
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Milestone Timeline */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                    <Award className="text-amber-600" size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Career Milestones</h3>
                </div>
                
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-200 to-rose-200" />
                  
                  <div className="space-y-8">
                    {MILESTONES.map((milestone, index) => (
                      <motion.div
                        key={milestone.year}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => setSelectedMilestone(index)}
                        className={`relative pl-16 pr-6 py-5 rounded-2xl cursor-pointer transition-all ${
                          selectedMilestone === index
                            ? 'bg-white border-2 border-amber-100 shadow-lg shadow-amber-50'
                            : 'bg-gray-50 hover:bg-white hover:border hover:border-gray-100'
                        }`}
                      >
                        <div className={`absolute left-0 w-12 h-12 rounded-xl flex items-center justify-center text-xl ${
                          selectedMilestone === index
                            ? 'bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-200'
                            : 'bg-white border border-gray-100'
                        }`}>
                          {milestone.icon}
                        </div>
                        
                        <div className="flex items-start justify-between mb-2">
                          <span className={`text-sm font-bold ${
                            selectedMilestone === index ? 'text-amber-600' : 'text-gray-400'
                          }`}>
                            {milestone.year}
                          </span>
                          {selectedMilestone === index && (
                            <ChevronRight className="text-amber-400" size={20} />
                          )}
                        </div>
                        
                        <h4 className="font-bold text-gray-900 mb-2">{milestone.title}</h4>
                        <p className="text-sm text-gray-600">{milestone.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Featured Achievement */}
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-3xl border border-amber-100">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mb-6">
                    <Award className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {MILESTONES[selectedMilestone].title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {MILESTONES[selectedMilestone].description}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-amber-600 font-bold">Featured Achievement</span>
                    <span className="text-gray-400">2024</span>
                  </div>
                </div>
                
                {/* Certifications */}
                <div className="bg-white p-6 rounded-3xl border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-6 text-lg">Certifications</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
                      <ShieldCheck className="text-emerald-500" size={24} />
                      <div>
                        <h4 className="font-bold text-gray-900">Licensed Clinical Therapist</h4>
                        <p className="text-sm text-gray-500">India Board #CT-84592</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
                      <Globe className="text-blue-500" size={24} />
                      <div>
                        <h4 className="font-bold text-gray-900">Gottman Method Certified</h4>
                        <p className="text-sm text-gray-500">Level 3 Therapist</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
                      <BookOpen className="text-purple-500" size={24} />
                      <div>
                        <h4 className="font-bold text-gray-900">EFT Specialist</h4>
                        <p className="text-sm text-gray-500">Emotionally Focused Therapy</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Therapy Approaches Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Therapeutic Approaches
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {THERAPY_APPROACHES.map((approach) => (
              <motion.div
                key={approach.name}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${approach.color} flex items-center justify-center mb-6`}>
                  <approach.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {approach.name}
                </h3>
                <div className="flex items-center justify-between mt-6">
                  <span className="text-2xl font-bold text-gray-900">
                    {approach.sessions}
                  </span>
                  <span className="text-sm text-gray-500 font-medium">sessions</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 pt-10 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">HeartSync Counseling</h3>
              <p className="text-gray-500">Empowering relationships since 2018</p>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-500 text-sm">
                © 2024 Dr. Ananya Kapoor. All rights reserved.
              </span>
              <button className="px-6 py-3 bg-rose-50 text-rose-600 rounded-2xl font-bold hover:bg-rose-100 transition-colors">
                Export Reports
              </button>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}