import { useState } from 'react';
import { SelectInput } from '../../../components/ui/select/select';
import styles from './home.module.css';
import { SubmitButton } from '../../../components/ui/submit-button/submit-button';

export const Home = () => {
  const [nominal, setNominal] = useState<string>('');

  return (
    <>
      <section className={styles.content}>
        <h1 className={styles.title}>
          Выберите номинал подарочного сертификата
        </h1>
        <SelectInput
          nominal={nominal}
          setNominal={setNominal}
          label='Вариант сертификата'
        />
        <SubmitButton
          label='Купить'
          disabled={false}
          color='blue'
          type='submit'
        />
        <p className={styles.text}>К оплате: xx рублей</p>
      </section>
    </>
  );
};
