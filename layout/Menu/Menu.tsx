import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import styles from "./Menu.module.scss";
import { MenuBody } from "./MenuBody";

export function Menu() {
    const { category, menu } = useContext(AppContext);

    return (
        <nav className={styles.menu}>
            <MenuBody category={category} menu={menu} />
        </nav>
    );
}
