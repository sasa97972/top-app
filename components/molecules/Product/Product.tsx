import clx from 'classnames';
import Image from 'next/image';
import { useMemo } from 'react';
import styles from './Product.module.scss';
import { IProductProps } from './Product.props';
import { IMAGE_URL } from '../../../config';
import { formatSalary } from '../../../helpers';
import { Button, Divider, Tag } from '../../atoms';
import { Card } from '../Card';
import { Rating } from '../Rating';

export function Product({
  advantages,
  credit,
  categories,
  description,
  disadvantages,
  image,
  initialRating,
  oldPrice,
  price,
  reviewAvg,
  reviewCount,
  title,
}: IProductProps) {
  const priceDiff = useMemo<number | null>(
    () => (typeof oldPrice === 'number' ? price - oldPrice : null),
    [oldPrice, price],
  );

  return (
    <Card className={styles.product}>
      <div className={styles.logo}>
        <div className={styles.logoContainer}>
          <Image
            alt={title}
            className={styles.logoImg}
            fill
            src={image.search(/^https?/) !== -1 ? image : `${IMAGE_URL}${image}`}
          />
        </div>
      </div>
      <p className={styles.title}>{title}</p>
      <div className={styles.price}>
        {formatSalary(price)}
        {typeof priceDiff === 'number'
                    && <Tag className={styles.priceTag} color="green" size="s">{formatSalary(priceDiff)}</Tag>}
      </div>
      <p className={styles.credit}>
        {formatSalary(credit)}
        <span className={styles.smallText}>/мес</span>
      </p>
      <div className={styles.rating}><Rating rating={reviewAvg ?? initialRating} /></div>
      <div className={styles.tags}>
        {categories.map((category) => <Tag color="ghost" key={category}>{category}</Tag>)}
      </div>
      <p className={clx(styles.priceTitle, styles.smallTitle)}>цена</p>
      <p className={clx(styles.creditTitle, styles.smallTitle)}>кредит</p>
      <p className={clx(styles.ratingTitle, styles.smallTitle)}>
        {reviewCount}
        {' '}
        отзывов
      </p>
      <Divider className={styles.divider} />
      <div className={styles.description}>{description}</div>
      <div className={styles.features}>Features</div>
      <div className={styles.advantages}>
        <div className={styles.pros}>
          <span>Преимущества</span>
          <div>{advantages}</div>
        </div>
        {
          disadvantages && (
            <div className={styles.cons}>
              <span>Недостатки</span>
              <div>{disadvantages}</div>
            </div>
          )
        }
      </div>
      <Divider className={styles.divider} />
      <div className={styles.actions}>
        <Button appearance="primary">Узнать подробнее</Button>
        <Button appearance="secondary" arrow="right">Читать отзывы</Button>
      </div>
    </Card>
  );
}
