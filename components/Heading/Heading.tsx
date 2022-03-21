import { createElement } from "react";
import { HeadingProps } from "./Heading.props";
import styles from "./Heading.module.scss";

export function Heading({ children, tag }: HeadingProps): JSX.Element {
    return createElement(tag, { className: styles[tag] }, children);
}
