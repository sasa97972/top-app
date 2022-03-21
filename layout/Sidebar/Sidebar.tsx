import classNames from "classnames";
import { Menu } from "../Menu";
import { SidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.scss";

export function Sidebar({ className, ...props }: SidebarProps) {
    return (
        <aside className={classNames(styles.sidebar, className)} {...props}>
            <Menu />
        </aside>
    );
}
