import { PacmanLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../../components/ui/button/button';

import styles from './success.module.css';

export const SuccessPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/', { replace: true, state: { from: 'success' } });
  };

  return (
    <>
      <section className={styles.content}>
        <h2 className={styles.title}>Идет оплата</h2>
        <PacmanLoader color='#fff' />
        <div className={styles.button}>
          <Button
            label='Продолжить покупки'
            color='white'
            type='button'
            disabled={false}
            onClick={handleClick}
          />
        </div>
      </section>
    </>
  );
};
