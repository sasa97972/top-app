import { IMenuItem } from './menu.interface';
import { IPage } from './page.interface';
import { IProduct } from './product.interface';
import { TopLevelCategory } from '../enums/category.enum';

export interface ICourseProps {
  category: TopLevelCategory;
  categoryName: string;
  menu: IMenuItem[];
  page: IPage;
  products: IProduct[];
}
