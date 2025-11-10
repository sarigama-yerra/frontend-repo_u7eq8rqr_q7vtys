import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AnalysisPage from './AnalysisPage';
import CallingPage from './CallingPage';
import PricingPage from './PricingPage';
import DevelopersPage from './DevelopersPage';
import CompanyPage from './CompanyPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/analysis" element={<AnalysisPage />} />
      <Route path="/calling" element={<CallingPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/developers" element={<DevelopersPage />} />
      <Route path="/company" element={<CompanyPage />} />
    </Routes>
  );
}
