import React, { useState, useMemo } from "react";
import { 
  Users, Calendar, MessageSquare, TrendingUp, Star, Clock, 
  GraduationCap, Trophy, FileText, Search, MapPin, Filter, 
  CheckCircle2, Phone, Mail, BookOpen, Award, Globe, ShieldCheck,
  X, ChevronRight, School, Target, Coffee, MoreVertical
} from "lucide-react";

// --- EDUCATIONAL COUNSELOR DATA ---
const STUDENT_DATA = [
  { 
    id: 1, 
    name: "Arjun Sharma", 
    location: "New Delhi, DL", 
    status: "upcoming", 
    type: "College Selection", 
    time: "10:00 AM", 
    date: "Today", 
    duration: "45 min", 
    grade: "12th Science", 
    target: "JEE Advanced",
    email: "arjun.sharma@example.com",
    phone: "+91 98765 43210",
    parentContact: "+91 98765 43211",
    sessionsCompleted: 8,
    testScore: "85%",
    profileStrength: "9.2/10",
    targetCountries: "USA, UK, Canada",
    preferredContact: "WhatsApp & Email",
    notes: "Showing consistent improvement in quantitative sections. Needs focus on essay writing.",
    upcomingDeadlines: [
      { title: "SAT Registration", date: "Dec 20, 2024", priority: "Urgent" },
      { title: "Stanford Application", date: "Jan 5, 2025", priority: "High" }
    ]
  },
  { 
    id: 2, 
    name: "Neha Patel", 
    location: "Ahmedabad, GJ", 
    status: "completed", 
    type: "Career Guidance", 
    time: "02:30 PM", 
    date: "Yesterday", 
    duration: "60 min", 
    grade: "11th Commerce", 
    target: "SAT/TOEFL",
    email: "neha.patel@example.com",
    phone: "+91 98765 43212",
    parentContact: "+91 98765 43213",
    sessionsCompleted: 12,
    testScore: "92%",
    profileStrength: "9.5/10",
    targetCountries: "USA, Australia",
    preferredContact: "Email",
    notes: "Excellent communication skills. Strong candidate for business schools.",
    upcomingDeadlines: [
      { title: "TOEFL Exam", date: "Jan 15, 2025", priority: "Medium" }
    ]
  },
  { 
    id: 3, 
    name: "Rohan Kumar", 
    location: "Patna, BR", 
    status: "upcoming", 
    type: "Application Review", 
    time: "04:00 PM", 
    date: "Today", 
    duration: "30 min", 
    grade: "12th Humanities", 
    target: "CUET",
    email: "rohan.kumar@example.com",
    phone: "+91 98765 43214",
    parentContact: "+91 98765 43215",
    sessionsCompleted: 5,
    testScore: "78%",
    profileStrength: "8.5/10",
    targetCountries: "India",
    preferredContact: "Phone & WhatsApp",
    notes: "Strong in humanities, needs guidance on college selection.",
    upcomingDeadlines: [
      { title: "CUET Registration", date: "Feb 1, 2025", priority: "High" }
    ]
  },
  { 
    id: 4, 
    name: "Kavya Verma", 
    location: "Lucknow, UP", 
    status: "upcoming", 
    type: "Test Preparation", 
    time: "06:00 PM", 
    date: "Tomorrow", 
    duration: "60 min", 
    grade: "10th", 
    target: "Board Exams",
    email: "kavya.verma@example.com",
    phone: "+91 98765 43216",
    parentContact: "+91 98765 43217",
    sessionsCompleted: 3,
    testScore: "88%",
    profileStrength: "8.8/10",
    targetCountries: "India",
    preferredContact: "WhatsApp",
    notes: "Early stage counseling. Building foundation for science stream.",
    upcomingDeadlines: [
      { title: "School Pre-Boards", date: "Nov 30, 2024", priority: "Medium" }
    ]
  },
  { 
    id: 5, 
    name: "Vikas Mehta", 
    location: "Mumbai, MH", 
    status: "completed", 
    type: "University Shortlisting", 
    time: "11:00 AM", 
    date: "2 days ago", 
    duration: "45 min", 
    grade: "12th Science", 
    target: "NEET",
    email: "vikas.mehta@example.com",
    phone: "+91 98765 43218",
    parentContact: "+91 98765 43219",
    sessionsCompleted: 15,
    testScore: "95%",
    profileStrength: "9.8/10",
    targetCountries: "India",
    preferredContact: "Email & WhatsApp",
    notes: "Top performer. Aiming for AIIMS. Needs guidance on backup medical colleges.",
    upcomingDeadlines: [
      { title: "NEET Application", date: "Mar 10, 2025", priority: "Urgent" }
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
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-lg bg-emerald-50 flex items-center justify-center">
              <div className="text-xl font-bold text-emerald-700">
                {student.name.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{student.name}</h1>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm text-gray-500 flex items-center gap-1">
                  <MapPin size={14} />
                  {student.location}
                </span>
                <span className={`text-xs px-2 py-1 rounded ${
                  student.status === 'upcoming' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'
                }`}>
                  {student.status === 'upcoming' ? 'Upcoming' : 'Completed'}
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
            {/* Academic Info */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Academic Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Current Grade</p>
                  <p className="font-medium text-gray-900">{student.grade}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Target Exam</p>
                  <p className="font-medium text-gray-900">{student.target}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Sessions Completed</p>
                  <p className="font-medium text-gray-900">{student.sessionsCompleted}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Test Score</p>
                  <p className="font-medium text-emerald-600">{student.testScore}</p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-gray-400" />
                  <span className="text-gray-900">{student.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-gray-400" />
                  <span className="text-gray-900">{student.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users size={18} className="text-gray-400" />
                  <span className="text-gray-900">Parent: {student.parentContact}</span>
                </div>
              </div>
            </div>

            {/* Notes */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Counselor Notes</h3>
              <div className="p-4 bg-white rounded-lg border border-gray-200">
                <p className="text-gray-700">{student.notes}</p>
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
                  <span className="font-medium">{student.date}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Time</span>
                  <span className="font-medium">{student.time}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-medium">{student.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Type</span>
                  <span className="font-medium">{student.type}</span>
                </div>
              </div>
            </div>

            {/* Progress */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Progress Metrics</h3>
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Profile Strength</span>
                    <span className="font-medium">{student.profileStrength}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-emerald-500 h-2 rounded-full" 
                      style={{ width: `${parseFloat(student.profileStrength) * 10}%` }}
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="text-gray-600">Target Countries</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {student.targetCountries.split(', ').map((country, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">
                        {country}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming Deadlines */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Deadlines</h3>
              <div className="space-y-3">
                {student.upcomingDeadlines.map((deadline, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-gray-900">{deadline.title}</span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        deadline.priority === 'Urgent' ? 'bg-red-100 text-red-700' :
                        deadline.priority === 'High' ? 'bg-amber-100 text-amber-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {deadline.priority}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">{deadline.date}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-2">
              <button className="w-full bg-emerald-600 text-white py-3 rounded-lg font-medium hover:bg-emerald-700">
                Schedule Next Session
              </button>
              <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50">
                Send Progress Update
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
  const [selectedStudent, setSelectedStudent] = useState(null);

  // Filter students
  const filteredStudents = useMemo(() => {
    return STUDENT_DATA.filter((student) => {
      const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          student.target.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          student.location.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === "all" || student.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [searchQuery, statusFilter]);

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
                  <button
                    onClick={() => setStatusFilter("all")}
                    className={`px-4 py-2 rounded-lg font-medium ${
                      statusFilter === "all" ? "bg-emerald-600 text-white" : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setStatusFilter("upcoming")}
                    className={`px-4 py-2 rounded-lg font-medium ${
                      statusFilter === "upcoming" ? "bg-emerald-100 text-emerald-700" : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    Upcoming
                  </button>
                  <button
                    onClick={() => setStatusFilter("completed")}
                    className={`px-4 py-2 rounded-lg font-medium ${
                      statusFilter === "completed" ? "bg-blue-100 text-blue-700" : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    Completed
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Students Grid */}
          <div className="p-6">
            {filteredStudents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredStudents.map((student) => (
                  <div 
                    key={student.id} 
                    className="border border-gray-200 rounded-lg hover:border-emerald-300 hover:shadow-md transition-all cursor-pointer bg-white"
                    onClick={() => setSelectedStudent(student)}
                  >
                    <div className="p-5">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                            <div className="font-medium text-emerald-700">
                              {student.name.split(' ').map(n => n[0]).join('')}
                            </div>
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900">{student.name}</h3>
                            <p className="text-sm text-gray-500 flex items-center gap-1">
                              <MapPin size={12} />
                              {student.location}
                            </p>
                          </div>
                        </div>
                        <span className={`text-xs font-medium px-2 py-1 rounded ${
                          student.status === 'upcoming' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'
                        }`}>
                          {student.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                        </span>
                      </div>

                      {/* Details */}
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">Grade</span>
                          <span className="font-medium">{student.grade}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">Target</span>
                          <span className="font-medium">{student.target}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">Next Session</span>
                          <span className="font-medium">{student.date} • {student.time}</span>
                        </div>
                      </div>

                      {/* Progress */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">Test Score</span>
                          <span className="font-medium text-emerald-600">{student.testScore}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div 
                            className="bg-emerald-500 h-1.5 rounded-full" 
                            style={{ width: student.testScore }}
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