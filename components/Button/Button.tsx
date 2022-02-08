import ArrowIcon from "./arrow.svg";
import { ButtonProps } from "./Button.props";
import cn from "classnames";
import styles from "./Button.module.scss";

export const Button = ({
	appearance = "primary",
	arrow = "none",
	children,
	className,
	...buttonProps
}: ButtonProps): JSX.Element => {
	return (
		<button
			{ ...buttonProps }
			className={cn(styles.button, className, {
				[styles.primary]: appearance === "primary",
				[styles.secondary]: appearance === "secondary",
			})}
		>
			{children}
			{arrow !== "none" && (
				<span className={cn(styles.arrow, {
					[styles.down]: arrow === "down",
				})}>
					<ArrowIcon />
				</span>
			)}
		</button>
	);
};
