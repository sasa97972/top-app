import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import { MenuBody } from "./MenuBody";
import styles from "./Menu.module.scss";

export function Menu() {
    const { category, menu } = useContext(AppContext);

    return (
        <nav className={styles.menu}>
            <MenuBody category={category} menu={menu} />
        </nav>
    );
}
