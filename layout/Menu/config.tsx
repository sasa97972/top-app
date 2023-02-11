import BooksIcon from './icons/books.svg';
import CoursesIcon from './icons/courses.svg';
import ProductsIcon from './icons/products.svg';
import ServicesIcon from './icons/services.svg';
import { TopLevelCategory } from '../../enums/category.enum';
import { ITopLevelItem } from '../../interfaces/menu.interface';

export const topLevelMenu: ITopLevelItem[] = [
  {
    icon: <CoursesIcon />,
    id: TopLevelCategory.Courses,
    name: 'Курсы',
    route: 'courses',
  },
  {
    icon: <ServicesIcon />,
    id: TopLevelCategory.Services,
    name: 'Сервисы',
    route: 'services',
  },
  {
    icon: <BooksIcon />,
    id: TopLevelCategory.Books,
    name: 'Книги',
    route: 'books',
  },
  {
    icon: <ProductsIcon />,
    id: TopLevelCategory.Products,
    name: 'Продукты',
    route: 'products',
  },
];
