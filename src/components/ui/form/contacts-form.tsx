import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import MaskedInput from 'react-input-mask';
import cn from 'classnames';

import { useDispatch, useSelector } from '../../../store/store';
import {
  addClientInfoToOrder,
  getErrorSelector,
  getLoaderSelector,
  getOrderInfoSelector,
  postOrderThunk
} from '../../../store/dataSlice';
import { Button } from '../button/button';

import styles from './form.module.css';

type FormData = {
  ClientName: string;
  Phone: string;
  Email: string;
};

export const ContactsForm = () => {
  const orderInfo = useSelector(getOrderInfoSelector);
  const loader = useSelector(getLoaderSelector);
  const postError = useSelector(getErrorSelector);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>();
  const [formData, setFormData] = useState<FormData>({
    ClientName: orderInfo.CLIENTNAME,
    Phone: orderInfo.PHONE,
    Email: orderInfo.EMAIL
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (formValue: FormData) => {
    console.log({
      ...orderInfo,
      CLIENTNAME: formValue.ClientName,
      PHONE: formValue.Phone,
      EMAIL: formValue.Email
    });
    dispatch(
      postOrderThunk({
        ...orderInfo,
        CLIENTNAME: formValue.ClientName,
        PHONE: formValue.Phone,
        EMAIL: formValue.Email
      })
    );
    if (!loader && postError === undefined) {
      navigate('/success', { replace: true, state: { from: 'form' } });
    }
  };

  const handleBackwards = () => {
    dispatch(addClientInfoToOrder(formData));
    navigate(-1);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.inputbox}>
          <p className={styles.textInfo}>Ваше имя:</p>
          <input
            type='text'
            placeholder='Имя'
            {...register('ClientName', {
              required: true,
              pattern: /[A-Za-zА-Яа-яЁё]/,
              onChange: (e) => {
                setFormData({ ...formData, ClientName: e.target.value });
              },
              value: orderInfo.CLIENTNAME
            })}
            aria-invalid={errors.ClientName ? 'true' : 'false'}
            className={cn(
              styles.input,
              errors.ClientName ? styles.inputError : ''
            )}
            onKeyDown={(e) => {
              if (e.key.match(/[^A-Za-zА-Яа-яЁё]/)) return e.preventDefault();
            }}
          />
          {errors.ClientName?.type === 'required' && (
            <p role='alert' className={styles.error}>
              Введите свое имя
            </p>
          )}
          {errors.ClientName?.type === 'pattern' && (
            <p role='alert' className={styles.error}>
              Имя должно состоять из букв русского или латинского алфавита
            </p>
          )}
        </div>
        <div className={styles.inputbox}>
          <p className={styles.textInfo}>Номер телефона: </p>
          <MaskedInput
            mask='(999)999-99-99'
            alwaysShowMask={false}
            maskPlaceholder=''
            type='tel'
            placeholder='(___)___-__-__'
            {...register('Phone', {
              required: true,
              pattern:
                /\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}/,
              onChange: (e) => {
                setFormData({ ...formData, Phone: e.target.value });
              },
              value: orderInfo.PHONE
            })}
            aria-invalid={errors.Phone ? 'true' : 'false'}
            className={cn(styles.input, errors.Phone ? styles.inputError : '')}
          />
          {errors.Phone?.type === 'required' && (
            <p role='alert' className={styles.error}>
              Введите свой номер телефона
            </p>
          )}
          {errors.Phone?.type === 'pattern' && (
            <p role='alert' className={styles.error}>
              Введите номер телефона в формате (9XX)XXX-XX-XX
            </p>
          )}
        </div>
        <div className={styles.inputbox}>
          <p className={styles.textInfo}>Адрес электронной почты:</p>
          <input
            type='email'
            placeholder='Email'
            {...register('Email', {
              required: true,
              pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              onChange: (e) =>
                setFormData({ ...formData, Email: e.target.value }),
              value: orderInfo.EMAIL
            })}
            aria-invalid={errors.Email ? 'true' : 'false'}
            className={cn(styles.input, errors.Email ? styles.inputError : '')}
          />
          {errors.Email?.type === 'required' && (
            <p role='alert' className={styles.error}>
              Введите свой email aдрес
            </p>
          )}
          {errors.Email?.type === 'pattern' && (
            <p role='alert' className={styles.error}>
              Неверно введенный адрес
            </p>
          )}
        </div>
        <p className={styles.textInfo}>Все поля обязательны для заполнения</p>
        <div className={styles.buttons}>
          <div className={styles.button}>
            <Button
              label='Назад'
              color='light'
              disabled={false}
              type='button'
              onClick={handleBackwards}
            />
          </div>
          <div className={styles.button}>
            <Button
              label='Заказать'
              color='blue'
              disabled={
                formData.ClientName === '' ||
                formData.Email === '' ||
                formData.Phone === ''
                  ? true
                  : false
              }
              type='submit'
            />
          </div>
        </div>
      </form>
    </>
  );
};
