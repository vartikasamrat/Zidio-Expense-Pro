import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewExpensePage from './pages/NewExpensePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/expenses/new" element={<NewExpensePage />} />
      </Routes>
    </Router>
  );
};

export default App;
