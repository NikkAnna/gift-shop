import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';

import { Home } from '../pages/home/home';
import { ContactsPage } from '../pages/contacts/contacts';
import { SuccessPage } from '../pages/success/success';
import { NotFoundPage } from '../pages/not-found/not-found-page';
import { useDispatch } from '../../store/store';
import { getGiftsThunk } from '../../store/dataSlice';

import styles from './app.module.css';

const App = () => {
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
