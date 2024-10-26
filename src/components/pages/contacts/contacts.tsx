import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { ContactsForm } from '../../../components/ui/form/contacts-form';
import { useSelector } from '../../../store/store';
import { getOrderInfoSelector } from '../../../store/dataSlice';

import styles from './contacts.module.css';

export const ContactsPage = () => {
  const navigate = useNavigate();
  const orderInfo = useSelector(getOrderInfoSelector);

  useEffect(() => {
    if (orderInfo.ID === '') {
      navigate('/', { replace: true, state: { from: 'form' } });
    }
  }, []);

  return (
    <>
      <section className={styles.contacts}>
        <h2 className={styles.title}>Оставьте свои данные</h2>
        <ContactsForm />
      </section>
    </>
  );
};
