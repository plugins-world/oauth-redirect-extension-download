import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Changelog from './pages/Changelog';
import Ecosystem from './pages/Ecosystem';
import Partners from './pages/Partners';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/changelog" element={<Changelog />} />
        <Route path="/ecosystem" element={<Ecosystem />} />
        <Route path="/partners" element={<Partners />} />
      </Routes>
    </BrowserRouter>
  );
}
