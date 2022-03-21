import { TopLevelCategory } from "../enums/category.enum";

export interface IPageItem {
    _id: string,
    alias: string,
    category: string,
    title: string,
}

export interface IMenuItem {
    _id: {
        secondCategory: string,
    },
    pages: IPageItem[],
}

export interface ITopLevelItem {
    route: string,
    name: string,
    icon: JSX.Element,
    id: TopLevelCategory,
}
