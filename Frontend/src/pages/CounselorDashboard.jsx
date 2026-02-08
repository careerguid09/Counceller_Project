// CounselorDashboard.jsx - WITH EXCEL EXPORT FEATURE
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  FaUserFriends, 
  FaBriefcaseMedical, 
  FaGraduationCap, 
  FaBrain, 
  FaUserGraduate,
  FaUserMd,
  FaTachometerAlt,
  FaCalendarAlt,
  FaClock,
  FaUsers,
  FaRupeeSign,
  FaStar,
  FaArrowRight,
  FaHome,
  FaChartLine,
  FaUserCircle,
  FaCog,
  FaBell,
  FaFileExcel,     
  FaDownload,       
  FaSpinner         
} from "react-icons/fa";
import { motion } from "framer-motion";

const CounselorDashboard = () => {
  const navigate = useNavigate();
  const [counselorProfile, setCounselorProfile] = useState(null);
  const [activeTab, setActiveTab] = useState("categories");
  const [todaySessions, setTodaySessions] = useState([]);
  const [exporting, setExporting] = useState(false); //  LOADING STATE

  useEffect(() => {
    // Check if counselor is logged in
    const savedProfile = localStorage.getItem("counselorProfile");
    const token = localStorage.getItem("counselorToken");
    
    if (!savedProfile || !token) {
      navigate("/");
      return;
    }
    
    setCounselorProfile(JSON.parse(savedProfile));
    
    // Mock today's sessions data
    setTodaySessions([
      { id: 1, client: "Priya Sharma", time: "10:00 AM", type: "Career", status: "confirmed" },
      { id: 2, client: "Rohan Patel", time: "11:30 AM", type: "Relationship", status: "confirmed" },
      { id: 3, client: "Amit Kumar", time: "2:00 PM", type: "Educational", status: "pending" },
      { id: 4, client: "Sneha Gupta", time: "4:30 PM", type: "Mental Health", status: "confirmed" },
    ]);
  }, [navigate]);

  // EXCEL EXPORT FUNCTION
  const handleExportToExcel = async () => {
    try {
      setExporting(true);
      const token = localStorage.getItem("counselorToken");
      
      if (!token) {
        alert("Session expired. Please login again.");
        navigate("/");
        return;
      }

      console.log("📥 Requesting Excel export...");
      
      // API call to download Excel
      const response = await fetch("http://localhost:5000/api/clients/export/excel", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Accept": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Export failed (${response.status}): ${errorText}`);
      }

      // Get filename from headers or create one
      const contentDisposition = response.headers.get('Content-Disposition');
      let filename = `clients_export_${new Date().toISOString().split('T')[0]}.xlsx`;
      
      if (contentDisposition) {
        const match = contentDisposition.match(/filename="(.+)"/);
        if (match) filename = match[1];
      }

      // Convert response to blob
      const blob = await response.blob();
      
      // Check if it's actually an Excel file
      if (blob.size === 0) {
        throw new Error("Received empty file from server");
      }

      // Create download link
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      
      // Cleanup
      setTimeout(() => {
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      }, 100);

      console.log(` Excel file "${filename}" downloaded successfully (${(blob.size / 1024).toFixed(2)} KB)`);
      
      // Show success notification
      alert(` Excel file downloaded successfully!\n\nFilename: ${filename}\nSize: ${(blob.size / 1024).toFixed(2)} KB`);

    } catch (error) {
      console.error("❌ Export error:", error);
      alert(`❌ Export failed!\n\n${error.message}\n\nPlease check console for details.`);
    } finally {
      setExporting(false);
    }
  };

  // Counselor categories
  const counselorCategories = [
    {
      id: 1,
      name: "Relationship Counseling",
      icon: <FaUserFriends />,
      path: "/counselors/dashboard/relationship",
      description: "Marriage, Family & Relationship Guidance",
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
      gradient: "from-pink-500 to-rose-500",
      stats: { clients: 45, sessions: 120, rating: 4.8 }
    },
    {
      id: 2,
      name: "Career Counseling",
      icon: <FaBriefcaseMedical />,
      path: "/counselors/dashboard/career",
      description: "Career Planning & Professional Development",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      gradient: "from-blue-500 to-cyan-500",
      stats: { clients: 62, sessions: 180, rating: 4.9 }
    },
    {
      id: 3,
      name: "Educational Counseling",
      icon: <FaGraduationCap />,
      path: "/counselors/dashboard/educational",
      description: "Academic Guidance & Study Planning",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      gradient: "from-purple-500 to-violet-500",
      stats: { clients: 38, sessions: 95, rating: 4.7 }
    },
    {
      id: 4,
      name: "Mental Health Counseling",
      icon: <FaBrain />,
      path: "/counselors/dashboard/mental-health",
      description: "Stress, Anxiety & Emotional Support",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      gradient: "from-green-500 to-emerald-500",
      stats: { clients: 52, sessions: 145, rating: 4.8 }
    },
    {
      id: 5,
      name: "Student Counseling",
      icon: <FaUserGraduate />,
      path: "/counselors/dashboard/student",
      description: "Student Life & Academic Challenges",
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      gradient: "from-amber-500 to-yellow-500",
      stats: { clients: 41, sessions: 110, rating: 4.6 }
    },
    {
      id: 6,
      name: "Health & Wellness",
      icon: <FaUserMd />,
      path: "/counselors/dashboard/health",
      description: "Wellness Coaching & Lifestyle Counseling",
      color: "text-teal-600",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
      gradient: "from-teal-500 to-cyan-500",
      stats: { clients: 33, sessions: 85, rating: 4.8 }
    },
  ];

  const handleCategoryClick = (category) => {
    navigate(category.path);
  };

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("counselorToken");
      if (token) {
        await fetch("http://localhost:5000/api/counselor/logout", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
    } catch (err) {
      console.error("Logout failed", err);
    } finally {
      localStorage.removeItem("counselorToken");
      localStorage.removeItem("counselorProfile");
      navigate("/");
    }
  };

  if (!counselorProfile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-600 border-t-transparent mx-auto"></div>
          <p className="mt-6 text-gray-600 text-lg">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
  

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-8">
        {/* Welcome Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-8 text-white shadow-lg"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-3">Welcome back, {counselorProfile.name}! 👋</h2>
              <p className="text-blue-100 max-w-2xl">
                You have {todaySessions.length} sessions scheduled for today. 
                Select a counseling category below to manage your clients and schedule.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
           
              <button 
                onClick={() => setActiveTab("sessions")}
                className="px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl transition-colors flex items-center gap-2"
              >
                <FaCalendarAlt />
                View Schedule
              </button>
              <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors">
                Quick Actions
              </button>
            </div>
          </div>
        </motion.div>

        {/* EXPORT DATA SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 mb-8 text-white shadow-lg"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <FaFileExcel className="text-2xl" />
                <h3 className="text-xl font-bold">Get All Students Data </h3>
              </div>
              <p className="text-green-100 mb-4">
                Download complete client information including personal details, education, counseling status, and more in Excel format.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Personal Details</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Education Info</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Contact Info</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Status Tracking</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Timestamps</span>
              </div>
            </div>
            <div className="flex-shrink-0">
              <button 
                onClick={handleExportToExcel}
                disabled={exporting}
                className={`px-8 py-3 bg-white text-green-700 hover:bg-gray-100 font-bold rounded-xl transition-all transform hover:scale-105 flex items-center justify-center gap-3 shadow-lg ${exporting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {exporting ? (
                  <>
                    <FaSpinner className="animate-spin text-xl" />
                    <span>Preparing Excel...</span>
                  </>
                ) : (
                  <>
                    <FaDownload className="text-xl" />
                    <span>Download Excel File</span>
                  </>
                )}
              </button>
              <p className="text-green-100 text-sm text-center mt-2">
                One-click download • Auto-formatted • Ready for analysis
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Today's Sessions</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{todaySessions.length}</p>
              </div>
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                <FaCalendarAlt className="text-blue-600 text-xl" />
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-green-600 text-sm font-medium">+2 from yesterday</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Active Clients</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">258</p>
              </div>
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                <FaUsers className="text-green-600 text-xl" />
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-green-600 text-sm font-medium">+12 this week</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Avg. Rating</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">4.8/5</p>
              </div>
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center">
                <FaStar className="text-amber-600 text-xl" />
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-gray-500 text-sm">Based on 128 reviews</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Monthly Revenue</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">₹85,420</p>
              </div>
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center">
                <FaRupeeSign className="text-purple-600 text-xl" />
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-green-600 text-sm font-medium">+18% from last month</p>
            </div>
          </motion.div>
        </div>

        {/* Tabs for Navigation */}
        <div className="flex border-b border-gray-200 mb-8">
          <button
            onClick={() => setActiveTab("categories")}
            className={`px-6 py-3 font-medium text-sm border-b-2 transition-colors ${
              activeTab === "categories" 
                ? "border-blue-600 text-blue-600" 
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Counseling Categories
          </button>
          <button
            onClick={() => setActiveTab("sessions")}
            className={`px-6 py-3 font-medium text-sm border-b-2 transition-colors ${
              activeTab === "sessions" 
                ? "border-blue-600 text-blue-600" 
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Today's Sessions
          </button>
          <button
            onClick={() => setActiveTab("clients")}
            className={`px-6 py-3 font-medium text-sm border-b-2 transition-colors ${
              activeTab === "clients" 
                ? "border-blue-600 text-blue-600" 
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Recent Clients
          </button>
          <button
            onClick={() => setActiveTab("export")}
            className={`px-6 py-3 font-medium text-sm border-b-2 transition-colors ${
              activeTab === "export" 
                ? "border-green-600 text-green-600" 
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            <span className="flex items-center gap-2">
              <FaFileExcel />
              Data Export
            </span>
          </button>
        </div>

        {/* Categories Grid - MAIN CONTENT */}
        {activeTab === "categories" && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Select Counseling Category</h2>
                <p className="text-gray-600 mt-1">Choose your specialization area to continue</p>
              </div>
              <div className="text-sm text-gray-500 bg-gray-100 px-4 py-2 rounded-full">
                {counselorCategories.length} categories available
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {counselorCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.08)" 
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden cursor-pointer group"
                  onClick={() => handleCategoryClick(category)}
                >
                  {/* Card Top with Gradient */}
                  <div className={`h-2 bg-gradient-to-r ${category.gradient}`}></div>
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-5">
                      <div className={`p-3 rounded-xl ${category.bgColor} shadow-sm`}>
                        <div className={`${category.color} text-2xl`}>
                          {category.icon}
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-700 mb-2">
                          {category.stats.clients} Clients
                        </span>
                        <div className="flex items-center">
                          <FaStar className="text-amber-500 text-sm mr-1" />
                          <span className="text-sm font-medium">{category.stats.rating}</span>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {category.description}
                    </p>
                    
                    {/* Stats Bar */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-gray-900">{category.stats.sessions}</p>
                        <p className="text-xs text-gray-500">Sessions</p>
                      </div>
                      <div className="w-px h-8 bg-gray-200"></div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-gray-900">{category.stats.rating}/5</p>
                        <p className="text-xs text-gray-500">Rating</p>
                      </div>
                      <div className="w-px h-8 bg-gray-200"></div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-gray-900">{category.stats.clients}</p>
                        <p className="text-xs text-gray-500">Clients</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Card Footer */}
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between group-hover:bg-gray-100 transition-colors">
                    <span className="text-sm font-medium text-gray-700">
                      Click to access dashboard
                    </span>
                    <div className={`${category.color} text-xl transform group-hover:translate-x-2 transition-transform`}>
                      <FaArrowRight />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Today's Sessions Tab */}
        {activeTab === "sessions" && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
          >
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Today's Sessions</h3>
              <div className="space-y-4">
                {todaySessions.map((session) => (
                  <div key={session.id} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        session.status === 'confirmed' ? 'bg-green-50' : 'bg-amber-50'
                      }`}>
                        <FaClock className={
                          session.status === 'confirmed' ? 'text-green-600' : 'text-amber-600'
                        } />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{session.client}</h4>
                        <p className="text-sm text-gray-500">{session.type} Counseling</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">{session.time}</p>
                      <span className={`text-xs px-3 py-1 rounded-full ${
                        session.status === 'confirmed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {session.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Data Export Tab */}
        {activeTab === "export" && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
          >
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-green-50 rounded-xl">
                  <FaFileExcel className="text-green-600 text-2xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Export Client Data</h3>
                  <p className="text-gray-600">Download complete client database in Excel format</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <FaDownload className="text-blue-600" />
                    What's Included
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Client personal information (Name, Email, Phone)
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Demographic details (Country, State, City)
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Education and career preferences
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Counseling status and progress
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Timestamps and activity logs
                    </li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <FaFileExcel className="text-green-600" />
                    File Features
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      Professionally formatted Excel file
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      Color-coded status indicators
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      Auto-adjusted column widths
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      Ready for data analysis
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      Secure and encrypted download
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center p-8 border-2 border-dashed border-gray-300 rounded-2xl bg-gray-50">
                <FaFileExcel className="text-5xl text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">Ready to Export?</h4>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  Click the button below to download all client data in a single Excel file. The download will start immediately.
                </p>
                <button 
                  onClick={handleExportToExcel}
                  disabled={exporting}
                  className={`px-10 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-3 mx-auto ${exporting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {exporting ? (
                    <>
                      <FaSpinner className="animate-spin text-xl" />
                      <span>Generating Excel File...</span>
                    </>
                  ) : (
                    <>
                      <FaDownload className="text-xl" />
                      <span>Download Complete Database (Excel)</span>
                    </>
                  )}
                </button>
                <p className="text-gray-500 text-sm mt-4">
                  File includes all client records up to {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Footer Actions */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-600 text-sm">
              Need help? Contact support@careerguide.com
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={handleLogout}
                className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-colors"
              >
                Sign Out
              </button>
              <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors">
                Quick Help
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounselorDashboard;