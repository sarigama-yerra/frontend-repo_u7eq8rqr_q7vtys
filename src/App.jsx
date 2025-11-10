import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DualCards from './components/DualCards';
import { AnalysisSection, CallingSection, PricingSection, DevelopersSection } from './components/Sections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-inter text-gray-900">
      <Navbar />
      <Hero />
      <DualCards />
      <AnalysisSection />
      <CallingSection />
      <PricingSection />
      <DevelopersSection />
      <Footer />
    </div>
  );
}

export default App;
