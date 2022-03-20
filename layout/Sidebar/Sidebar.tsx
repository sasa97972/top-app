import { Menu } from "../Menu";
import { SidebarProps } from "./Sidebar.props";
import classNames from "classnames";
import styles from "./Sidebar.module.scss";

export const Sidebar = ({ className, ...props }: SidebarProps) => {
	return (
		<aside className={classNames(styles.sidebar, className)} {...props}>
			<Menu />
		</aside>
	);
};
