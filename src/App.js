import './styles/App.scss';

// COMPONENTS 

import Portfolio from './components/Portfolio';

// COMPONENTS 

import { Link, Route, Routes, useLocation } from 'react-router-dom';

function App() {
  const loc = useLocation(); 
  const path = loc.pathname; 
  
  return (
    <div className="App">

      <div className="nav">
        
        <div className="nav-item">
          <Link to="/" className="brand">
            EvanDaniel@evandaniel.com 
          </Link>
        </div>

        <div className="nav-item">
          | <Link to="dev" className="portfolio">
            Development 
          </Link>
        </div>

        <div className="nav-item">
          || <Link to="pi" className="portfolio">
            <span className="pi">π</span> Memorization 
          </Link>
        </div>

        <div className="nav-item" data-href="edu">
          ||| <Link to="edu" className="portfolio">
            Educational Technology 
          </Link>
        </div>

        <div className="nav-item">
          |||| <Link to="/art" className="portfolio">
            Visual Art 
          </Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<div className=""></div>}/>
        <Route path="/dev" element={<Portfolio />} />
        <Route path="/pi" element={<Portfolio />} />
        <Route path="/edu" element={<Portfolio />} />
        <Route path="/art" element={<Portfolio />} />
      </Routes>

      </div>
  );
}

export default App; 