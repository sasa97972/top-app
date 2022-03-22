import cn from "classnames";
import styles from "./Paragraph.module.scss";
import { ParagraphProps } from "./Paragraph.props";

export function Paragraph({
    children, size = "m", className, ...props
}: ParagraphProps): JSX.Element {
    return (
        <p
            {...props}
            className={cn(styles.p, className, {
                [styles.s]: size === "s",
                [styles.m]: size === "m",
                [styles.l]: size === "l",
            })}
        >
            {children}
        </p>
    );
}
