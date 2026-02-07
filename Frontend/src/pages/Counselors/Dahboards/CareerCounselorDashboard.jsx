import React, { useState, useMemo } from "react";
import { useEffect } from "react";

import {
  Users, Briefcase, Calendar, MessageSquare, TrendingUp, Star, Clock,
  GraduationCap, Trophy, FileText, Search, MapPin, Filter, CheckCircle2,
  Phone, Mail, BookOpen, Award, Globe, ShieldCheck, X, ChevronRight,
  Coffee, MoreVertical, Target
} from "lucide-react";



const formatDateTime = (dateString) => {
  const date = new Date(dateString);

  return date.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};


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
                {client.fullName.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{client.fullName}</h1>

              <div className="flex flex-wrap items-center gap-2 mt-1">
                <span className="text-sm text-gray-500 flex items-center gap-1">
                  <MapPin size={14} />
                  {client.location || "—"}
                </span>

                <span
                  className={`text-xs px-2 py-1 rounded ${client.status === "In-progress"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-emerald-100 text-emerald-700"
                    }`}
                >
                  {client.status}
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
            <div className="bg-gray-50 rounded-lg p-6">
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
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Counselor Notes
              </h3>

              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                <li>Initial career goals discussion completed</li>
                <li>Client exploring multiple career paths</li>
                <li>Recommended structured career planning sessions</li>
              </ul>
            </div>
          </div>


          {/* Right Column */}
          <div className="space-y-6">
            {/* Session Details */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Record Details
              </h3>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Created On</span>
                  <span className="font-medium">
                    {formatDateTime(client.createdAt)}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Status</span>
                  <span className="font-medium">{client.status}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Category</span>
                  <span className="font-medium">
                    {client.category || "Career Counseling"}
                  </span>
                </div>
              </div>
            </div>



            {/* Progress Metrics */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Engagement Overview
              </h3>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Career Readiness</span>
                  <span className="font-medium text-blue-600">Moderate</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Follow-up Needed</span>
                  <span className="font-medium text-amber-600">Yes</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Priority Level</span>
                  <span className="font-medium text-emerald-600">Normal</span>
                </div>
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
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedClient, setSelectedClient] = useState(null);



  useEffect(() => {
    const fetchClients = async () => {
      try {
        const token = localStorage.getItem("counselorToken");

        const res = await fetch("http://localhost:5000/api/clients/category/Career Counselors", {
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
        client.fullName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        client.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        client.city?.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStatus =
        statusFilter === "all" || client.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [clients, searchQuery, statusFilter]);


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Modal */}
      {selectedClient && <ClientProfileModal client={selectedClient} onClose={() => setSelectedClient(null)} />}

      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dr. Dev Sharma</h1>
              <p className="text-gray-500 mt-1">Career Counselor • CareerPath Pro</p>
            </div>
            <div className="mt-4 sm:mt-0 flex items-center gap-3">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium">
                <Coffee size={18} className="inline mr-2" />
                Take Break
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
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
                    className={`px-4 py-2 rounded-lg font-medium ${statusFilter === "all"
                      ? "bg-blue-600 text-white"
                      : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                      }`}
                  >
                    All
                  </button>

                  <button
                    onClick={() => setStatusFilter("new")}
                    className={`px-4 py-2 rounded-lg font-medium ${statusFilter === "new"
                      ? "bg-blue-100 text-blue-700"
                      : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                      }`}
                  >
                    New
                  </button>

                  <button
                    onClick={() => setStatusFilter("in-progress")}
                    className={`px-4 py-2 rounded-lg font-medium ${statusFilter === "in-progress"
                      ? "bg-amber-100 text-amber-700"
                      : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                      }`}
                  >
                    In-Progress
                  </button>

                  <button
                    onClick={() => setStatusFilter("completed")}
                    className={`px-4 py-2 rounded-lg font-medium ${statusFilter === "completed"
                      ? "bg-emerald-100 text-emerald-700"
                      : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                      }`}
                  >
                    Completed
                  </button>

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
                    className="border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all cursor-pointer bg-white"
                    onClick={() => setSelectedClient(client)}
                  >
                    <div className="p-5">
                      {/* Header */}
                      <div className="p-5">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="font-bold text-gray-900 text-lg">
                              {client.fullName}
                            </h3>
                            <p className="text-sm text-gray-500">{client.email}</p>
                            <p className="text-xs text-gray-400 mt-1">
                              {client.city}, India
                            </p>
                          </div>

                          <span className={`text-xs font-medium px-2 py-1 rounded ${client.status === "new"
                            ? "bg-blue-100 text-blue-700"
                            : client.status === "in-progress"
                              ? "bg-amber-100 text-amber-700"
                              : "bg-emerald-100 text-emerald-700"
                            }`}>
                            {client.status}
                          </span>
                        </div>

                        <p className="text-sm text-gray-600 mb-4">
                          Client is actively seeking career guidance and personalized roadmap
                          aligned with current market opportunities.
                        </p>

                        <button className="w-full py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-sm">
                          View Full Profile
                        </button>
                      </div>
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