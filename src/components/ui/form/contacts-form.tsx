import { useForm } from 'react-hook-form';
import cn from 'classnames';
import { SubmitButton } from '../submit-button/submit-button';

import styles from './form.module.css';

type FormData = {
  ClientName: string;
  Phone: number;
  Email: string;
};

export const ContactsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.inputbox}>
        <p className={styles.inputLabel}>Ваше имя:</p>
        <input
          type='text'
          placeholder='Имя'
          {...register('ClientName', {
            required: true,
            pattern: /[A-Za-zА-Яа-яЁё]/
          })}
          aria-invalid={errors.ClientName ? 'true' : 'false'}
          className={cn(
            styles.input,
            errors.ClientName ? styles.inputError : ''
          )}
        />
        {errors.ClientName?.type === 'required' && (
          <p role='alert' className={styles.error}>
            Введите свое имя
          </p>
        )}
        {errors.ClientName?.type === 'pattern' && (
          <p role='alert' className={styles.error}>
            Имя должно содержать буквы русского или латинского алфавита
          </p>
        )}
      </div>
      <div className={styles.inputbox}>
        <p className={styles.inputLabel}>Номер телефона: </p>
        <input
          type='tel'
          placeholder='(___)___-__-__'
          {...register('Phone', {
            required: true,
            pattern:
              /\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}/
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
            Введите номер телефона в формате 9XXXXXXXXX
          </p>
        )}
      </div>
      <div className={styles.inputbox}>
        <p className={styles.inputLabel}>Адрес электронной почты:</p>
        <input
          type='email'
          placeholder='Email'
          {...register('Email', {
            required: true,
            pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
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
          <SubmitButton
            label='Назад'
            color='light'
            disabled={false}
            type='button'
          />
        </div>
        <div className={styles.button}>
          <SubmitButton
            label='Заказать'
            color='blue'
            disabled={false}
            type='submit'
          />
        </div>
      </div>
    </form>
  );
};
