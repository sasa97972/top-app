import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    appearance?: "primary" | "secondary";
    arrow?: "down" | "right" | "none";
    children: ReactNode;
}
