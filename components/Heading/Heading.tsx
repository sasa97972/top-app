import { HeadingProps } from "./Heading.props";
import { createElement } from "react";
import styles from "./Heading.module.scss";

export const Heading = ({ children, tag }: HeadingProps): JSX.Element => {
	return createElement(tag, { className: styles[tag] }, children);
};
