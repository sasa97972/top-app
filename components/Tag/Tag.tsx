import cn from "classnames";
import { TagProps } from "./Tag.props";
import styles from "./Tag.module.scss";

export function Tag({
    children,
    size = "m",
    color = "ghost",
    href,
    className,
    ...props
}: TagProps): JSX.Element {
    return (
        <div
            {...props}
            className={cn(styles.tag, className, {
                [styles.s]: size === "s",
                [styles.m]: size === "m",
                [styles.ghost]: color === "ghost",
                [styles.red]: color === "red",
                [styles.grey]: color === "grey",
                [styles.green]: color === "green",
                [styles.primary]: color === "primary",
                [styles.link]: Boolean(href),
            })}
        >
            { href
                ? <a href={href} target="_blank" rel="noreferrer">{children}</a>
                : children}
        </div>
    );
}
