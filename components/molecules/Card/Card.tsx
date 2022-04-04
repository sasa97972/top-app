import classNames from "classnames";
import styles from "./Card.module.scss";
import { ICardProps } from "./Card.props";

export function Card({
    align = "start",
    children,
    className,
    ...props
}: ICardProps) {
    return (
        <div
            className={classNames(className, styles.card, {
                [styles.alignCenter]: align === "center",
            })}
            {...props}
        >
            {children}
        </div>
    );
}
