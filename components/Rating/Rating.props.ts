import { DetailedHTMLProps, HTMLAttributes, PropsWithoutRef } from "react";

export interface RatingProps extends PropsWithoutRef<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>>{
    isEditable?: boolean;
    rating: number;
    setRating?: (rating: number) => void;
}
