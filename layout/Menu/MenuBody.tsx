import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { topLevelMenu } from './config';
import styles from './Menu.module.scss';
import {
  IMenuBodyProps,
  IMenuSecondItem,
  IMenuSecondLevel,
  IMenuThirdLevel,
} from './MenuBodyProps';
import { getParsedPathName } from '../../helpers';

function MenuThirdLevel({ pages, route }: IMenuThirdLevel) {
  const router = useRouter();
  return (
    <>
      {pages.map(({ alias, _id: id, title }) => {
        const pagePathName = `/${route}/${alias}`;
        return (
          <Link
            href={pagePathName}
            key={id}
            className={classNames(styles.thirdLevel, {
              [styles.active]: pagePathName === getParsedPathName(router),
            })}
          >
            {title}
          </Link>
        );
      })}
    </>
  );
}

function MenuSecondItem({
  isOpenedDefault,
  name,
  pages,
  route,
}: IMenuSecondItem) {
  const [isOpened, setIsOpened] = useState<boolean>(isOpenedDefault);

  return (
    <div key={name}>
      <span
        className={classNames(styles.secondLevel, {
          [styles.active]: isOpenedDefault,
        })}
        onClick={():void => setIsOpened(!isOpened)}
      >
        {name}
      </span>
      <nav className={classNames(styles.thirdLevelNav, {
        [styles.opened]: isOpened,
      })}
      >
        <MenuThirdLevel pages={pages} route={route} />
      </nav>
    </div>
  );
}

function MenuSecondLevel({ menu, route }: IMenuSecondLevel) {
  const router = useRouter();

  return (
    <div className={styles.secondBlock}>
      {menu.map(({ _id: { secondCategory: name }, pages }) => {
        const isOpenedDefault = pages.some((page) => `/${route}/${page.alias}` === getParsedPathName(router));
        return (
          <MenuSecondItem
            isOpenedDefault={isOpenedDefault}
            key={name}
            name={name}
            pages={pages}
            route={route}
          />
        );
      })}
    </div>
  );
}

export function MenuBody({ category, menu }: IMenuBodyProps) {
  return (
    <>
      {topLevelMenu.map(({
        icon, id, route, name,
      }) => (
        <div key={id}>
          <Link
            href={`/${route}`}
            className={classNames(styles.firstLevel, {
              [styles.active]: id === category,
            })}
          >
            {icon}
            <span>{name}</span>
          </Link>
          {id === category && <MenuSecondLevel menu={menu} route={route} />}
        </div>
      ))}
    </>
  );
}
