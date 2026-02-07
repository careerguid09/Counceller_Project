import React, { useState, useMemo, useEffect } from "react";
import {
  Users, Calendar, MessageSquare, TrendingUp, Star, Clock,
  Brain, Activity, ShieldAlert, FileText, Search, MapPin, Filter,
  CheckCircle2, Phone, Mail, BookOpen, Award, ShieldCheck, X,
  Coffee, MoreVertical, Stethoscope
} from "lucide-react";



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

const formatDateTime = (dateString) => {
  if (!dateString) return "—";

  const date = new Date(dateString);

  return date.toLocaleString("en-IN", {
    weekday: "long",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};


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
              <span className="text-xl font-bold text-indigo-700">
                {client.fullName?.split(" ").map(n => n[0]).join("")}
              </span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{client.fullName}</h1>
              <p className="text-sm text-gray-500 flex items-center gap-1">
                <MapPin size={14} /> {client.city || "—"}
              </p>
            </div>
          </div>

          <button onClick={onClose} className="p-2 rounded-lg hover:bg-gray-100">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* LEFT */}
          <div className="lg:col-span-2 space-y-6">

            {/* Client Overview */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Client Overview</h3>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Full Name</p>
                  <p className="font-medium text-gray-900">{client.fullName}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Current Status</p>
                  <span className={`inline-block mt-1 px-3 py-1 rounded text-xs font-medium ${client.status === "new"
                      ? "bg-blue-100 text-blue-700"
                      : client.status === "in-progress"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-emerald-100 text-emerald-700"
                    }`}>
                    {client.status.replace("-", " ")}
                  </span>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-gray-400" />
                  <span className="text-gray-900">{client.email}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-gray-400" />
                  <span className="text-gray-900">{client.phone || "Not provided"}</span>
                </div>
              </div>
            </div>

            {/* Care Plan (Dummy but useful) */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Care Plan Summary</h3>

              <p className="text-gray-700 leading-relaxed">
                This client is currently enrolled in a structured mental wellness program focused on
                emotional regulation, consistency, and long-term psychological resilience.
              </p>

              <ul className="mt-4 space-y-2 text-sm text-gray-600 list-disc list-inside">
                <li>Regular check-ins based on current status</li>
                <li>Adaptive care intensity as progress evolves</li>
                <li>Secure documentation and privacy-first handling</li>
              </ul>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">

            {/* Engagement */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Engagement Metrics</h3>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Profile Created</span>
                  <span className="font-medium">
                    {formatDateTime(client.createdAt)}
                  </span>
                </div>


                <div className="flex justify-between">
                  <span className="text-gray-600">Last Interaction</span>
                  <span className="font-medium">Within 7 days</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Engagement Level</span>
                  <span className="font-medium text-indigo-600">Good</span>
                </div>
              </div>
            </div>

            {/* Status Guidance */}
            <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-6">
              <h3 className="text-sm font-semibold text-indigo-800 mb-2">
                System Recommendation
              </h3>
              <p className="text-sm text-indigo-700">
                Maintain regular follow-ups and monitor engagement based on the client’s current status.
                Adjust care intensity if engagement changes.
              </p>
            </div>

            {/* Actions */}
            <div className="space-y-2">
              <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700">
                Schedule Follow-up
              </button>
              <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50">
                Add Internal Notes
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
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchClients = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/clients/category/Mental Health Counselors", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("counselorToken")}`,
          },
        });
        const data = await res.json();
        setClients(data.clients || []);
      } catch (err) {
        console.error("Failed to fetch clients", err);
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
                  {["all", "new", "in-progress", "completed"].map((status) => (
                    <button
                      key={status}
                      onClick={() => setStatusFilter(status)}
                      className={`px-4 py-2 rounded-lg font-medium capitalize ${statusFilter === status
                        ? "bg-indigo-600 text-white"
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
                    key={client._id}
                    onClick={() => setSelectedClient(client)}
                    className="border border-gray-200 rounded-lg hover:border-indigo-300 hover:shadow-md transition-all cursor-pointer bg-white"
                  >
                    <div className="p-5 space-y-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-gray-900">{client.fullName}</h3>
                          <p className="text-sm text-gray-500">{client.email}</p>
                          <p className="text-sm text-gray-400">{client.city}</p>
                        </div>
                        <span
                          className={`text-xs px-2 py-1 rounded font-medium ${client.status === "new"
                            ? "bg-blue-100 text-blue-700"
                            : client.status === "in-progress"
                              ? "bg-amber-100 text-amber-700"
                              : "bg-emerald-100 text-emerald-700"
                            }`}
                        >
                          {client.status.replace("-", " ")}
                        </span>
                      </div>

                      <p className="text-sm text-gray-600">
                        Ongoing mental health support plan focused on emotional resilience and long-term well-being.
                      </p>

                      <button className="w-full mt-2 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 text-sm font-medium">
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