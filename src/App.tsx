import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import EventsPage from "./pages/Events";
import HomePage from "./pages/Index";
import TestimoniesPage from "./pages/Testimonies";
import VisitPage from "./pages/Visit";
import NavFooterWrapper from "./components/pagewrapper";

export default function App() {
  return (
    <Routes>
      <Route element={<NavFooterWrapper />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/testimonies" element={<TestimoniesPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/visit" element={<VisitPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}
