import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import TopSection from "./components/TopSection";
import JobList from "./components/JobList";
import OurValues from "./components/OurValues";
import StorySection from "./components/StorySection";
import LifeAtColoredCow from "./components/LifeAtColoredCow";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import WhoWeAre from "./components/WhoWeAre";
import Login from "./components/Login";
import Dashboard from "./components/Admin/Dashboard";
import ApplicationTracking from "./components/Admin/ApplicationTracking"; 
import HRReports from "./components/Admin/HRReports";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<JobListPage />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/WhoWeAre" element={<WhoWeAre />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/application-tracking" element={<ApplicationTracking />} />
        <Route path="/admin/hr-reports" element={<HRReports />} />
      </Routes>
    </Router>
  );
};

const Home = () => {
  return (
    <div className="home">
      <TopSection />
      <OurValues />
      <StorySection/>
      <LifeAtColoredCow/>
      <Footer/>
    </div>
  );
};

const JobListPage = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const params = {
    keyword: searchParams.get("keyword") || "",
    city: searchParams.get("city") || "",
    category: searchParams.get("category") || "",
  };

  return <JobList searchParams={params} />;
};

export default App;
