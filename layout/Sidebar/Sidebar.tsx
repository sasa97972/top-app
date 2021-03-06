import classNames from "classnames";
import Link from "next/link";
import { Search } from "../../components";
import Logo from "../images/logo.svg";
import { Menu } from "../Menu";
import styles from "./Sidebar.module.scss";
import { SidebarProps } from "./Sidebar.props";

export function Sidebar({ className, ...props }: SidebarProps) {
    return (
        <aside className={classNames(className, styles.sidebar)} {...props}>
            <Link href="/">
                <a className={styles.logoLink}>
                    <Logo className={styles.logo} />
                </a>
            </Link>
            <Search />
            <Menu />
        </aside>
    );
}
