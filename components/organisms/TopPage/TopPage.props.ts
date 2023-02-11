import { TopLevelCategory } from '../../../enums/category.enum';
import { IPage } from '../../../interfaces/page.interface';
import { IProduct } from '../../../interfaces/product.interface';

export interface ITopPageProps {
  category: TopLevelCategory;
  page: IPage;
  products: IProduct[];
}
