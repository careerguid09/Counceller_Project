import React, { useState, useMemo } from "react";
import { 
  Users, Heart, Calendar, MessageSquare, Video, TrendingUp, 
  Star, Clock, UserCheck, Baby, Handshake, Search, 
  MapPin, Filter, CheckCircle2, Mail, Phone, BookOpen, 
  Award, ShieldCheck, Globe, X, FileText, ChevronRight,
  Coffee, ChevronDown, Plus
} from "lucide-react";

// --- RELATIONSHIP COUNSELOR DATA ---
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
    email: "rahul.priya@example.com",
    phone: "+91 98765 43441",
    relationshipYears: "5",
    children: "1 (3 years)",
    occupation: "IT Manager & Teacher",
    sessionsCompleted: 8,
    conflictAreas: ["Communication", "Work-Life Balance"],
    progressScore: "75%",
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
    email: "anjali.mehta@example.com",
    phone: "+91 98765 43443",
    relationshipYears: "N/A",
    children: "None",
    occupation: "Marketing Executive",
    sessionsCompleted: 12,
    conflictAreas: ["Self-Esteem", "Dating Anxiety"],
    progressScore: "85%",
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
    email: "vikram.sneha@example.com",
    phone: "+91 98765 43445",
    relationshipYears: "12",
    children: "2 (8 & 5 years)",
    occupation: "Doctor & Architect",
    sessionsCompleted: 6,
    conflictAreas: ["Parenting Styles", "In-Law Issues"],
    progressScore: "65%",
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
    email: "neha.raj@example.com",
    phone: "+91 98765 43447",
    relationshipYears: "2",
    children: "None",
    occupation: "Entrepreneur & Lawyer",
    sessionsCompleted: 3,
    conflictAreas: ["Financial Planning", "Family Expectations"],
    progressScore: "80%",
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
    email: "siddharth.varma@example.com",
    phone: "+91 98765 43449",
    relationshipYears: "N/A",
    children: "None",
    occupation: "Software Developer",
    sessionsCompleted: 5,
    conflictAreas: ["Dating Skills", "Social Anxiety"],
    progressScore: "70%",
    relationshipType: "Single",
    nextSteps: [
      { title: "Social Skills Practice", date: "Feb 1, 2025", priority: "Medium" }
    ]
  },
];

// --- MILESTONES DATA ---
const MILESTONES = [
  { year: "2018", title: "Founded HeartSync Counseling Center", description: "Started private practice focusing on relationship therapy" },
  { year: "2020", title: "Published 'Connective Conversations'", description: "Bestselling book on couple communication techniques" },
  { year: "2021", title: "Awarded 'Counselor of the Year'", description: "Recognized by National Association of Therapists" },
  { year: "2023", title: "International Conference Keynote", description: "Featured speaker at Global Therapy Symposium" },
  { year: "2024", title: "Research Grant Awarded", description: "$250K grant for studying digital therapy efficacy" },
];

// --- THERAPY APPROACHES ---
const THERAPY_APPROACHES = [
  { name: "Emotionally Focused Therapy", sessions: 156, color: "bg-rose-100" },
  { name: "Cognitive Behavioral Therapy", sessions: 142, color: "bg-blue-100" },
  { name: "Gottman Method", sessions: 98, color: "bg-emerald-100" },
  { name: "Narrative Therapy", sessions: 76, color: "bg-purple-100" },
];

// --- Stat Card Component ---
const StatCard = ({ label, value, icon: Icon, change }) => (
  <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
    <div className="flex items-center justify-between mb-3">
      <div className="p-2 rounded-lg bg-gray-50">
        <Icon size={20} className="text-gray-600" />
      </div>
      <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">
        {change}
      </span>
    </div>
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-1">{value}</h3>
      <p className="text-sm text-gray-500 font-medium">{label}</p>
    </div>
  </div>
);

