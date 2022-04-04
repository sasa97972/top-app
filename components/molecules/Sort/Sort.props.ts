import { DetailedHTMLProps, HTMLAttributes, PropsWithoutRef } from "react";
import { SortEnum } from "../../../enums/sort.enum";

export interface ISortProps extends PropsWithoutRef<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> {
    setSort: (sort: SortEnum) => void;
    sort: SortEnum;
}
