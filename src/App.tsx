import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import './styles/emptyStates.css';

// Layout components
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

// Page components
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import EventsPage from './pages/EventsPage';
import BlogsPage from './pages/BlogsPage';
import ContactPage from './pages/ContactPage';
import DonatePage from './pages/DonatePage';
import NotFoundPage from './pages/NotFoundPage';

// Detail components
import EventDetail from './components/EventDetail';
import BlogDetail from './components/BlogDetail';
import NewsDetail from './components/NewsDetail';
import ProjectDetail from './components/Projects/ProjectDetail';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/events/:eventId" element={<EventDetail />} />
            <Route path="/blog" element={<BlogsPage />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/blog/category/:categorySlug" element={<BlogsPage />} />
            <Route path="/news/:slug" element={<NewsDetail />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/donate" element={<DonatePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;