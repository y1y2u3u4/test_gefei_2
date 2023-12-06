import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage.js';
import ResultsPage from './ResultsPage.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </Router>
  );
}
export default App;