import cn from 'classnames';
import ArrowIcon from './arrow.svg';
import styles from './Button.module.scss';
import { ButtonProps } from './Button.props';

export function Button({
  appearance = 'primary',
  arrow = 'none',
  children,
  className,
  ...buttonProps
}: ButtonProps): JSX.Element {
  return (
    <button
      type="button"
      className={cn(styles.button, className, {
        [styles.primary]: appearance === 'primary',
        [styles.secondary]: appearance === 'secondary',
      })}
      {...buttonProps}
    >
      {children}
      {arrow !== 'none' && (
        <span className={cn(styles.arrow, {
          [styles.down]: arrow === 'down',
        })}
        >
          <ArrowIcon />
        </span>
      )}
    </button>
  );
}
