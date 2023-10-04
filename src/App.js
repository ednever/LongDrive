import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './HomePage';
import SoiduAutodPage from './SoiduAutodPage';
import VeoAutodPage from './VeoAutodPage';

function App() {
  return (   
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="soiduAutod" element={<SoiduAutodPage />} />
          <Route path="veoAutod" element={<VeoAutodPage />} />
     </Routes>
  </BrowserRouter>
  );
}

export default App;