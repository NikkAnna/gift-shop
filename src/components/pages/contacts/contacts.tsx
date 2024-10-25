import { ContactsForm } from '../../../components/ui/form/contacts-form';

import styles from './contacts.module.css';

export const ContactsPage = () => (
  <>
    <section className={styles.contacts}>
      <h2 className={styles.title}>Оставьте свои данные</h2>
      <ContactsForm />
    </section>
  </>
);
