import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Steps from './components/Steps';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';
import CGU from './pages/CGU';
import Confidentialite from './pages/Confidentialite';
import MentionsLegales from './pages/MentionsLegales';

function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Steps />
        <WhyUs />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cgu" element={<CGU />} />
      <Route path="/confidentialite" element={<Confidentialite />} />
      <Route path="/mentions-legales" element={<MentionsLegales />} />
    </Routes>
    </>
  );
}

