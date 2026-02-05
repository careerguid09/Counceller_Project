import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Booking from "./pages/Booking";
import { Helmet } from "react-helmet";

import EducationalCounselorDashboard from "./pages/Counselors/Dahboards/EducationalCounselorDashboard"; 
import RelationshipCounselorDashboard from "./pages/Counselors/Dahboards/RelationshipCounselorDashboard";

import CareerCounselorDashboard from "./pages/Counselors/Dahboards/CareerCounselorDashboard";

import MentalhealthcounselorDashboard  from "./pages/Counselors/Dahboards/MeantalHealthCounselor";

import StudentcounselorDashboard  from "./pages/Counselors/Dahboards/StudentCounselorDashboard";


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/booking" element={<Booking />} />
            <Route
              path="/Counselors/EducationalCounselorDashboard"
              element={< EducationalCounselorDashboard />}/>
            <Route
              path="/counselors/dashboard/relationship"
              element={< RelationshipCounselorDashboard />}/>

              
            <Route
              path="/counselors/dashboard/career"
              element={< CareerCounselorDashboard />}/>



            <Route
              path="/counselors/dashboard/mental-health"
              element={< MentalhealthcounselorDashboard  />}/>
            <Route
              path="/counselors/dashboard/student"
              element={< StudentcounselorDashboard  />}/>

    

          </Routes>

        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
