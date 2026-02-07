import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

import EducationalCounselorDashboard from "./pages/Counselors/Dahboards/EducationalCounselorDashboard";
import RelationshipCounselorDashboard from "./pages/Counselors/Dahboards/RelationshipCounselorDashboard";

import CareerCounselorDashboard from "./pages/Counselors/Dahboards/CareerCounselorDashboard";

import MentalhealthcounselorDashboard from "./pages/Counselors/Dahboards/MeantalHealthCounselor";

import ProtectedCounselorRoute from "./components/ProtectedCounselorRoute";


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>


            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />


            <Route
              path="/Counselors/EducationalCounselorDashboard"
              element={
                <ProtectedCounselorRoute>
                  <EducationalCounselorDashboard />
                </ProtectedCounselorRoute>
              }
            />

            <Route
              path="/counselors/dashboard/relationship"
              element={
                <ProtectedCounselorRoute>
                  <RelationshipCounselorDashboard />
                </ProtectedCounselorRoute>
              }
            />

            <Route
              path="/counselors/dashboard/career"
              element={
                <ProtectedCounselorRoute>
                  <CareerCounselorDashboard />
                </ProtectedCounselorRoute>
              }
            />

            <Route
              path="/counselors/dashboard/mental-health"
              element={
                <ProtectedCounselorRoute>
                  <MentalhealthcounselorDashboard />
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
