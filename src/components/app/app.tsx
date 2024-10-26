import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Home } from '../pages/home/home';
import { ContactsPage } from '../pages/contacts/contacts';
import { SuccessPage } from '../pages/success/success';

import styles from './app.module.css';
import { NotFoundPage } from '../pages/not-found/not-found-page';
import { useDispatch } from '../../store/store';
import { getGiftCards } from '../../utils/api';
import { getGiftsThunk } from '../../store/dataSlice';

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGiftsThunk());
  }, []);

  return (
    <>
      <main className={styles.app}>
        <Routes>
          <Route path='*' element={<NotFoundPage />} />
          <Route path='/' element={<Home />} />
          <Route path='/form' element={<ContactsPage />} />
          <Route path='/success' element={<SuccessPage />} />
        </Routes>
      </main>
    </>
  );
};
export default App;
