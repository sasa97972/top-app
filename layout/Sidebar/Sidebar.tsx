import classNames from 'classnames';
import Link from 'next/link';
import styles from './Sidebar.module.scss';
import { SidebarProps } from './Sidebar.props';
import { Search } from '../../components';
import Logo from '../images/logo.svg';
import { Menu } from '../Menu';

export function Sidebar({ className, ...props }: SidebarProps) {
  return (
    <aside className={classNames(className, styles.sidebar)} {...props}>
      <Link href="/" className={styles.logoLink}>
        <Logo className={styles.logo} />
      </Link>
      <Search />
      <Menu />
    </aside>
  );
}
