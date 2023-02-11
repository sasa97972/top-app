import classNames from 'classnames';
import SortIcon from './icons/sort.svg';
import styles from './Sort.module.scss';
import { ISortProps } from './Sort.props';
import { SortEnum } from '../../../enums/sort.enum';

export function Sort({
  className,
  setSort,
  sort,
  ...props
}: ISortProps) {
  return (
    <div className={classNames(className, styles.sort)} {...props}>
      <span
        className={classNames(styles.item, { [styles.active]: sort === SortEnum.Rating })}
        onClick={() => setSort(SortEnum.Rating)}
      >
        <SortIcon />
        {' '}
        По рейтингу
      </span>
      <span
        className={classNames(styles.item, { [styles.active]: sort === SortEnum.Price })}
        onClick={() => setSort(SortEnum.Price)}
      >
        <SortIcon />
        {' '}
        По цене
      </span>
    </div>
  );
}
