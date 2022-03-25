import classNames from "classnames";
import { createElement } from "react";
import styles from "./Heading.module.scss";
import { HeadingProps } from "./Heading.props";

export function Heading({
    children,
    className,
    tag,
    ...props
}: HeadingProps): JSX.Element {
    return createElement(tag, { className: classNames(className, styles[tag]), ...props }, children);
}
