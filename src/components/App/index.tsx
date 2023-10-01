import React from 'react';
import './index.css';

import AppContent from 'components/AppContent';

import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
