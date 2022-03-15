import { IMenuItem } from "./menu.interface";
import { IPage } from "./page.interface";
import { IProduct } from "./product.interface";

export interface ICourseProps {
    category: number,
    menu: IMenuItem[],
    page: IPage,
    products: IProduct[],
}
