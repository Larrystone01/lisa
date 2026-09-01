import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import EventsPage from "./pages/Events";
import HomePage from "./pages/Index";
import SermonsPage from "./pages/Sermons";
import TestimonyDetailPage from "./pages/TestimonyDetail";
import TestimoniesPage from "./pages/Testimonies";
import VisitPage from "./pages/Visit";
import NavFooterWrapper from "./components/pagewrapper";

export default function App() {
  return (
    <Routes>
      <Route element={<NavFooterWrapper />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/testimonies" element={<TestimoniesPage />} />
        <Route path="/testimonies/:slug" element={<TestimonyDetailPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/sermons" element={<SermonsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/visit" element={<VisitPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}
