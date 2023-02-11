import cn from 'classnames';
import { format } from 'date-fns';
import styles from './Footer.module.scss';
import { FooterProps } from './Footer.props';

export function Footer({ className, ...props }: FooterProps) {
  return (
    <footer {...props} className={cn(styles.footer, className)}>
      <div className={styles.copyright}>
        <span>
          OwlTop ©
          {format(new Date(), 'yyyy')}
          {' '}
          Все права защищены
        </span>
      </div>
      <nav className={styles.nav}>
        <a href="#" target="_blank" className={styles.link}>Пользовательское соглашение</a>
        <a href="#" target="_blank" className={styles.link}>Политика конфиденциальности</a>
      </nav>
    </footer>
  );
}
