// import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Schools from './pages/schools/schools';
import School from './pages/school/school';
import Compare from './pages/compare/compare';
import { CityProvider } from './context/citycontext';

function App() {
  return (
    <CityProvider>
      <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schools" element={<Schools />} />
        <Route path="/school/:identifier/:name" element={<School />} />
        <Route path="/compare" element={<Compare />} />
      </Routes>
    </HashRouter>
    </CityProvider>
    
  );
}

export default App;
