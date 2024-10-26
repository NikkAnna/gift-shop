import { useNavigate } from 'react-router-dom';
import { Button } from '../../../components/ui/button/button';

import styles from './not-found.module.css';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/', { replace: true, state: { from: '*' } });
  };

  return (
    <>
      <div className={styles.content}>
        <h2 className={styles.title}>404</h2>
        <p className={styles.text}>Страница не найдена</p>
        <div className={styles.button}>
          <Button
            label='Вернуться на главную страницу'
            color='white'
            type='button'
            disabled={false}
            onClick={handleClick}
          />
        </div>
      </div>
    </>
  );
};
