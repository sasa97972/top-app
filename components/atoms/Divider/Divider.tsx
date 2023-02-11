import cn from 'classnames';
import styles from './Divider.module.scss';

import { DividerProps } from './Divider.props';

export function Divider({ className, ...props }: DividerProps) {
  return <hr className={cn(styles.hr, className)} {...props} />;
}
