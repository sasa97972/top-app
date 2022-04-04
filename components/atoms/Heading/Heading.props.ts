import {
    DetailedHTMLProps,
    HTMLAttributes,
    PropsWithoutRef,
} from "react";

export interface HeadingProps extends PropsWithoutRef<DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>> {
    tag: "h1" | "h2" | "h3";
}
