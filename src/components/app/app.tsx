import '../../index.css';

import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Home } from '../pages/home/home';
import { ContactsPage } from '../pages/contacts/contacts';
import { SuccessPage } from '../pages/success/success';

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<ContactsPage />} />
        <Route path='/success' element={<SuccessPage />} />
      </Routes>
    </>
  );
};
export default App;
