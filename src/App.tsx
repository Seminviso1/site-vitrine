import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PatentsPage from './pages/PatentsPage';
import TrademarksPage from './pages/TrademarksPage';
import IndustrialDesignsPage from './pages/IndustrialDesignsPage';
import SoftwarePage from './pages/SoftwarePage';
import HardwareCircuitsPage from './pages/HardwareCircuitsPage';
import SustainableTechnologiesPage from './pages/SustainableTechnologiesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/patents" element={<PatentsPage />} />
        <Route path="/trademarks" element={<TrademarksPage />} />
        <Route path="/industrial-designs" element={<IndustrialDesignsPage />} />
        <Route path="/software" element={<SoftwarePage />} />
        <Route path="/hardware-circuits" element={<HardwareCircuitsPage />} />
        <Route path="/sustainable-technologies" element={<SustainableTechnologiesPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
