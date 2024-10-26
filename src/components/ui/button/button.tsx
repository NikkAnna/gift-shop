import cn from 'classnames';
import styles from './button.module.css';

export type TSubmitButtonProps = {
  onClick?: () => void;
  label: string;
  disabled: boolean;
  color: 'blue' | 'pink' | 'light' | 'white';
  type: 'button' | 'submit';
};

export const Button = (props: TSubmitButtonProps) => (
  <>
    <div>
      <button
        type={props.type}
        onClick={props.onClick}
        className={cn(
          styles.button,
          props.disabled ? styles.disabled : '',
          props.color === 'blue' ? styles.blue : '',
          props.color === 'pink' ? styles.pink : '',
          props.color === 'light' ? styles.light : '',
          props.color === 'white' ? styles.white : ''
        )}
      >
        {props.label}
      </button>
    </div>
  </>
);
