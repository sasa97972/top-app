import { DetailedHTMLProps, HTMLAttributes, PropsWithoutRef } from "react";
import { IAdvantage } from "../../interfaces/page.interface";

export interface IAdvantagesProps extends PropsWithoutRef<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> {
    advantages: IAdvantage[];
}
