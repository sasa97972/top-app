import classNames from "classnames";
import { Menu } from "../Menu";
import styles from "./Sidebar.module.scss";
import { SidebarProps } from "./Sidebar.props";

export function Sidebar({ className, ...props }: SidebarProps) {
    return (
        <aside className={classNames(styles.sidebar, className)} {...props}>
            <Menu />
        </aside>
    );
}
