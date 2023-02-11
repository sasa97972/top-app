import { SortEnum } from '../enums/sort.enum';
import { sortProductsByPrice, sortProductsByRating } from '../helpers/sort';
import { IProduct } from '../interfaces/product.interface';

export type SortActions = { type: SortEnum } | { type: 'reset'; payload: IProduct[] };

export interface SortState {
  products: IProduct[];
  sort: SortEnum;
}

export const sortReducer = (state: SortState, action: SortActions): SortState => {
  switch (action.type) {
    case SortEnum.Rating:
      return {
        products: sortProductsByRating(state.products),
        sort: SortEnum.Rating,
      };
    case SortEnum.Price:
      return {
        products: sortProductsByPrice(state.products),
        sort: SortEnum.Price,
      };
    case 'reset':
      return {
        products: sortProductsByRating(action.payload),
        sort: SortEnum.Rating,
      };
    default:
      return state;
  }
};
