import {
    DetailedHTMLProps, HTMLAttributes, PropsWithoutRef, ReactNode,
} from "react";

export interface TagProps extends PropsWithoutRef<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>>{
    children: ReactNode;
    color?: "ghost" | "red" | "green" | "grey" | "primary";
    href?: string;
    size?: "s" | "m";
}
