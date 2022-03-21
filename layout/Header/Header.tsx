import cn from "classnames";
import { HeaderProps } from "./Header.props";
import styles from "./Header.module.scss";

export function Header({ className, ...props }: HeaderProps) {
    return (
        <header className={cn(styles.header, className)} {...props}>
            <h3>Header</h3>
        </header>
    );
}
