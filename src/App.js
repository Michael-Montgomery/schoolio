import logo from './logo.svg';
import './App.css';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Schools from './pages/schools/schools';
import School from './pages/school/school';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schools" element={<Schools />} />
        <Route path="/school/:identifier/:name" element={<School />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
