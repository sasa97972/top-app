import classNames from "classnames";
import styles from "./Textarea.module.scss";
import { ITextareaProps } from "./Textarea.props";

export function Textarea({ className, ...props }: ITextareaProps) {
    return <textarea className={classNames(className, styles.textarea)} {...props} />;
}
