import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './HomePage';
import SoiduAutodPage from './SoiduAutodPage';
import VeoAutodPage from './VeoAutodPage';
import TellimusPage from './TellimusPage';
import AutoLPage from './AutoLPage';
import ManguDrive from './ManguDrive';


function App() {
  return (   
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="soiduAutod" element={<SoiduAutodPage />} />
          <Route path="veoAutod" element={<VeoAutodPage />} />
          <Route path="tellimus" element={<TellimusPage />} />
          <Route path="autod" element={<AutoLPage />} />
          <Route path="mangudrive" element={<ManguDrive />} />
     </Routes>
  </BrowserRouter>
  );
} 
export default App;