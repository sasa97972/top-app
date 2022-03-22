import { createElement } from "react";
import styles from "./Heading.module.scss";
import { HeadingProps } from "./Heading.props";

export function Heading({ children, tag }: HeadingProps): JSX.Element {
    return createElement(tag, { className: styles[tag] }, children);
}
