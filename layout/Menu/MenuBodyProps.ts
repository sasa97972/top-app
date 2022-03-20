import { IMenuItem, IPageItem } from "../../interfaces/menu.interface";
import { TopLevelCategory } from "../../enums/category.enum";

export interface IMenuBodyProps {
    category: TopLevelCategory,
    menu: IMenuItem[],
}

export interface IMenuSecondLevel {
    menu: IMenuItem[],
    route: string,
}

export interface IMenuThirdLevel {
    pages: IPageItem[],
    route: string,
}
