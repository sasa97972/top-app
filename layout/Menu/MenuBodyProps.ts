import { TopLevelCategory } from "../../enums/category.enum";
import { IMenuItem, IPageItem } from "../../interfaces/menu.interface";

export interface IMenuBodyProps {
    category: TopLevelCategory,
    menu: IMenuItem[],
}

export interface IMenuSecondLevel {
    menu: IMenuItem[],
    route: string,
}

export interface IMenuSecondItem {
    isOpenedDefault: boolean,
    name: string,
    pages: IPageItem[],
    route: string,
}

export interface IMenuThirdLevel {
    pages: IPageItem[],
    route: string,
}
