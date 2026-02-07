import React, { useState, useMemo, useEffect } from "react";
import {
  Users, Heart, Calendar, MessageSquare, Video, TrendingUp,
  Star, Clock, UserCheck, Baby, Handshake, Search,
  MapPin, Filter, CheckCircle2, Mail, Phone, BookOpen,
  Award, ShieldCheck, Globe, X, FileText, ChevronRight,
  Coffee, ChevronDown, Plus
} from "lucide-react";




const formatDateTime = (dateString) => {
  if (!dateString) return "—";

  return new Date(dateString).toLocaleString("en-IN", {
    weekday: "long",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};


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
                {client.fullName.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{client.fullName}</h1>
              <div className="flex flex-wrap items-center gap-2 mt-1">
                <span className="text-xs px-2 py-1 rounded bg-indigo-100 text-indigo-700">
                  {client.category || "Relationship Counseling"}
                </span>

                <span className={`text-xs px-2 py-1 rounded ${client.status === "upcoming"
                  ? "bg-amber-100 text-amber-700"
                  : "bg-emerald-100 text-emerald-700"
                  }`}>
                  {client.status === "upcoming" ? "Upcoming" : "Completed"}
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
            {/* Client Information */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Client Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-gray-400" />
                  <span className="text-gray-900">{client.email}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-gray-400" />
                  <span className="text-gray-900">{client.phone}</span>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-500 mb-1">Client Message</p>
                  <p className="text-gray-800 bg-white p-4 rounded-lg border">
                    {client.message || "Client has not shared a detailed message yet."}
                  </p>
                </div>
              </div>
            </div>

            {/* Counselor Notes (Dummy but useful) */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Counselor Notes
              </h3>

              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                <li>Initial relationship concerns reviewed</li>
                <li>Client appears emotionally engaged</li>
                <li>Recommended structured counseling sessions</li>
              </ul>
            </div>
          </div>


          {/* Right Column */}
          <div className="space-y-6">
            {/* Next Session */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Record Details
              </h3>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Created On</span>
                  <span className="font-medium">
                    {formatDateTime(client.createdAt)}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Status</span>
                  <span className="font-medium">
                    {client.status === "upcoming" ? "Upcoming" : "Completed"}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Category</span>
                  <span className="font-medium">
                    {client.category || "Relationship Counseling"}
                  </span>
                </div>
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
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedClient, setSelectedClient] = useState(null);
  const [selectedMilestone, setSelectedMilestone] = useState(0);


  useEffect(() => {
    const fetchClients = async () => {
      try {
        const token = localStorage.getItem("counselorToken");

        const res = await fetch("http://localhost:5000/api/clients/category/Relationship Counselors", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        setClients(data.clients || []);
      } catch (error) {
        console.error("Failed to fetch clients", error);
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);



  // Filter clients
  const filteredClients = useMemo(() => {
    return clients.filter((client) => {
      const matchesSearch =
        client.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        client.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        client.city.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStatus =
        statusFilter === "all" || client.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [clients, searchQuery, statusFilter]);


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Modal */}
      {selectedClient && <ClientProfileModal client={selectedClient} onClose={() => setSelectedClient(null)} />}

  

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
                  {["all", "new", "in-progress", "completed"].map((status) => (
                    <button
                      key={status}
                      onClick={() => setStatusFilter(status)}
                      className={`px-4 py-2 rounded-lg font-medium capitalize ${statusFilter === status
                        ? "bg-rose-600 text-white"
                        : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                        }`}
                    >
                      {status.replace("-", " ")}
                    </button>
                  ))}
                </div>

              </div>
            </div>
          </div>
          {loading && (
            <div className="text-center py-10 text-gray-500">
              Loading clients...
            </div>
          )}
          {/* Clients Grid */}
          <div className="p-6">
            {filteredClients.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredClients.map((client) => (
                  <div
                    onClick={() => setSelectedClient(client)}
                    key={client._id}
                    className="border border-gray-200 rounded-xl hover:border-rose-300 hover:shadow-md transition-all cursor-pointer bg-white"
                  >
                    <div className="p-5 space-y-4">
                      {/* Header */}
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-bold text-gray-900">{client.fullName}</h3>
                          <p className="text-sm text-gray-500">{client.email}</p>
                          <p className="text-xs text-gray-400 mt-1">{client.city}</p>
                        </div>

                        <span className={`text-xs px-2 py-1 rounded capitalize ${client.status === "completed"
                          ? "bg-emerald-100 text-emerald-700"
                          : client.status === "in-progress"
                            ? "bg-amber-100 text-amber-700"
                            : "bg-rose-100 text-rose-700"
                          }`}>
                          {client.status.replace("-", " ")}
                        </span>
                      </div>

                      {/* Dummy description */}
                      <p className="text-sm text-gray-600">
                        Client is actively engaged in relationship counseling sessions focused on emotional well-being and communication improvement.
                      </p>

                      <button className="w-full py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-sm">
                        View Profile
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