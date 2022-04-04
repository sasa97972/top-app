import { DetailedHTMLProps, HTMLAttributes, PropsWithoutRef } from "react";

export interface ISkillProps extends PropsWithoutRef<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> {
    skills: string[];
}
