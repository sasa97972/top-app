import { useEffect, useReducer, startTransition } from 'react';
import styles from './TopPage.module.scss';
import { ITopPageProps } from './TopPage.props';
import { SortEnum } from '../../../enums/sort.enum';
import { sortProductsByRating } from '../../../helpers/sort';
import { sortReducer } from '../../../reducers/sort.reducer';
import { Heading, Html, Tag } from '../../atoms';
import {
  Advantages,
  Product,
  Skills,
  Sort,
  Vacancies,
} from '../../molecules';

export function TopPage({ page, products }: ITopPageProps) {
  const [sortState, dispatchSort] = useReducer(sortReducer, {
    products: sortProductsByRating(products),
    sort: SortEnum.Rating,
  });

  const setSort = (sort: SortEnum): void => {
    startTransition(() => {
      dispatchSort({ type: sort });
    });
  };

  useEffect(() => {
    startTransition(() => {
      dispatchSort({ payload: products, type: 'reset' });
    });
  }, [products]);

  return (
    <article>
      <header className={styles.header}>
        <Heading className={styles.title} tag="h1">{page.title}</Heading>
        {products && <Tag className={styles.productCount} color="grey" size="m">{products.length}</Tag>}
        <Sort className={styles.toolbar} sort={sortState.sort} setSort={setSort} />
      </header>
      <div className={styles.productsList}>
        {sortState.products?.map((product) => (
          <Product key={product._id} {...product} />
        ))}
      </div>
      {page.hh && (
        <Vacancies
          category={page.category}
          count={(page.hh.count)}
          juniorSalary={page.hh.juniorSalary}
          middleSalary={page.hh.middleSalary}
          seniorSalary={page.hh.seniorSalary}
        />
      )}
      {page.advantages?.length > 0 && (
        <Advantages advantages={page.advantages} />
      )}
      {page.seoText && <div className={styles.seoText}><Html html={page.seoText} /></div>}
      {page.tags?.length > 0 && (
        <Skills skills={page.tags} />
      )}
    </article>
  );
}
