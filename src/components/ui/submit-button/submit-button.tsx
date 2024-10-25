import cn from 'classnames';
import styles from './button.module.css';

export type TSubmitButtonProps = {
  onClick?: () => void;
  label: string;
  disabled: boolean;
  color: 'blue' | 'pink' | 'light';
  type: 'button' | 'submit';
};

export const SubmitButton = (props: TSubmitButtonProps) => (
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
          props.color === 'light' ? styles.light : ''
        )}
      >
        {props.label}
      </button>
    </div>
  </>
);
