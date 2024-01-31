import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HeaderTabs } from './HeaderTabs';
import Home from './Home'

function App() {
  return (
    <Router>
    <div>
      <HeaderTabs />
      <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        
      </div>
    </div>
  </Router>
  );
}

export default App;
