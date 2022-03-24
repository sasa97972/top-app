import { DetailedHTMLProps, HTMLAttributes, PropsWithoutRef } from "react";

export interface IVacanciesProps extends PropsWithoutRef<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> {
    category: string,
    count: number,
    juniorSalary: number,
    middleSalary: number,
    seniorSalary: number,
}
