import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import DesignerOnboarding from './pages/DesignerOnboarding';
import ManufacturerOnboarding from './pages/ManufacturerOnboarding';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/onboarding/designer" element={<DesignerOnboarding />} />
        <Route path="/onboarding/manufacturer" element={<ManufacturerOnboarding />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
