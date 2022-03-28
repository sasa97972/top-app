import { IProduct } from "../interfaces/product.interface";

export const sortProductsByPrice = (products: IProduct[]): IProduct[] => (
    [...products].sort((a, b) => b.price - a.price)
);

export const sortProductsByRating = (products: IProduct[]): IProduct[] => (
    [...products].sort((a, b) => a.initialRating - b.initialRating)
);
