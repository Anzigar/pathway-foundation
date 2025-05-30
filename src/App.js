import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Fonts from "./components/ui/Fonts";

// Layout components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import Projects from "./pages/Projects";
import CurrentProjects from "./pages/CurrentProjects";
import PastProjects from "./pages/PastProjects";
import NewsEvents from "./pages/NewsEvents";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Announcements from "./pages/Announcements";
import Gallery from "./pages/Gallery";
import OurImpact from "./pages/OurImpact";
import GetInvolved from "./pages/GetInvolved";
import ContactUs from "./pages/ContactUs";
import Donate from "./pages/Donate";
import Testimonials from "./pages/Testimonials";
import MediaResources from "./pages/MediaResources";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Fonts />
      <GlobalStyles />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/current" element={<CurrentProjects />} />
          <Route path="/projects/past" element={<PastProjects />} />
          <Route path="/news-events" element={<NewsEvents />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/news-events/blog/:slug" element={<BlogDetail />} />
          <Route path="/news-events/announcements" element={<Announcements />} />
          <Route path="/news-events/gallery" element={<Gallery />} />
          <Route path="/our-impact" element={<OurImpact />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/media-resources" element={<MediaResources />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;