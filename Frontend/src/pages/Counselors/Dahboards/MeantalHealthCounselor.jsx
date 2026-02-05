import React, { useState, useMemo } from "react";
import { 
  Users, Heart, Calendar, MessageSquare, Video, TrendingUp, 
  Star, Clock, Brain, Activity, ShieldAlert, FileText, Search, 
  MapPin, Filter, CheckCircle2, AlertCircle, ChevronRight,
  MoreVertical, Phone, Mail, BookOpen, Award, Globe, ShieldCheck,
  Quote, Lightbulb, Sparkles, Coffee, Laptop, LineChart, Target,
  Stethoscope, Zap, HandHeart, Waves, X
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- MENTAL HEALTH COUNSELOR DUMMY DATA ---
const CLIENT_DATA = [
  { 
    id: 1, 
    name: "Arjun Singh", 
    location: "Mumbai, MH", 
    status: "upcoming", 
    type: "CBT Therapy", 
    time: "10:00 AM", 
    date: "Today", 
    duration: "60 min", 
    color: "from-blue-400 to-indigo-500", 
    condition: "Anxiety Disorder", 
    severity: "Moderate",
    email: "arjun.singh@example.com",
    phone: "+91 98765 43331",
    emergencyContact: "+91 98765 43332",
    age: "32",
    occupation: "Software Engineer",
    sessionsCompleted: 8,
    progressScore: "75%",
    medications: ["Escitalopram 10mg", "Propranolol PRN"],
    therapistNotes: "Responding well to CBT. Showing improvement in panic response. Continue exposure therapy.",
    preferredContact: "Phone & Secure Portal",
    crisisPlan: "Contact emergency contact, use grounding techniques",
    upcomingActions: [
      { title: "Medication Review", date: "Dec 22, 2024", priority: "High" },
      { title: "Family Session", date: "Dec 28, 2024", priority: "Medium" }
    ]
  },
  { 
    id: 2, 
    name: "Priya Patel", 
    location: "Ahmedabad, GJ", 
    status: "completed", 
    type: "DBT Session", 
    time: "02:30 PM", 
    date: "Yesterday", 
    duration: "45 min", 
    color: "from-purple-400 to-pink-500", 
    condition: "Depression", 
    severity: "High",
    email: "priya.patel@example.com",
    phone: "+91 98765 43333",
    emergencyContact: "+91 98765 43334",
    age: "28",
    occupation: "Marketing Manager",
    sessionsCompleted: 12,
    progressScore: "65%",
    medications: ["Sertraline 50mg", "Trazodone 50mg"],
    therapistNotes: "Severe depression with suicidal ideation. Improved after medication adjustment. Needs continued monitoring.",
    preferredContact: "Secure Portal Only",
    crisisPlan: "Immediate hospitalization protocol, contact family",
    upcomingActions: [
      { title: "Safety Plan Update", date: "Jan 5, 2025", priority: "Urgent" }
    ]
  },
  { 
    id: 3, 
    name: "Rahul Verma", 
    location: "Delhi, DL", 
    status: "upcoming", 
    type: "Trauma Therapy", 
    time: "04:00 PM", 
    date: "Today", 
    duration: "90 min", 
    color: "from-indigo-400 to-purple-600", 
    condition: "PTSD", 
    severity: "Moderate",
    email: "rahul.verma@example.com",
    phone: "+91 98765 43335",
    emergencyContact: "+91 98765 43336",
    age: "35",
    occupation: "Journalist",
    sessionsCompleted: 6,
    progressScore: "80%",
    medications: ["Prazosin 2mg", "Propranolol 20mg"],
    therapistNotes: "Responding well to EMDR therapy. Flashbacks reduced by 40%. Continue trauma processing.",
    preferredContact: "Video Sessions",
    crisisPlan: "Use coping cards, contact therapist",
    upcomingActions: [
      { title: "EMDR Session", date: "Dec 23, 2024", priority: "High" }
    ]
  },
  { 
    id: 4, 
    name: "Sonia Kapoor", 
    location: "Pune, MH", 
    status: "upcoming", 
    type: "Wellness Check", 
    time: "11:00 AM", 
    date: "Tomorrow", 
    duration: "30 min", 
    color: "from-cyan-400 to-blue-500", 
    condition: "Bipolar Support", 
    severity: "Low",
    email: "sonia.kapoor@example.com",
    phone: "+91 98765 43337",
    emergencyContact: "+91 98765 43338",
    age: "42",
    occupation: "Teacher",
    sessionsCompleted: 4,
    progressScore: "90%",
    medications: ["Lithium 300mg", "Quetiapine 25mg"],
    therapistNotes: "Stable on current medication. Monitoring for manic episodes. Good medication adherence.",
    preferredContact: "Email & WhatsApp",
    crisisPlan: "Contact psychiatrist, mood charting",
    upcomingActions: [
      { title: "Medication Check", date: "Jan 10, 2025", priority: "Medium" }
    ]
  },
  { 
    id: 5, 
    name: "Meena Sharma", 
    location: "Hyderabad, TS", 
    status: "completed", 
    type: "Mindfulness", 
    time: "09:00 AM", 
    date: "2 days ago", 
    duration: "60 min", 
    color: "from-emerald-400 to-teal-500", 
    condition: "Work Stress", 
    severity: "Low",
    email: "meena.sharma@example.com",
    phone: "+91 98765 43339",
    emergencyContact: "+91 98765 43340",
    age: "29",
    occupation: "Project Manager",
    sessionsCompleted: 3,
    progressScore: "85%",
    medications: ["None"],
    therapistNotes: "Learning stress management techniques. Good progress with mindfulness practice.",
    preferredContact: "Phone",
    crisisPlan: "Breathing exercises, contact HR",
    upcomingActions: [
      { title: "Follow-up Session", date: "Jan 15, 2025", priority: "Low" }
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
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-indigo-50 to-purple-50 shadow-lg flex items-center justify-center">
                  <img
                    src={`https://api.dicebear.com/7.x/initials/svg?seed=${client.name}&backgroundColor=4F46E5`}
                    className="rounded-2xl w-20 h-20"
                    alt={client.name}
                  />
                </div>
                <div className={`absolute -bottom-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center ${
                  client.status === 'upcoming' 
                    ? 'bg-indigo-500' 
                    : 'bg-emerald-500'
                }`}>
                  {client.status === 'upcoming' ? (
                    <Calendar size={16} className="text-white" />
                  ) : (
                    <CheckCircle2 size={16} className="text-white" />
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
                    client.severity === 'Critical' 
                      ? 'bg-red-100 text-red-700 border border-red-200' 
                      : client.severity === 'High'
                      ? 'bg-orange-100 text-orange-700 border border-orange-200'
                      : client.severity === 'Moderate'
                      ? 'bg-amber-100 text-amber-700 border border-amber-200'
                      : 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                  }`}>
                    {client.severity} Severity
                  </span>
                  <span className="px-4 py-1.5 rounded-full text-sm font-bold bg-indigo-100 text-indigo-700">
                    {client.condition}
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
              
              {/* Clinical Details Card */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-6 text-xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
                    <Stethoscope className="text-indigo-600" size={20} />
                  </div>
                  <span>Clinical Profile</span>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-5 rounded-2xl border border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center">
                        <Users className="text-indigo-500" size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Age & Occupation</p>
                        <p className="text-lg font-bold text-gray-900">{client.age} • {client.occupation}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-5 rounded-2xl border border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center">
                        <Brain className="text-purple-500" size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Condition</p>
                        <p className="text-lg font-bold text-gray-900">{client.condition}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-5 rounded-2xl border border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                        <Calendar className="text-blue-500" size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Next Session</p>
                        <p className="text-lg font-bold text-gray-900">{client.date} • {client.time}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-5 rounded-2xl border border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center">
                        <Activity className="text-teal-500" size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Therapy Type</p>
                        <p className="text-lg font-bold text-gray-900">{client.type}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact & Medical Information */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-6 text-xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                    <ShieldAlert className="text-blue-600" size={20} />
                  </div>
                  <span>Contact & Medical Details</span>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-white p-5 rounded-2xl border border-gray-100">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center">
                          <Mail className="text-indigo-500" size={20} />
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
                        <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
                          <AlertCircle className="text-red-500" size={20} />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Emergency Contact</p>
                          <p className="text-base font-bold text-gray-900">
                            {client.emergencyContact}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-5 rounded-2xl border border-gray-100">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
                          <Phone className="text-green-500" size={20} />
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
              
              {/* Treatment & Progress */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-6 text-xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                    <FileText className="text-purple-600" size={20} />
                  </div>
                  <span>Treatment & Progress</span>
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
                      <p className="text-gray-600 font-medium mb-2">Current Medications:</p>
                      <div className="flex flex-wrap gap-2">
                        {client.medications?.map((med, index) => (
                          <span key={index} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                            {med}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-indigo-50 rounded-xl">
                      <p className="text-sm text-gray-700">
                        <span className="font-bold">Therapist Notes:</span> {client.therapistNotes}
                      </p>
                    </div>
                    <div className="mt-4 p-4 bg-red-50 rounded-xl">
                      <p className="text-sm text-gray-700">
                        <span className="font-bold">Crisis Plan:</span> {client.crisisPlan}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Sidebar */}
            <div className="space-y-8">
              
              {/* Progress Stats */}
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-3xl border border-indigo-100 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-6 text-lg">Clinical Progress</h3>
                
                <div className="space-y-5">
                  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-white/50">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 text-sm font-medium">Treatment Progress</span>
                      <span className="text-2xl font-bold text-indigo-600">
                        {client.progressScore}
                      </span>
                    </div>
                    <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-indigo-500 h-2 rounded-full" 
                        style={{ width: client.progressScore }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-white/50">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 text-sm font-medium">Risk Assessment</span>
                      <span className={`text-lg font-bold ${
                        client.severity === 'Critical' ? 'text-red-600' :
                        client.severity === 'High' ? 'text-orange-600' :
                        client.severity === 'Moderate' ? 'text-amber-600' : 'text-emerald-600'
                      }`}>
                        {client.severity}
                      </span>
                    </div>
                    <div className="mt-2 flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((level) => (
                        <div 
                          key={level} 
                          className={`h-2 rounded-full ${
                            (client.severity === 'Critical' && level <= 5) ||
                            (client.severity === 'High' && level <= 4) ||
                            (client.severity === 'Moderate' && level <= 3) ||
                            (client.severity === 'Low' && level <= 2)
                              ? 'bg-red-500' : 'bg-gray-300'
                          }`}
                          style={{ width: '18%' }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-white/50">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 text-sm font-medium">Patient Satisfaction</span>
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
                <h3 className="font-bold text-gray-800 mb-6 text-lg">Clinical Actions</h3>
                
                <div className="space-y-3">
                  <button className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-100 flex items-center justify-center gap-2">
                    <Calendar size={18} />
                    Schedule Session
                  </button>
                  <button className="w-full bg-white border border-gray-200 text-gray-800 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                    <FileText size={18} />
                    Update Chart Notes
                  </button>
                  <button className="w-full bg-white border border-gray-200 text-gray-800 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                    <ShieldAlert size={18} />
                    Review Crisis Plan
                  </button>
                  <button className="w-full bg-white border border-gray-200 text-gray-800 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                    <Phone size={18} />
                    Emergency Contact
                  </button>
                </div>
              </div>
              
              {/* Upcoming Clinical Actions */}
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
                            ? 'bg-orange-100 text-orange-700'
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

const StatCard = ({ label, value, icon: Icon, color, change, sub }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 flex flex-col justify-between"
  >
    <div className="flex items-center justify-between mb-4">
      <div className={`p-3 rounded-xl ${color}`}>
        <Icon size={24} />
      </div>
      <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">
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

export default function App() {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedClient, setSelectedClient] = useState(null); // NEW STATE

  // Filtering Logic
  const filteredClients = useMemo(() => {
    return CLIENT_DATA.filter((client) => {
      const matchesSearch = 
        client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        client.condition.toLowerCase().includes(searchQuery.toLowerCase()) ||
        client.location.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesStatus = 
        statusFilter === "all" || client.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [searchQuery, statusFilter]);

  return (
    <div className="min-h-screen bg-[#F8FAFF] text-slate-900 pb-20">
    
      <main className="pt-24 max-w-7xl mx-auto px-4">
        {/* Hero Welcome */}
        <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Supportive Care, Dr. Sharma</h1>
            <p className="text-gray-500 mt-2 flex items-center gap-2 font-medium">
              <Waves size={18} className="text-indigo-500" />
              You have <span className="text-indigo-600 font-bold">6 therapy sessions</span> confirmed for today.
            </p>
          </div>
         
        </header>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <StatCard label="Active Cases" value="28" icon={Users} color="bg-indigo-50 text-indigo-600" change="+4" sub="Moderate to High Severity" />
          <StatCard label="Recovery Rate" value="89%" icon={CheckCircle2} color="bg-emerald-50 text-emerald-600" change="+2%" sub="Successful Interventions" />
          <StatCard label="Crisis Interv." value="3" icon={ShieldAlert} color="bg-red-50 text-red-600" change="-20%" sub="Active monitoring" />
          <StatCard label="Patient Rating" value="4.9" icon={Star} color="bg-amber-50 text-amber-600" change="+0.1" sub="Based on 140+ reviews" />
        </div>

        {/* Client Management Pipeline */}
        <section className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
            <div className="flex-1 max-w-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Patient Care Pipeline</h2>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                  type="text"
                  placeholder="Search by name, condition, or city..."
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 font-medium transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {[
                { id: "all", label: "All Cases", icon: Filter },
                { id: "upcoming", label: "Active Sessions", icon: Calendar },
                { id: "completed", label: "Stabilized", icon: CheckCircle2 }
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setStatusFilter(btn.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-bold transition-all border ${
                    statusFilter === btn.id 
                    ? "bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-100" 
                    : "bg-white border-gray-100 text-gray-500 hover:border-indigo-200"
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
                    className="group bg-gray-50/50 hover:bg-white p-5 rounded-[2rem] border border-transparent hover:border-gray-100 hover:shadow-xl hover:shadow-indigo-50 transition-all cursor-pointer relative overflow-hidden"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center border border-gray-100 overflow-hidden">
                           <img 
                            src={`https://api.dicebear.com/7.x/initials/svg?seed=${client.name}&backgroundColor=4F46E5`} 
                            className="rounded-xl w-full h-full object-cover"
                            alt={client.name} 
                           />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 leading-tight group-hover:text-indigo-600 transition-colors">{client.name}</h4>
                          <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest flex items-center gap-1 mt-1">
                            <MapPin size={10} className="text-indigo-400" /> {client.location}
                          </p>
                        </div>
                      </div>
                      <button className="text-gray-300 hover:text-gray-900"><MoreVertical size={20} /></button>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <span className={`text-[10px] font-extrabold px-2 py-1 rounded-md uppercase ${
                        client.severity === 'Critical' ? 'bg-red-100 text-red-700 animate-pulse' : 
                        client.severity === 'High' ? 'bg-orange-100 text-orange-700' : 'bg-emerald-100 text-emerald-700'
                      }`}>
                        {client.severity} Severity
                      </span>
                      <span className="text-[10px] font-extrabold px-2 py-1 rounded-md uppercase bg-indigo-50 text-indigo-600">
                        {client.condition}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mb-5">
                      <div className="bg-white p-3 rounded-2xl border border-gray-50 flex items-center gap-3">
                        <Calendar size={14} className="text-indigo-400" />
                        <div>
                          <p className="text-[10px] text-gray-400 font-bold uppercase leading-none">Last Meet</p>
                          <p className="text-sm font-bold text-gray-700">{client.date}</p>
                        </div>
                      </div>
                      <div className="bg-white p-3 rounded-2xl border border-gray-50 flex items-center gap-3">
                        <Clock size={14} className="text-indigo-400" />
                        <div>
                          <p className="text-[10px] text-gray-400 font-bold uppercase leading-none">Session</p>
                          <p className="text-sm font-bold text-gray-700">{client.time}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => setSelectedClient(client)}
                        className="flex-1 bg-gray-900 text-white py-3 rounded-xl font-bold text-xs hover:bg-indigo-600 transition-colors"
                      >
                        View Full Profile
                      </button>
                      <button className="p-3 bg-white border border-gray-100 rounded-xl text-gray-400 hover:text-indigo-500 hover:border-indigo-100 transition-all">
                        <Phone size={16} />
                      </button>
                      <button className="p-3 bg-white border border-gray-100 rounded-xl text-gray-400 hover:text-indigo-500 hover:border-indigo-100 transition-all">
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
                  <h3 className="text-xl font-bold text-gray-800">No client records found</h3>
                  <p className="text-gray-500 font-medium">Try searching by clinical condition or name.</p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* --- EXPANDED PAGE CONTENT (NON-INTERACTIVE) --- */}
        
        {/* Clinical Philosophy */}
        <section className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-sm font-bold uppercase tracking-wider">
              <Sparkles size={16} />
              Clinical Philosophy
            </div>
            <h2 className="text-4xl font-black text-gray-900 leading-tight">Evidence-based care for a resilient mindset.</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Our clinical approach integrates Cognitive Behavioral Therapy (CBT) with trauma-informed mindfulness practices. We don't just manage symptoms; we partner with clients to navigate complex emotional landscapes, fostering self-regulation and sustainable mental well-being.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 border-l-4 border-indigo-500 bg-white">
                <h4 className="font-bold text-gray-900 mb-1">Empathetic Discovery</h4>
                <p className="text-sm text-gray-500">Uncovering root causes through active listening and safe space.</p>
              </div>
              <div className="p-4 border-l-4 border-emerald-500 bg-white">
                <h4 className="font-bold text-gray-900 mb-1">Scientific Rigor</h4>
                <p className="text-sm text-gray-500">Utilizing validated psychological assessments and protocols.</p>
              </div>
            </div>
          </div>
          <div className="bg-indigo-900 rounded-[3rem] h-[400px] flex items-center justify-center relative overflow-hidden border-8 border-white shadow-2xl">
             <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 to-violet-900/40" />
             <Quote size={120} className="text-white/10 absolute top-10 left-10" />
             <div className="relative z-10 p-12 text-center text-white">
               <p className="text-2xl font-serif italic mb-6">"Mental health is not a destination, but a process. It's about how you drive, not where you're going."</p>
               <span className="font-bold text-indigo-400">— Dr. Ananya Sharma</span>
             </div>
          </div>
        </section>

        {/* Credentials & Recognition */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Professional Recognition & Accreditations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-indigo-50 text-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Board Certified</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Certified by the Indian Association of Clinical Psychologists (IACP) for advanced therapeutic intervention.</p>
            </div>
            <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-violet-50 text-violet-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Stethoscope size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Trauma Specialist</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Recognized for excellence in PTSD rehabilitation and somatic experiencing by the Global Trauma Institute.</p>
            </div>
            <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Tele-Health Pioneer</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Leading advocate for secure digital counseling standards in South Asian urban populations.</p>
            </div>
          </div>
        </section>

        {/* Mental Health Impact Statistics */}
        <section className="bg-indigo-600 rounded-[3rem] p-12 text-white mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-20 opacity-10">
            <LineChart size={300} strokeWidth={1} />
          </div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-4">Driving Societal Resilience</h2>
              <p className="text-indigo-100 mb-8 max-w-md">Our practice extends beyond the clinic. We partner with NGOs and corporations to provide mental health literacy and crisis response training.</p>
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-white text-indigo-600 rounded-xl font-bold text-sm hover:bg-indigo-50 transition-all">Impact Report 2024</button>
                <button className="px-6 py-3 bg-indigo-700 rounded-xl font-bold text-sm hover:bg-indigo-800 transition-all">Outreach Partners</button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 lg:col-span-2">
              <div className="text-center p-6 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/10">
                <p className="text-4xl font-black text-white mb-1">15k+</p>
                <p className="text-xs font-bold uppercase tracking-widest text-indigo-200">Sessions Conducted</p>
              </div>
              <div className="text-center p-6 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/10">
                <p className="text-4xl font-black text-white mb-1">94%</p>
                <p className="text-xs font-bold uppercase tracking-widest text-indigo-200">Stability Rate</p>
              </div>
              <div className="text-center p-6 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/10">
                <p className="text-4xl font-black text-white mb-1">2k+</p>
                <p className="text-xs font-bold uppercase tracking-widest text-indigo-200">Crisis Interventions</p>
              </div>
              <div className="text-center p-6 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/10">
                <p className="text-4xl font-black text-white mb-1">24/7</p>
                <p className="text-xs font-bold uppercase tracking-widest text-indigo-200">Emergency Support</p>
              </div>
            </div>
          </div>
        </section>

        {/* Wellness Initiatives & Seminars */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center">
              <Activity size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Community Wellness Seminars</h2>
              <p className="text-gray-500 text-sm font-medium">Spreading awareness on mental hygiene and emotional first-aid.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-1 rounded-[2.5rem] border border-gray-100 overflow-hidden group shadow-sm">
              <div className="bg-indigo-50 h-48 rounded-[2rem] m-2 flex items-center justify-center text-indigo-200 group-hover:text-indigo-300 transition-colors">
                <Zap size={80} strokeWidth={1} />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full">Interactive Series</span>
                  <span className="text-sm font-bold text-gray-400">Feb 18, 2024</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Mastering Anxiety Response</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">A practical workshop on grounding techniques, respiratory biofeedback, and cognitive reframing during panic episodes.</p>
                <button className="w-full py-3 bg-gray-50 rounded-xl font-bold text-sm text-gray-700 hover:bg-indigo-50 transition-colors">Register Session</button>
              </div>
            </div>
            <div className="bg-white p-1 rounded-[2.5rem] border border-gray-100 overflow-hidden group shadow-sm">
              <div className="bg-violet-50 h-48 rounded-[2rem] m-2 flex items-center justify-center text-violet-200 group-hover:text-violet-300 transition-colors">
                <HandHeart size={80} strokeWidth={1} />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold px-3 py-1 bg-violet-100 text-violet-600 rounded-full">Webinar</span>
                  <span className="text-sm font-bold text-gray-400">March 02, 2024</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">The Power of Compassion</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">Exploring self-compassion as a clinical tool for recovering from burnout and chronic depression in high-pressure environments.</p>
                <button className="w-full py-3 bg-gray-50 rounded-xl font-bold text-sm text-gray-700 hover:bg-indigo-50 transition-colors">Learn More</button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Resources & Daily Insight */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-slate-900 rounded-[2rem] p-8 text-white md:col-span-2 relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">Counselor Toolkit</h3>
              <p className="text-slate-400 mb-6 max-w-md font-medium">Access our HIPAA-compliant database of clinical templates, medication guides, and patient handouts.</p>
              <div className="flex flex-wrap gap-3">
                {["DSM-V Cheat Sheet", "CBT Worksheets", "Crisis Intervention Rubric", "Medication Trackers"].map(item => (
                  <button key={item} className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl text-[10px] font-bold transition-all uppercase tracking-widest">
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 right-0 opacity-10">
              <ShieldCheck size={200} />
            </div>
          </div>
          
          <div className="bg-indigo-600 rounded-[2rem] p-8 text-white flex flex-col justify-between shadow-xl shadow-indigo-100">
            <div>
              <Lightbulb className="mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-2">Clinical Insight</h3>
              <p className="text-indigo-100 font-medium leading-relaxed">Compassion fatigue is real. Remember that your effectiveness as a counselor depends on your own mental hygiene.</p>
            </div>
            <button className="mt-6 w-full py-3 bg-white text-indigo-600 rounded-2xl font-bold text-xs hover:bg-indigo-50 transition-all flex items-center justify-center gap-2">
              <Coffee size={16} /> Self-Care Protocol
            </button>
          </div>
        </section>

        {/* Security / Compliance */}
        <footer className="pt-10 border-t border-gray-100 text-center">
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-gray-400 font-bold text-[10px] uppercase tracking-widest">
              <ShieldCheck size={14} className="text-indigo-500" /> HIPAA Compliant
            </div>
            <div className="flex items-center gap-2 text-gray-400 font-bold text-[10px] uppercase tracking-widest">
              <ShieldCheck size={14} className="text-blue-500" /> AES-256 Encrypted
            </div>
            <div className="flex items-center gap-2 text-gray-400 font-bold text-[10px] uppercase tracking-widest">
              <ShieldCheck size={14} className="text-red-500" /> Professional Certification
            </div>
          </div>
          <p className="text-gray-400 text-xs font-bold uppercase tracking-tighter">© 2024 MindCare Pro Systems. All rights reserved. Healing Minds, Restoring Hope.</p>
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