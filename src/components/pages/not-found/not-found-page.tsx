import styles from './not-found.module.css';

export const NotFoundPage = () => (
  <>
    <div className={styles.content}>
      <h2 className={styles.title}>404</h2>
      <p className={styles.text}>Страница не найдена</p>
    </div>
  </>
);
