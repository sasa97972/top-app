import classNames from 'classnames';
import styles from './Advantages.module.scss';
import { IAdvantagesProps } from './Advantages.props';
import CheckIcon from './icons/check.svg';
import { Heading } from '../../atoms/Heading';
import { Paragraph } from '../../atoms/Paragraph';

export function Advantages({ advantages, className, ...props }: IAdvantagesProps) {
  return (
    <div className={classNames(className, styles.advantages)} {...props}>
      <Heading tag="h2">Преимущества</Heading>
      <div className={styles.list}>
        {advantages.map((advantage) => (
          <div className={styles.item} key={advantage._id}>
            <div className={styles.itemTitle}>
              <CheckIcon />
              <Heading tag="h3">{advantage.title}</Heading>
            </div>
            <Paragraph className={styles.itemDescription} size="l">{advantage.description}</Paragraph>
          </div>
        ))}
      </div>
    </div>
  );
}
