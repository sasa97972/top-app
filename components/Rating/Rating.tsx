import { KeyboardEvent, MouseEvent, useCallback, useEffect, useState } from "react";
import IconStar from "./star.svg";
import { RatingProps } from "./Rating.props";
import cn from "classnames";
import styles from "./Rating.module.scss";

const MAX_RATING = 5;

const buildRating = (rating: number, isEditable: boolean, setRating?: (rating: number) => void): JSX.Element[] =>
	Array.from({ length: MAX_RATING }, (_, index: number): JSX.Element => (
		<IconStar
			className={cn(styles.star, {
				[styles.filled]: index < rating,
				[styles.editable]: isEditable,
			})}
			data-rating={index + 1}
			onClick={isEditable ? () => setRating && setRating(index + 1) : undefined}
			onKeyDown={isEditable ? (e: KeyboardEvent<SVGSVGElement>) => {
				if (e.key === "Enter") {
					setRating && setRating(index + 1);
				}
			} : undefined}
			key={index}
			tabIndex={isEditable ? 0 : -1}
		/>
	));

export const Rating = ({ rating, setRating, isEditable = false, ...props }: RatingProps): JSX.Element => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(buildRating(rating, isEditable, setRating));

	const onMouseOver = useCallback((event: MouseEvent) => {
		const target = event.target as HTMLElement;
		const svg: HTMLElement | SVGSVGElement | null = target.tagName === "SVG" ? target : target.closest("svg");
		if (svg?.dataset?.rating) {
			setRatingArray(buildRating(Number(svg.dataset.rating), isEditable, setRating));
		}
	}, [isEditable, setRating]);

	const setDefaultRating = useCallback(
		() => setRatingArray(buildRating(rating, isEditable, setRating)),
		[isEditable, rating, setRating]
	);

	useEffect(() => {
		setDefaultRating();
	}, [setDefaultRating]);

	return (
		<div
			{...props}
			onMouseLeave={isEditable ? setDefaultRating : undefined}
			onMouseOver={isEditable ? onMouseOver : undefined}
		>
			{ ratingArray }
		</div>
	);
};
