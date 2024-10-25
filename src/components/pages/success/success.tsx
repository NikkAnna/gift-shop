import { PacmanLoader } from 'react-spinners';

import styles from './success.module.css';

export const SuccessPage = () => (
  <>
    <section className={styles.content}>
      <h2 className={styles.title}>Идет оплата</h2>
      <PacmanLoader color='#fff' />
    </section>
  </>
);
