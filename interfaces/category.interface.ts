import { IMenuItem } from "./menu.interface";

export interface ICategoryProps {
    category: number;
    categoryName: string;
    menu: IMenuItem[];
}
