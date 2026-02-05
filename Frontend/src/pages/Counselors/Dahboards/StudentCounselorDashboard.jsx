import React, { useState, useEffect } from "react";
import {
  GraduationCap,
  BookOpen,
  Users,
  Calendar,
  MessageSquare,
  TrendingUp,
  Target,
  Bell,
  Search,
  Filter,
  Clock,
  CheckCircle,
  AlertCircle,
  Star,
  BarChart3,
  ChevronRight,
  MoreVertical,
  Video,
  FileText,
  Award,
  Lightbulb,
  HelpCircle,
  Clock4,
  ExternalLink,
  Brain,
} from "lucide-react";

const StudentCounselorDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [students, setStudents] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  // Mock Data
  useEffect(() => {
    // Students Data
    const mockStudents = [
      {
        id: 1,
        name: "Rohan Kumar",
        grade: "12th",
        stream: "Science",
        issues: ["Exam Stress", "Career Confusion"],
        performance: 85,
        nextMeeting: "Tomorrow, 2 PM",
        avatarColor: "bg-gradient-to-r from-blue-500 to-blue-600",
      },
      {
        id: 2,
        name: "Priya Sharma",
        grade: "11th",
        stream: "Commerce",
        issues: ["Time Management", "Anxiety"],
        performance: 72,
        nextMeeting: "Friday, 11 AM",
        avatarColor: "bg-gradient-to-r from-purple-500 to-purple-600",
      },
      {
        id: 3,
        name: "Amit Verma",
        grade: "10th",
        stream: "All Subjects",
        issues: ["Subject Choice", "Motivation"],
        performance: 65,
        nextMeeting: "Today, 4 PM",
        avatarColor: "bg-gradient-to-r from-green-500 to-green-600",
      },
      {
        id: 4,
        name: "Neha Patel",
        grade: "12th",
        stream: "Arts",
        issues: ["Board Pressure", "Future Planning"],
        performance: 90,
        nextMeeting: "Monday, 3 PM",
        avatarColor: "bg-gradient-to-r from-pink-500 to-pink-600",
      },
    ];

    // Appointments
    const mockAppointments = [
      {
        id: 1,
        studentName: "Rohan Kumar",
        parentName: "Mr. Kumar",
        time: "10:00 AM - 10:45 AM",
        purpose: "Career Counseling",
        status: "confirmed",
        type: "Parent-Teacher Meeting",
      },
      {
        id: 2,
        studentName: "Sonia Mehta",
        parentName: "Mrs. Mehta",
        time: "2:00 PM - 2:30 PM",
        purpose: "Academic Performance",
        status: "pending",
        type: "Individual Session",
      },
      {
        id: 3,
        studentName: "Vikram Singh",
        parentName: "-",
        time: "4:00 PM - 5:00 PM",
        purpose: "Study Skills Workshop",
        status: "confirmed",
        type: "Group Session",
      },
    ];

    // Upcoming Events
    const mockEvents = [
      {
        id: 1,
        title: "Career Fair 2024",
        date: "Jan 25, 2024",
        time: "10 AM - 4 PM",
        participants: "150+ Students",
        type: "workshop",
      },
      {
        id: 2,
        title: "Stress Management Workshop",
        date: "Jan 28, 2024",
        time: "2 PM - 4 PM",
        participants: "Grade 11 & 12",
        type: "seminar",
      },
      {
        id: 3,
        title: "Parent Orientation",
        date: "Feb 1, 2024",
        time: "5 PM - 7 PM",
        participants: "All Parents",
        type: "meeting",
      },
    ];

    setStudents(mockStudents);
    setAppointments(mockAppointments);
    setUpcomingEvents(mockEvents);
  }, []);

  // Dashboard Stats
  const stats = [
    {
      title: "Active Students",
      value: "156",
      icon: <Users className="w-6 h-6" />,
      color: "bg-gradient-to-r from-blue-500 to-blue-600",
      change: "+12 this month",
    },
    {
      title: "Avg Academic Score",
      value: "78%",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "bg-gradient-to-r from-green-500 to-green-600",
      change: "+5% improvement",
    },
    {
      title: "Career Sessions",
      value: "48",
      icon: <Target className="w-6 h-6" />,
      color: "bg-gradient-to-r from-purple-500 to-purple-600",
      change: "This month",
    },
    {
      title: "Satisfaction Rate",
      value: "94%",
      icon: <Star className="w-6 h-6" />,
      color: "bg-gradient-to-r from-yellow-500 to-yellow-600",
      change: "Student feedback",
    },
  ];

  // Common Student Issues
  const commonIssues = [
    { issue: "Exam Stress", percentage: 35, students: 45 },
    { issue: "Career Confusion", percentage: 28, students: 36 },
    { issue: "Time Management", percentage: 22, students: 28 },
    { issue: "Peer Pressure", percentage: 15, students: 19 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 p-4 md:p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                  Student Counselor Dashboard
                </h1>
                <p className="text-gray-600 mt-1">
                  Guiding students towards academic and personal success
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-64 pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Search students, sessions..."
              />
            </div>

            {/* Notifications */}
            <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <Bell className="h-6 w-6 text-gray-600" />
              <span className="absolute top-1 right-1 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Profile */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                SC
              </div>
              <div className="hidden md:block">
                <p className="font-medium text-gray-800">Ms. Anjali Verma</p>
                <p className="text-sm text-gray-500">Student Counselor</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2">
          {[
            "Overview",
            "Students",
            "Appointments",
            "Career",
            "Workshops",
            "Reports",
          ].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeTab === tab.toLowerCase()
                  ? "bg-gradient-to-r from-indigo-500 to-indigo-600 text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
              }`}
              onClick={() => setActiveTab(tab.toLowerCase())}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-500 font-medium">
                  {stat.title}
                </p>
                <p className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">
                  {stat.value}
                </p>
                <div className="flex items-center mt-2">
                  <span className="text-sm text-green-600 font-medium">
                    {stat.change}
                  </span>
                </div>
              </div>
              <div className={`p-3 rounded-lg ${stat.color} text-white`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Student List */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-800">
                Student Portfolio
              </h2>
              <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium flex items-center">
                View All <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>

            <div className="divide-y divide-gray-100">
              {students.map((student) => (
                <div
                  key={student.id}
                  className="p-6 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-12 h-12 rounded-full ${student.avatarColor} flex items-center justify-center text-white font-bold`}
                      >
                        {student.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">
                          {student.name}
                        </h3>
                        <div className="flex items-center flex-wrap gap-3 mt-2">
                          <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md">
                            {student.grade} Grade
                          </span>
                          <span className="px-2 py-1 bg-purple-50 text-purple-700 text-xs rounded-md">
                            {student.stream}
                          </span>
                          <span className="text-sm text-gray-600">
                            Next: {student.nextMeeting}
                          </span>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {student.issues.map((issue, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                            >
                              {issue}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">
                          Performance:
                        </span>
                        <span
                          className={`text-sm font-semibold ${
                            student.performance > 80
                              ? "text-green-600"
                              : student.performance > 60
                                ? "text-yellow-600"
                                : "text-red-600"
                          }`}
                        >
                          {student.performance}%
                        </span>
                      </div>
                      <button className="px-3 py-1 bg-indigo-50 text-indigo-600 text-sm rounded-lg hover:bg-indigo-100">
                        Schedule Session
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Today's Appointments */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-6">
              Today's Appointments
            </h2>

            <div className="space-y-4">
              {appointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className="p-4 border border-gray-200 rounded-lg hover:border-indigo-300 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`p-3 rounded-lg ${
                          appointment.type === "Parent-Teacher Meeting"
                            ? "bg-blue-100 text-blue-600"
                            : appointment.type === "Group Session"
                              ? "bg-green-100 text-green-600"
                              : "bg-purple-100 text-purple-600"
                        }`}
                      >
                        {appointment.type === "Parent-Teacher Meeting" ? (
                          <Users className="w-5 h-5" />
                        ) : (
                          <MessageSquare className="w-5 h-5" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">
                          {appointment.studentName}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {appointment.parentName &&
                            `Parent: ${appointment.parentName} • `}
                          {appointment.purpose}
                        </p>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="text-sm text-gray-600">
                            <Clock className="w-3 h-3 inline mr-1" />
                            {appointment.time}
                          </span>
                          <span
                            className={`px-2 py-1 text-xs rounded-md ${
                              appointment.status === "confirmed"
                                ? "bg-green-100 text-green-700"
                                : "bg-yellow-100 text-yellow-700"
                            }`}
                          >
                            {appointment.status}
                          </span>
                        </div>
                      </div>
                    </div>
                    <button className="px-3 py-1 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700">
                      Join
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Common Issues */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-indigo-600" />
                <h2 className="text-lg font-semibold text-gray-800">
                  Common Student Issues
                </h2>
              </div>
              <BarChart3 className="w-5 h-5 text-gray-400" />
            </div>

            <div className="space-y-5">
              {commonIssues.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700">
                      {item.issue}
                    </span>
                    <div className="text-right">
                      <span className="text-sm font-semibold text-gray-900">
                        {item.percentage}%
                      </span>
                      <span className="text-xs text-gray-500 ml-2">
                        ({item.students} students)
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Upcoming Events</h2>
              <Calendar className="w-5 h-5 opacity-90" />
            </div>

            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="bg-white/10 p-4 rounded-lg">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold">{event.title}</h3>
                      <div className="flex items-center gap-3 mt-2 text-sm opacity-90">
                        <span>{event.date}</span>
                        <span>{event.time}</span>
                      </div>
                      <p className="text-xs mt-2 opacity-80">
                        {event.participants}
                      </p>
                    </div>
                    <span className="px-2 py-1 bg-white/20 rounded text-xs">
                      {event.type}
                    </span>
                  </div>
                  <button className="w-full mt-3 py-2 bg-white text-indigo-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                    Add to Calendar
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Resources */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-6 h-6 text-indigo-600" />
              <h2 className="text-lg font-semibold text-gray-800">
                Quick Resources
              </h2>
            </div>

            <div className="space-y-4">
              <a
                href="#"
                className="flex items-center justify-between p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-gray-900">
                    Career Assessment Tests
                  </span>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
              </a>

              <a
                href="#"
                className="flex items-center justify-between p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Brain className="w-5 h-5 text-green-600" />
                  <span className="font-medium text-gray-900">
                    Study Skills Guide
                  </span>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-green-600" />
              </a>

              <a
                href="#"
                className="flex items-center justify-between p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-purple-600" />
                  <span className="font-medium text-gray-900">
                    Scholarship Opportunities
                  </span>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-600" />
              </a>
            </div>
          </div>

          {/* Tips & Advice */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-6 text-white">
            <div className="flex items-center gap-3 mb-4">
              <Lightbulb className="w-6 h-6" />
              <h2 className="text-lg font-semibold">Counselor's Tip</h2>
            </div>
            <p className="text-sm opacity-90">
              "Encourage students to maintain a study journal. Tracking study
              hours and topics helps identify patterns and improve time
              management."
            </p>
            <button className="mt-4 px-4 py-2 bg-white text-green-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Share with Students
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Workshop Schedule */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Workshop Schedule
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
              <div>
                <h3 className="font-medium text-gray-900">
                  Time Management Masterclass
                </h3>
                <p className="text-sm text-gray-600">
                  Jan 22 • 3 PM • Auditorium
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-md">
                    45 Registered
                  </span>
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-md">
                    Active
                  </span>
                </div>
              </div>
              <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700">
                Details
              </button>
            </div>

            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg">
              <div>
                <h3 className="font-medium text-gray-900">
                  Career Path Discovery
                </h3>
                <p className="text-sm text-gray-600">
                  Jan 24 • 2 PM • Conference Room
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-md">
                    32 Registered
                  </span>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-md">
                    Upcoming
                  </span>
                </div>
              </div>
              <button className="px-3 py-1 bg-purple-600 text-white text-sm rounded-lg hover:bg-purple-700">
                Register
              </button>
            </div>
          </div>
        </div>

        {/* Achievement Board */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Student Achievements
            </h2>
            <Award className="w-5 h-5 text-yellow-500" />
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold">
                R
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Rohan Kumar</h3>
                <p className="text-sm text-gray-600">
                  Won Science Olympiad • Scholarship awarded
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
              <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center text-white font-bold">
                P
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Priya Sharma</h3>
                <p className="text-sm text-gray-600">
                  Improved from 65% to 82% in 3 months
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                A
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Amit Verma</h3>
                <p className="text-sm text-gray-600">
                  Selected for National Math Competition
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCounselorDashboard;
