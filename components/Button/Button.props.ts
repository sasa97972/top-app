import {
    ButtonHTMLAttributes, DetailedHTMLProps, PropsWithoutRef, ReactNode,
} from "react";

export interface ButtonProps extends PropsWithoutRef<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>>{
    appearance?: "primary" | "secondary";
    arrow?: "down" | "right" | "none";
    children: ReactNode;
}
