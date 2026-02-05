import React, { useState, useMemo } from "react";
import { 
  Users, Calendar, MessageSquare, TrendingUp, Star, Clock, 
  Brain, Activity, ShieldAlert, FileText, Search, MapPin, Filter, 
  CheckCircle2, Phone, Mail, BookOpen, Award, ShieldCheck, X, 
  Coffee, MoreVertical, Stethoscope
} from "lucide-react";

// --- MENTAL HEALTH COUNSELOR DATA ---
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
    therapistNotes: "Responding well to CBT. Showing improvement in panic response.",
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
    therapistNotes: "Severe depression with suicidal ideation. Needs continued monitoring.",
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
    therapistNotes: "Responding well to EMDR therapy. Flashbacks reduced by 40%.",
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
    therapistNotes: "Stable on current medication. Monitoring for manic episodes.",
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
    therapistNotes: "Learning stress management techniques. Good progress with mindfulness.",
    preferredContact: "Phone",
    crisisPlan: "Breathing exercises, contact HR",
    upcomingActions: [
      { title: "Follow-up Session", date: "Jan 15, 2025", priority: "Low" }
    ]
  },
];

// Stat Card Component
const StatCard = ({ label, value, icon: Icon, change, sub }) => (
  <div className="bg-white rounded-lg p-5 border border-gray-200 shadow-sm">
    <div className="flex items-center justify-between mb-3">
      <div className="p-2 rounded-lg bg-gray-50">
        <Icon size={20} className="text-gray-600" />
      </div>
      <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded">
        {change}
      </span>
    </div>
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-1">{value}</h3>
      <p className="text-sm text-gray-500 font-medium">{label}</p>
      <p className="text-xs text-gray-400 mt-1 font-medium">{sub}</p>
    </div>
  </div>
);

// Client Profile Modal Component
const ClientProfileModal = ({ client, onClose }) => {
  if (!client) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-lg bg-indigo-50 flex items-center justify-center">
              <div className="text-xl font-bold text-indigo-700">
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
                <span className={`text-xs px-2 py-1 rounded ${
                  client.severity === 'Critical' ? 'bg-red-100 text-red-700' :
                  client.severity === 'High' ? 'bg-orange-100 text-orange-700' :
                  client.severity === 'Moderate' ? 'bg-amber-100 text-amber-700' :
                  'bg-emerald-100 text-emerald-700'
                }`}>
                  {client.severity}
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
            {/* Clinical Info */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Clinical Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Condition</p>
                  <p className="font-medium text-gray-900">{client.condition}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Age & Occupation</p>
                  <p className="font-medium text-gray-900">{client.age} • {client.occupation}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Sessions Completed</p>
                  <p className="font-medium text-gray-900">{client.sessionsCompleted}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Progress Score</p>
                  <p className="font-medium text-emerald-600">{client.progressScore}</p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact & Emergency</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-gray-400" />
                  <span className="text-gray-900">{client.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-gray-400" />
                  <span className="text-gray-900">{client.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldAlert size={18} className="text-red-500" />
                  <span className="text-gray-900">Emergency: {client.emergencyContact}</span>
                </div>
              </div>
            </div>

            {/* Treatment */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Treatment Details</h3>
              <div className="space-y-4">
                <div className="space-y-1">
                  <p className="text-gray-600">Current Medications</p>
                  <div className="flex flex-wrap gap-2">
                    {client.medications.map((med, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                        {med}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-4 bg-white rounded-lg border border-gray-200">
                  <p className="text-gray-700">
                    <span className="font-bold">Therapist Notes:</span> {client.therapistNotes}
                  </p>
                </div>
                <div className="p-4 bg-red-50 rounded-lg border border-red-100">
                  <p className="text-gray-700">
                    <span className="font-bold">Crisis Plan:</span> {client.crisisPlan}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Session Details */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Session Details</h3>
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
                  <span className="text-gray-600">Therapy Type</span>
                  <span className="font-medium">{client.type}</span>
                </div>
              </div>
            </div>

            {/* Progress */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Progress Metrics</h3>
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Treatment Progress</span>
                    <span className="font-medium text-indigo-600">{client.progressScore}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-indigo-500 h-2 rounded-full" 
                      style={{ width: client.progressScore }}
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="text-gray-600">Preferred Contact</span>
                  <p className="font-medium">{client.preferredContact}</p>
                </div>
              </div>
            </div>

            {/* Upcoming Actions */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Actions</h3>
              <div className="space-y-3">
                {client.upcomingActions.map((action, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-gray-900">{action.title}</span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        action.priority === 'Urgent' ? 'bg-red-100 text-red-700' :
                        action.priority === 'High' ? 'bg-amber-100 text-amber-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {action.priority}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">{action.date}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-2">
              <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700">
                Schedule Session
              </button>
              <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50">
                Update Chart Notes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Component
export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedClient, setSelectedClient] = useState(null);

  // Filter clients
  const filteredClients = useMemo(() => {
    return CLIENT_DATA.filter((client) => {
      const matchesSearch = client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          client.condition.toLowerCase().includes(searchQuery.toLowerCase()) ||
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
              <h1 className="text-2xl font-bold text-gray-900">Dr. Ananya Sharma</h1>
              <p className="text-gray-500 mt-1">Mental Health Counselor • MindCare Pro</p>
            </div>
            <div className="mt-4 sm:mt-0 flex items-center gap-3">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium">
                <Coffee size={18} className="inline mr-2" />
                Take Break
              </button>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium">
                <Calendar size={18} className="inline mr-2" />
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
            label="Active Cases"
            value="28"
            icon={Users}
            change="+4"
            sub="Moderate to High Severity"
          />
          <StatCard
            label="Recovery Rate"
            value="89%"
            icon={CheckCircle2}
            change="+2%"
            sub="Successful Interventions"
          />
          <StatCard
            label="Crisis Interventions"
            value="3"
            icon={ShieldAlert}
            change="-20%"
            sub="Active monitoring"
          />
          <StatCard
            label="Patient Rating"
            value="4.9"
            icon={Star}
            change="+0.1"
            sub="Based on 140+ reviews"
          />
        </div>

        {/* Client Management */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm mb-8">
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Patient Management</h2>
                <p className="text-gray-500 mt-1">Manage therapy sessions and client progress</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search clients..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                
                <div className="flex gap-2">
                  <button
                    onClick={() => setStatusFilter("all")}
                    className={`px-4 py-2 rounded-lg font-medium ${
                      statusFilter === "all" ? "bg-indigo-600 text-white" : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setStatusFilter("upcoming")}
                    className={`px-4 py-2 rounded-lg font-medium ${
                      statusFilter === "upcoming" ? "bg-indigo-100 text-indigo-700" : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    Upcoming
                  </button>
                  <button
                    onClick={() => setStatusFilter("completed")}
                    className={`px-4 py-2 rounded-lg font-medium ${
                      statusFilter === "completed" ? "bg-emerald-100 text-emerald-700" : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
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
                    className="border border-gray-200 rounded-lg hover:border-indigo-300 hover:shadow-md transition-all cursor-pointer bg-white"
                    onClick={() => setSelectedClient(client)}
                  >
                    <div className="p-5">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center">
                            <div className="font-medium text-indigo-700">
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
                        <span className={`text-xs font-medium px-2 py-1 rounded ${
                          client.status === 'upcoming' ? 'bg-indigo-100 text-indigo-700' : 'bg-emerald-100 text-emerald-700'
                        }`}>
                          {client.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                        </span>
                      </div>

                      {/* Details */}
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">Condition</span>
                          <span className="font-medium">{client.condition}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">Severity</span>
                          <span className={`font-medium ${
                            client.severity === 'Critical' ? 'text-red-600' :
                            client.severity === 'High' ? 'text-orange-600' :
                            client.severity === 'Moderate' ? 'text-amber-600' :
                            'text-emerald-600'
                          }`}>
                            {client.severity}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">Next Session</span>
                          <span className="font-medium">{client.date} • {client.time}</span>
                        </div>
                      </div>

                      {/* Progress */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">Progress</span>
                          <span className="font-medium text-emerald-600">{client.progressScore}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div 
                            className="bg-indigo-500 h-1.5 rounded-full" 
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

        {/* Philosophy Section */}
        <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium mb-6">
              Clinical Philosophy
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Evidence-based care for a resilient mindset
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our clinical approach integrates Cognitive Behavioral Therapy (CBT) with trauma-informed 
              mindfulness practices. We don't just manage symptoms; we partner with clients to navigate 
              complex emotional landscapes, fostering self-regulation and sustainable mental well-being.
            </p>
          </div>
        </div>

        {/* Credentials */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Credentials & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <Award size={20} className="text-indigo-600" />
                <h3 className="font-medium text-gray-900">Board Certified</h3>
              </div>
              <p className="text-sm text-gray-500">Certified by Indian Association of Clinical Psychologists</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <Stethoscope size={20} className="text-purple-600" />
                <h3 className="font-medium text-gray-900">Trauma Specialist</h3>
              </div>
              <p className="text-sm text-gray-500">Recognized for excellence in PTSD rehabilitation</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <ShieldCheck size={20} className="text-emerald-600" />
                <h3 className="font-medium text-gray-900">Tele-Health Pioneer</h3>
              </div>
              <p className="text-sm text-gray-500">Leading advocate for secure digital counseling</p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-indigo-600 rounded-lg p-8 text-white mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-3xl font-bold mb-1">15k+</p>
              <p className="text-sm text-indigo-200">Sessions Conducted</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold mb-1">94%</p>
              <p className="text-sm text-indigo-200">Stability Rate</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold mb-1">2k+</p>
              <p className="text-sm text-indigo-200">Crisis Interventions</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold mb-1">24/7</p>
              <p className="text-sm text-indigo-200">Emergency Support</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="font-bold text-gray-900">MindCare Pro Systems</h3>
              <p className="text-gray-500 text-sm mt-1">Healing Minds, Restoring Hope since 2012</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <ShieldCheck size={14} className="text-indigo-500" />
                HIPAA Compliant
              </div>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 text-sm font-medium">
                Export Reports
              </button>
            </div>
          </div>
          <p className="text-center text-gray-400 text-xs mt-6">
            © 2024 MindCare Pro Systems. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}