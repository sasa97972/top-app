import { TopLevelCategory } from "../enums/category.enum";
import { IMenuItem } from "./menu.interface";
import { IPage } from "./page.interface";
import { IProduct } from "./product.interface";

export interface ICourseProps {
    category: TopLevelCategory;
    categoryName: string;
    menu: IMenuItem[];
    page: IPage;
    products: IProduct[];
}