// --- Client Profile Modal ---
const ClientProfileModal = ({ client, onClose }) => {
  if (!client) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-white rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center">
              <div className="text-xl font-bold text-gray-700">
                {client.name.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{client.name}</h1>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm text-gray-500 flex items-center gap-1">
                  <MapPin size={14} />
                  {client.location}
                </span>
                <span className={`text-xs px-2 py-1 rounded ${client.status === 'upcoming' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}`}>
                  {client.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                </span>
              </div>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Info */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Relationship Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Relationship Type</p>
                  <p className="font-medium text-gray-900">{client.relationshipType}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Years Together</p>
                  <p className="font-medium text-gray-900">{client.relationshipYears} years</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Children</p>
                  <p className="font-medium text-gray-900">{client.children}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Occupation</p>
                  <p className="font-medium text-gray-900">{client.occupation}</p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-gray-400" />
                  <span className="text-gray-900">{client.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-gray-400" />
                  <span className="text-gray-900">{client.phone}</span>
                </div>
              </div>
            </div>

            {/* Progress */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Therapy Progress</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Sessions Completed</span>
                  <span className="font-bold text-gray-900">{client.sessionsCompleted}</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Progress Score</span>
                    <span className="font-bold text-emerald-600">{client.progressScore}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-emerald-500 h-2 rounded-full" 
                      style={{ width: client.progressScore }}
                    />
                  </div>
                </div>
                <div>
                  <p className="text-gray-600 mb-2">Focus Areas:</p>
                  <div className="flex flex-wrap gap-2">
                    {client.conflictAreas.map((area, index) => (
                      <span key={index} className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Next Session */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Next Session</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Date</span>
                  <span className="font-medium">{client.date}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Time</span>
                  <span className="font-medium">{client.time}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-medium">{client.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Type</span>
                  <span className="font-medium">{client.type}</span>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Next Steps</h3>
              <div className="space-y-3">
                {client.nextSteps.map((step, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-gray-900">{step.title}</span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        step.priority === 'High' ? 'bg-rose-100 text-rose-700' :
                        step.priority === 'Medium' ? 'bg-amber-100 text-amber-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {step.priority}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">{step.date}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <button className="w-full bg-rose-600 text-white py-3 rounded-lg font-medium hover:bg-rose-700">
                Schedule Next Session
              </button>
              <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50">
                Send Exercise
              </button>
              <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50">
                Add Notes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main App Component ---
export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedClient, setSelectedClient] = useState(null);
  const [selectedMilestone, setSelectedMilestone] = useState(0);

  // Filter clients
  const filteredClients = useMemo(() => {
    return CLIENTS_DATA.filter((client) => {
      const matchesSearch = client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          client.location.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === "all" || client.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [searchQuery, statusFilter]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Modal */}
      {selectedClient && <ClientProfileModal client={selectedClient} onClose={() => setSelectedClient(null)} />}

      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dr. Ananya Kapoor</h1>
              <p className="text-gray-500 mt-1">Relationship Counselor • HeartSync Center</p>
            </div>
            <div className="mt-4 sm:mt-0 flex items-center gap-3">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium">
                <Coffee size={18} className="inline mr-2" />
                Take Break
              </button>
              <button className="px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 font-medium">
                <Plus size={18} className="inline mr-2" />
                Add Session
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatCard
            label="Active Clients"
            value="24"
            icon={Users}
            change="+3 this month"
          />
          <StatCard
            label="Sessions Completed"
            value="842"
            icon={CheckCircle2}
            change="+24 this week"
          />
          <StatCard
            label="Client Satisfaction"
            value="4.9"
            icon={Star}
            change="+0.2"
          />
          <StatCard
            label="Engagement Rate"
            value="92%"
            icon={TrendingUp}
            change="+5%"
          />
        </div>

        {/* Client Management Section */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Client Management</h2>
                <p className="text-gray-500 mt-1">Manage your therapy sessions and client profiles</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search clients..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                
                <div className="flex gap-2">
                  <button
                    onClick={() => setStatusFilter("all")}
                    className={`px-4 py-2 rounded-lg font-medium ${statusFilter === "all" ? "bg-rose-600 text-white" : "border border-gray-300 text-gray-700 hover:bg-gray-50"}`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setStatusFilter("upcoming")}
                    className={`px-4 py-2 rounded-lg font-medium ${statusFilter === "upcoming" ? "bg-amber-100 text-amber-700" : "border border-gray-300 text-gray-700 hover:bg-gray-50"}`}
                  >
                    Upcoming
                  </button>
                  <button
                    onClick={() => setStatusFilter("completed")}
                    className={`px-4 py-2 rounded-lg font-medium ${statusFilter === "completed" ? "bg-emerald-100 text-emerald-700" : "border border-gray-300 text-gray-700 hover:bg-gray-50"}`}
                  >
                    Completed
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Clients Grid */}
          <div className="p-6">
            {filteredClients.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredClients.map((client) => (
                  <div 
                    key={client.id} 
                    className="border border-gray-200 rounded-xl hover:border-rose-300 hover:shadow-md transition-all cursor-pointer bg-white"
                    onClick={() => setSelectedClient(client)}
                  >
                    <div className="p-5">
                      {/* Client Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                            <div className="font-medium text-gray-700">
                              {client.name.split(' ').map(n => n[0]).join('')}
                            </div>
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900">{client.name}</h3>
                            <p className="text-sm text-gray-500 flex items-center gap-1">
                              <MapPin size={12} />
                              {client.location}
                            </p>
                          </div>
                        </div>
                        <span className={`text-xs font-medium px-2 py-1 rounded ${client.status === 'upcoming' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}`}>
                          {client.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                        </span>
                      </div>

                      {/* Session Details */}
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">Session Type</span>
                          <span className="font-medium">{client.type}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">Date & Time</span>
                          <span className="font-medium">{client.date} • {client.time}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">Duration</span>
                          <span className="font-medium">{client.duration}</span>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">Progress</span>
                          <span className="font-medium text-emerald-600">{client.progressScore}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div 
                            className="bg-emerald-500 h-1.5 rounded-full" 
                            style={{ width: client.progressScore }}
                          />
                        </div>
                      </div>

                      {/* View Button */}
                      <button className="w-full mt-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-sm">
                        View Full Profile
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search size={24} className="text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No clients found</h3>
                <p className="text-gray-500">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </div>

        {/* Practice Info Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Milestones */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-amber-50">
                <Award size={20} className="text-amber-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Career Milestones</h2>
            </div>
            
            <div className="space-y-4">
              {MILESTONES.map((milestone, index) => (
                <div 
                  key={milestone.year} 
                  className={`p-4 rounded-lg border cursor-pointer transition-all ${selectedMilestone === index ? 'border-amber-200 bg-amber-50' : 'border-gray-200 hover:border-gray-300'}`}
                  onClick={() => setSelectedMilestone(index)}
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-sm font-medium text-gray-500">{milestone.year}</span>
                    {selectedMilestone === index && <ChevronRight size={16} className="text-amber-500" />}
                  </div>
                  <h4 className="font-medium text-gray-900 mb-1">{milestone.title}</h4>
                  <p className="text-sm text-gray-600">{milestone.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Therapy Approaches */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-rose-50">
                <Heart size={20} className="text-rose-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Therapeutic Approaches</h2>
            </div>
            
            <div className="space-y-4">
              {THERAPY_APPROACHES.map((approach) => (
                <div key={approach.name} className="p-4 border border-gray-200 rounded-lg hover:border-gray-300">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${approach.color}`}>
                        <Heart size={18} className={approach.color.includes('rose') ? 'text-rose-600' : 
                                                   approach.color.includes('blue') ? 'text-blue-600' :
                                                   approach.color.includes('emerald') ? 'text-emerald-600' :
                                                   'text-purple-600'} />
                      </div>
                      <span className="font-medium text-gray-900">{approach.name}</span>
                    </div>
                    <span className="text-lg font-bold text-gray-900">{approach.sessions}</span>
                  </div>
                  <div className="text-sm text-gray-500">Sessions conducted</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-50 text-rose-700 rounded-full text-sm font-medium mb-6">
              Clinical Philosophy
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Empowering growth through empathetic connection
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At HeartSync, we believe that every individual and couple possesses the innate capacity 
              for healing and growth. Our approach combines evidence-based techniques with a deeply 
              compassionate environment, focusing on the systemic dynamics that shape our relationships.
            </p>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Certifications & Qualifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <ShieldCheck size={20} className="text-emerald-600" />
                <h3 className="font-medium text-gray-900">Licensed Clinical Therapist</h3>
              </div>
              <p className="text-sm text-gray-500">India Board #CT-84592</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <Globe size={20} className="text-blue-600" />
                <h3 className="font-medium text-gray-900">Gottman Method Certified</h3>
              </div>
              <p className="text-sm text-gray-500">Level 3 Therapist</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <BookOpen size={20} className="text-purple-600" />
                <h3 className="font-medium text-gray-900">EFT Specialist</h3>
              </div>
              <p className="text-sm text-gray-500">Emotionally Focused Therapy</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="font-bold text-gray-900">HeartSync Counseling Center</h3>
              <p className="text-gray-500 text-sm mt-1">Empowering relationships since 2018</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-500 text-sm">
                © 2024 Dr. Ananya Kapoor. All rights reserved.
              </span>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 text-sm font-medium">
                Export Reports
              </button>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}