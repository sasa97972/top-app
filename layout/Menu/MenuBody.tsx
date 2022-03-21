import { IMenuBodyProps, IMenuSecondLevel, IMenuThirdLevel } from "./MenuBodyProps";
import Link from "next/link";
import classNames from "classnames";
import styles from "./Menu.module.scss";
import { topLevelMenu } from "./config";

export const MenuBody = ({ category, menu }: IMenuBodyProps) =>
	<>
		{topLevelMenu.map(({ icon, id, route, name }) => (
			<div key={id}>
				<Link href={`/${route}`}>
					<a
						className={classNames(styles.firstLevel, {
							[styles.active]: id === category,
						})}
					>
						{icon}
						<span>{name}</span>
					</a>
				</Link>
				{id === category && <MenuSecondLevel menu={menu} route={route} />}
			</div>
		))}
	</>
;

const MenuSecondLevel = ({ menu, route }: IMenuSecondLevel) =>
	<div className={styles.secondBlock}>
		{menu.map(({ _id: { secondCategory: name }, isOpened, pages }) => (
			<div key={name}>
				<span className={styles.secondLevel}>{name}</span>
				<nav className={classNames(styles.thirdLevelNav, {
					[styles.opened]: isOpened,
				})}>
					<MenuThirdLevel pages={pages} route={route} />
				</nav>
			</div>
		))}
	</div>
;

const MenuThirdLevel = ({ pages, route }: IMenuThirdLevel) =>
	<>
		{pages.map(({ alias, _id: id, title }) =>
			<Link href={`/${route}/${alias}`} key={id}>
				<a
					className={classNames(styles.thirdLevel, {
						[styles.active]: false,
					})}
				>
					{title}
				</a>
			</Link>
		)}
	</>
;
