import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LayoutPage from './LayoutPage';
import HomePage from './HomePage';
import soiduAutod from './soiduAutod';
import veoAutod from './veoAutod';

function App() {
  return (   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<HomePage />} />
          <Route path="soiduAutod" element={<soiduAutod />} />
          <Route path="veoAutod" element={<veoAutod />} />
       </Route>
     </Routes>
  </BrowserRouter>
  );
}

export default App;