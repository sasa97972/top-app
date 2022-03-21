import { DetailedHTMLProps, HTMLAttributes, PropsWithoutRef, ReactNode } from "react";

export interface ParagraphProps extends PropsWithoutRef<DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>>{
    children: ReactNode;
    size?: "s" | "m" | "l";
}
