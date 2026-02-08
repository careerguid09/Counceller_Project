import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import CounselorDashboard from "./pages/Counselors/CounselorDashboard";
import CoursePagesDashboard from "./pages/Services/CoursePagesDashboard";
import CityTargetDashboard from "./pages/Services/CityTargetDashboard";
import ProtectedCounselorRoute from "./components/ProtectedCounselorRoute";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/course-pages-dashboard" element={<CoursePagesDashboard />} />
            <Route path="/city-target-dashboard" element={<CityTargetDashboard />} />


            {/* Protected Counselor Routes */}
            <Route
              path="/Counselors/Dashboard"
              element={
                <ProtectedCounselorRoute>
              <CounselorDashboard />                  
                </ProtectedCounselorRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;