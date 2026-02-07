import React, { useState, useMemo } from "react";
import { 
  Users, Briefcase, Calendar, MessageSquare, TrendingUp, Star, Clock, 
  GraduationCap, Trophy, FileText, Search, MapPin, Filter, CheckCircle2, 
  Phone, Mail, BookOpen, Award, Globe, ShieldCheck, X, ChevronRight,
  Coffee, MoreVertical, Target
} from "lucide-react";


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
    notes: "Strong technical skills, needs guidance on career progression.",
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
    notes: "Excellent creative skills, needs to strengthen analytical abilities.",
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
    notes: "Experienced professional seeking transition to consulting.",
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

// Stat Card Component
const StatCard = ({ label, value, icon: Icon, change, sub }) => (
  <div className="bg-white rounded-lg p-5 border border-gray-200 shadow-sm">
    <div className="flex items-center justify-between mb-3">
      <div className="p-2 rounded-lg bg-gray-50">
        <Icon size={20} className="text-gray-600" />
      </div>
      <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
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
            <div className="w-16 h-16 rounded-lg bg-blue-50 flex items-center justify-center">
              <div className="text-xl font-bold text-blue-700">
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
                  client.status === 'upcoming' ? 'bg-blue-100 text-blue-700' : 'bg-emerald-100 text-emerald-700'
                }`}>
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
            {/* Career Info */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Career Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Industry</p>
                  <p className="font-medium text-gray-900">{client.industry}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Experience</p>
                  <p className="font-medium text-gray-900">{client.experience}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Current Role</p>
                  <p className="font-medium text-gray-900">{client.currentRole}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Target Role</p>
                  <p className="font-medium text-gray-900">{client.targetRole}</p>
                </div>
              </div>
            </div>

            {/* Contact & Financial */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact & Financial Info</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-gray-400" />
                  <span className="text-gray-900">{client.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-gray-400" />
                  <span className="text-gray-900">{client.phone}</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500">Current Salary</p>
                    <p className="font-medium text-gray-900">{client.currentSalary}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500">Target Salary</p>
                    <p className="font-medium text-blue-600">{client.targetSalary}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Notes */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Progress & Notes</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Sessions Completed</span>
                  <span className="font-bold text-gray-900">{client.sessionsCompleted}</span>
                </div>
                <div className="space-y-1">
                  <p className="text-gray-600">Skill Gaps Identified</p>
                  <div className="flex flex-wrap gap-2">
                    {client.skillGaps.map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-red-50 text-red-700 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-4 bg-white rounded-lg border border-gray-200">
                  <p className="text-gray-700">{client.notes}</p>
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
                  <span className="text-gray-600">Type</span>
                  <span className="font-medium">{client.type}</span>
                </div>
              </div>
            </div>

            {/* Progress Metrics */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Progress Metrics</h3>
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Readiness Score</span>
                    <span className="font-medium text-blue-600">78%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '78%' }} />
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
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700">
                Schedule Next Session
              </button>
              <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50">
                Send Career Resources
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
    return CLIENTS_DATA.filter((client) => {
      const matchesSearch = client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          client.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          client.location.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === "all" || client.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [searchQuery, statusFilter]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Modal */}
      {selectedClient && <ClientProfileModal client={selectedClient} onClose={() => setSelectedClient(null)} />}


      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatCard
            label="Active Clients"
            value="156"
            icon={Users}
            change="+8.2%"
            sub="Total advising"
          />
          <StatCard
            label="Placement Rate"
            value="94%"
            icon={Target}
            change="+2%"
            sub="Success rate"
          />
          <StatCard
            label="Partner Firms"
            value="45"
            icon={Briefcase}
            change="+4"
            sub="Network companies"
          />
          <StatCard
            label="Client Rating"
            value="4.8"
            icon={Star}
            change="+0.1"
            sub="Average rating"
          />
        </div>

        {/* Client Management */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm mb-8">
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Client Management</h2>
                <p className="text-gray-500 mt-1">Manage counseling sessions and client progress</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search clients..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                
                <div className="flex gap-2">
                  <button
                    onClick={() => setStatusFilter("all")}
                    className={`px-4 py-2 rounded-lg font-medium ${
                      statusFilter === "all" ? "bg-blue-600 text-white" : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setStatusFilter("upcoming")}
                    className={`px-4 py-2 rounded-lg font-medium ${
                      statusFilter === "upcoming" ? "bg-blue-100 text-blue-700" : "border border-gray-300 text-gray-700 hover:bg-gray-50"
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
                    className="border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all cursor-pointer bg-white"
                    onClick={() => setSelectedClient(client)}
                  >
                    <div className="p-5">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                            <div className="font-medium text-blue-700">
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
                          client.status === 'upcoming' ? 'bg-blue-100 text-blue-700' : 'bg-emerald-100 text-emerald-700'
                        }`}>
                          {client.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                        </span>
                      </div>

                      {/* Details */}
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">Industry</span>
                          <span className="font-medium">{client.industry}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">Experience</span>
                          <span className="font-medium">{client.experience}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">Next Session</span>
                          <span className="font-medium">{client.date} • {client.time}</span>
                        </div>
                      </div>

                      {/* Progress */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">Sessions</span>
                          <span className="font-medium text-blue-600">{client.sessionsCompleted}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div 
                            className="bg-blue-500 h-1.5 rounded-full" 
                            style={{ width: `${(client.sessionsCompleted / 10) * 100}%` }}
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6">
              Career Strategy
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Bridging the gap between potential and professional success
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our career advising model combines data-driven market insights with personalized 
              psychological profiling. We don't just find jobs; we architect sustainable professional 
              journeys that align with long-term goals and societal impact.
            </p>
          </div>
        </div>

        {/* Credentials */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Credentials & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <Award size={20} className="text-blue-600" />
                <h3 className="font-medium text-gray-900">ICF Master Coach</h3>
              </div>
              <p className="text-sm text-gray-500">Certified by International Coaching Federation</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <Globe size={20} className="text-indigo-600" />
                <h3 className="font-medium text-gray-900">APAC Delegate</h3>
              </div>
              <p className="text-sm text-gray-500">Keynote speaker at Asia-Pacific Employment Summit</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <BookOpen size={20} className="text-emerald-600" />
                <h3 className="font-medium text-gray-900">EdTech Innovator</h3>
              </div>
              <p className="text-sm text-gray-500">Pioneer in AI-driven career mapping</p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-blue-600 rounded-lg p-8 text-white mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-3xl font-bold mb-1">5,000+</p>
              <p className="text-sm text-blue-200">Placements Made</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold mb-1">45%</p>
              <p className="text-sm text-blue-200">Avg. Salary Hike</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold mb-1">200+</p>
              <p className="text-sm text-blue-200">Campus Events</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold mb-1">100%</p>
              <p className="text-sm text-blue-200">Client Confidentiality</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="font-bold text-gray-900">CareerPath Pro Systems</h3>
              <p className="text-gray-500 text-sm mt-1">Engineering Future Leaders since 2015</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <ShieldCheck size={14} className="text-blue-500" />
                GDPR Compliant
              </div>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 text-sm font-medium">
                Export Reports
              </button>
            </div>
          </div>
          <p className="text-center text-gray-400 text-xs mt-6">
            © 2024 CareerPath Pro Systems. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}