import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { ContactsForm } from '../../../components/ui/form/contacts-form';
import { useSelector } from '../../../store/store';
import {
  getErrorSelector,
  getLoaderSelector,
  getOrderInfoSelector
} from '../../../store/dataSlice';
import { Preloader } from '../../../components/ui/preloader/preloader';

import styles from './contacts.module.css';

export const ContactsPage = () => {
  const navigate = useNavigate();
  const loader = useSelector(getLoaderSelector);
  const postError = useSelector(getErrorSelector);
  const orderInfo = useSelector(getOrderInfoSelector);

  useEffect(() => {
    if (orderInfo.ID === '') {
      navigate('/', { replace: true, state: { from: 'form' } });
    }
  }, []);

  return (
    <>
      {!loader && postError === undefined && (
        <section className={styles.contacts}>
          <h2 className={styles.title}>Оставьте свои данные</h2>
          <ContactsForm />
        </section>
      )}
      {loader && <Preloader />}
      {postError !== undefined && (
        <p className={styles.postError}>
          Ошибка! Попробуйте перезагрузить страницу
        </p>
      )}
    </>
  );
};
