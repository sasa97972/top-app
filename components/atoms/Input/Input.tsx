import classNames from "classnames";
import styles from "./Input.module.scss";
import { IInputProps } from "./Input.props";

export function Input({ className, ...props }: IInputProps) {
    return <input className={classNames(className, styles.input)} {...props} />;
}
