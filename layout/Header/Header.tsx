import cn from 'classnames';
import styles from './Header.module.scss';
import { HeaderProps } from './Header.props';

export function Header({ className, ...props }: HeaderProps) {
  return (
    <header className={cn(styles.header, className)} {...props}>
      <h3>Header</h3>
    </header>
  );
}
