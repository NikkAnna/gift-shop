import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  addGiftToOrder,
  getErrorSelector,
  getGiftsSelector,
  getLoaderSelector,
  getOrderInfoSelector
} from '../../../store/dataSlice';
import { useDispatch, useSelector } from '../../../store/store';
import { SelectInput } from '../../../components/ui/select/select';
import { Button } from '../../ui/button/button';
import { Preloader } from '../../../components/ui/preloader/preloader';

import styles from './home.module.css';

export const Home = () => {
  const gifts = useSelector(getGiftsSelector);
  const loader = useSelector(getLoaderSelector);
  const postError = useSelector(getErrorSelector);
  const orderInfo = useSelector(getOrderInfoSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [nominal, setNominal] = useState<string>(orderInfo.ID);

  const getSumOfChosenGift = (id: string) => {
    const chosen = gifts.find((g) => g.ID === id);
    return Number(chosen?.SUMMA || 0);
  };

  const handleSubmit = () => {
    dispatch(addGiftToOrder({ id: nominal }));
    navigate('/form');
  };

  return (
    <>
      {!loader && postError === undefined && (
        <section className={styles.content}>
          <h1 className={styles.title}>
            Выберите номинал подарочного сертификата
          </h1>
          <form className={styles.form} onSubmit={handleSubmit}>
            <SelectInput
              nominal={nominal}
              setNominal={setNominal}
              label='Вариант сертификата'
              gifts={gifts}
            />
            <Button
              label='Оформить'
              disabled={!nominal ? true : false}
              color='blue'
              type='submit'
            />
          </form>
          <p
            className={styles.text}
          >{`К оплате: ${getSumOfChosenGift(nominal)} рублей`}</p>
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
