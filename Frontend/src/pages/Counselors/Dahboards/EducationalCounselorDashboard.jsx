import React, { useState, useMemo, useEffect } from "react";
import {
  Users, Calendar, MessageSquare, TrendingUp, Star, Clock,
  GraduationCap, Trophy, FileText, Search, MapPin, Filter,
  CheckCircle2, Phone, Mail, BookOpen, Award, Globe, ShieldCheck,
  X, ChevronRight, School, Target, Coffee, MoreVertical
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

// Stat Card Component
const StatCard = ({ label, value, icon: Icon, change, sub }) => (
  <div className="bg-white rounded-lg p-5 border border-gray-200 shadow-sm">
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
      <p className="text-xs text-gray-400 mt-1 font-medium">{sub}</p>
    </div>
  </div>
);




// Student Profile Modal Component
const StudentProfileModal = ({ student, onClose }) => {
  if (!student) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{student.fullName}</h1>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm text-gray-500 flex items-center gap-1">
                <MapPin size={14} />
                {student.city}
              </span>
              <span className="text-xs px-2 py-1 rounded bg-indigo-100 text-indigo-700">
                {student.category}
              </span>
              <span className={`text-xs px-2 py-1 rounded ${student.status === "In-progress"
                ? "bg-blue-100 text-blue-700"
                : "bg-emerald-100 text-emerald-700"
                }`}>
                {student.status}
              </span>
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
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Client Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-gray-400" />
                  <span className="text-gray-900">{student.email}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-gray-400" />
                  <span className="text-gray-900">{student.phone}</span>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-500 mb-1">Client Message</p>
                  <p className="text-gray-800 bg-white p-4 rounded-lg border">
                    {student.message || "No message provided by the client."}
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
                <li>Initial inquiry reviewed</li>
                <li>Client appears genuinely motivated</li>
                <li>Recommended first consultation session</li>
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
                <div className="flex justify-between">
                  <span className="text-gray-600">Created On</span>
                  <span className="font-medium">
                    {formatDateTime(student.createdAt)}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Current Status</span>
                  <span className="font-medium">{student.status}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Category</span>
                  <span className="font-medium">{student.category}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">City</span>
                  <span className="font-medium">{student.city}</span>
                </div>
              </div>
            </div>



            {/* Progress Metrics */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Engagement Overview
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Response Quality</span>
                  <span className="font-medium text-blue-600">High</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Follow-up Required</span>
                  <span className="font-medium text-amber-600">Yes</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Priority Level</span>
                  <span className="font-medium text-red-600">Medium</span>
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
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedStudent, setSelectedStudent] = useState(null);


  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const token = localStorage.getItem("counselorToken");

        const res = await fetch(
          "http://localhost:5000/api/clients/category/Educational Counselors",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await res.json();
        setStudents(data.clients || []);
      } catch (error) {
        console.error("Failed to fetch students", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);


  // Filter students
  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const matchesSearch =
        student.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.city.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStatus =
        statusFilter === "all" || student.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [students, searchQuery, statusFilter]);


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Modal */}
      {selectedStudent && <StudentProfileModal student={selectedStudent} onClose={() => setSelectedStudent(null)} />}

      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dr. Ananya Sharma</h1>
              <p className="text-gray-500 mt-1">Educational Counselor • EduGuide Pro</p>
            </div>
            <div className="mt-4 sm:mt-0 flex items-center gap-3">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium">
                <Coffee size={18} className="inline mr-2" />
                Take Break
              </button>
              <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 font-medium">
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
            label="Active Students"
            value="156"
            icon={Users}
            change="+14%"
            sub="Total enrolled"
          />
          <StatCard
            label="Success Rate"
            value="92%"
            icon={Trophy}
            change="+3%"
            sub="Admission success"
          />
          <StatCard
            label="Score Improvement"
            value="+180"
            icon={TrendingUp}
            change="+5%"
            sub="Average SAT gain"
          />
          <StatCard
            label="Scholarships"
            value="₹4.2Cr"
            icon={Award}
            change="+22%"
            sub="Awarded this year"
          />
        </div>

        {/* Student Management */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm mb-8">
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Student Management</h2>
                <p className="text-gray-500 mt-1">Manage counseling sessions and student profiles</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search students..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-emerald-500"
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
                        ? "bg-emerald-600 text-white"
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

          {/* Students Grid */}
          <div className="p-6">
            {filteredStudents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredStudents.map((student) => (
                  <div
                    key={student._id}
                    className="border border-gray-200 rounded-lg hover:border-emerald-300 hover:shadow-md transition-all cursor-pointer bg-white"
                    onClick={() => setSelectedStudent(student)}
                  >
                    <div className="p-5 space-y-4">
                      {/* Header */}
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-bold text-gray-900">{student.fullName}</h3>
                          <p className="text-sm text-gray-500">{student.email}</p>
                          <p className="text-xs text-gray-400 mt-1">{student.city}</p>
                        </div>

                        <span className={`text-xs px-2 py-1 rounded capitalize ${student.status === "completed"
                          ? "bg-blue-100 text-blue-700"
                          : student.status === "in-progress"
                            ? "bg-amber-100 text-amber-700"
                            : "bg-emerald-100 text-emerald-700"
                          }`}>
                          {student.status.replace("-", " ")}
                        </span>
                      </div>

                      {/* Dummy helpful text */}
                      <p className="text-sm text-gray-600">
                        Student is actively engaged in counseling sessions. Profile and goals are being reviewed for optimal academic planning.
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
                <h3 className="text-lg font-medium text-gray-900 mb-2">No students found</h3>
                <p className="text-gray-500">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium mb-6">
              Educational Philosophy
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Empowering students through holistic academic strategy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We believe every student has a unique academic fingerprint. Our counseling goes beyond
              university placement to identify the intersection of innate talent, academic rigor,
              and future market demands to build lifelong career foundations.
            </p>
          </div>
        </div>

        {/* Credentials */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Credentials & Accreditations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <Award size={20} className="text-emerald-600" />
                <h3 className="font-medium text-gray-900">National Merit Advisor</h3>
              </div>
              <p className="text-sm text-gray-500">Certified advisor for National Merit Scholarship Program</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <School size={20} className="text-blue-600" />
                <h3 className="font-medium text-gray-900">Ivy League Consultant</h3>
              </div>
              <p className="text-sm text-gray-500">Premier International Admissions Consultant</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <Globe size={20} className="text-amber-600" />
                <h3 className="font-medium text-gray-900">Global Ed-Tech Fellow</h3>
              </div>
              <p className="text-sm text-gray-500">Specializing in South Asian student mobility</p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-emerald-600 rounded-lg p-8 text-white mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-3xl font-bold mb-1">10,000+</p>
              <p className="text-sm text-emerald-200">Admissions Secured</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold mb-1">₹50Cr+</p>
              <p className="text-sm text-emerald-200">Total Scholarships</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold mb-1">200+</p>
              <p className="text-sm text-emerald-200">Ivy League Offers</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold mb-1">100%</p>
              <p className="text-sm text-emerald-200">Student Satisfaction</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="font-bold text-gray-900">EduGuide Pro Educational Systems</h3>
              <p className="text-gray-500 text-sm mt-1">Architecting Academic Success since 2010</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <ShieldCheck size={14} className="text-emerald-500" />
                Student Data Privacy
              </div>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 text-sm font-medium">
                Export Reports
              </button>
            </div>
          </div>
          <p className="text-center text-gray-400 text-xs mt-6">
            © 2024 EduGuide Pro Educational Systems. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}