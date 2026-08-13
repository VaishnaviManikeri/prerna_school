import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import GalleryAdmin from './pages/admin/GalleryAdmin';
import NoticeAdmin from './pages/admin/NoticeAdmin';
import CareerAdmin from './pages/admin/CareerAdmin';
import BlogAdmin from './pages/admin/BlogAdmin';
import Gallery from './pages/Gallery';
import Notice from './pages/Notice';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import DropdownPage from "./pages/DropdownPage";
import Footer from "./components/Footer";
import CommonCTA from "./components/CommonCTA";
import PrimaryPage from "./pages/PrimaryPage";
import SecondaryPage from "./pages/SecondaryPage";
import HigherSecondaryPage from "./pages/HigherSecondaryPage";
import ExamSchedulePage from "./pages/ExamSchedulePage";  
import CurriculumPage from "./pages/CurriculumPage";
import AcademicCalendarPage from "./pages/AcademicCalendarPage";
import Admissions from "./pages/Admission";
// import Academics from "./pages/Academics/Academics";
// import Facilities from "./pages/Facilities/Facilities";
// import Gallery from "./pages/Gallery/Gallery";
// import Events from "./pages/Events/Events";
import Contact from "./pages/contact";
// import Login from "./pages/Login/Login";
// import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#F7F1E5]">

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics/primary" element={<PrimaryPage />} />
            <Route path="/academics/secondary" element={<SecondaryPage />} />
            <Route path="/academics/higher-secondary" element={<HigherSecondaryPage />} />
            <Route path="/academics/exam-schedule" element={<ExamSchedulePage />} />
            <Route path="/academics/curriculum" element={<CurriculumPage />} />
            <Route path="/academics/academic-calendar" element={<AcademicCalendarPage />} />
            <Route path="/:category/:pageId" element={<DropdownPage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
<Route path="/admissions" element={<Admissions />} />
            {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } />
          <Route path="/admin/gallery" element={
            <ProtectedRoute>
              <GalleryAdmin />
            </ProtectedRoute>
          } />
          <Route path="/admin/notices" element={
            <ProtectedRoute>
              <NoticeAdmin />
            </ProtectedRoute>
          } />
          <Route path="/admin/careers" element={
            <ProtectedRoute>
              <CareerAdmin />
            </ProtectedRoute>
          } />
          <Route path="/admin/blogs" element={
            <ProtectedRoute>
              <BlogAdmin />
            </ProtectedRoute>
          } />
          </Routes>

        </main>

        <CommonCTA />

        {/* Footer */}
        <Footer />

      </div>
    </Router>
  );
}

export default App;
