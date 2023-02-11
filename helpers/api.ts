import axios, { AxiosResponse } from 'axios';
import { API_URL } from '../config';
import { TopLevelCategory } from '../enums/category.enum';
import { IMenuItem } from '../interfaces/menu.interface';
import { IPage } from '../interfaces/page.interface';
import { IProduct } from '../interfaces/product.interface';

export const getMenuData = async (category: TopLevelCategory): Promise<AxiosResponse<IMenuItem[]>> => {
  const menuData = await axios.post<IMenuItem[]>(`${API_URL}/top-page/find`, {
    firstCategory: category,
  });
  return menuData;
};

export const getPageData = async (alias: string): Promise<AxiosResponse<IPage>> => {
  const pageData = await axios.get<IPage>(`${API_URL}/top-page/byAlias/${alias}`);
  return pageData;
};

export const getProductsData = async (category: string, limit: number): Promise<AxiosResponse<IProduct[]>> => {
  const productsData = await axios.post<IProduct[]>(`${API_URL}/product/find`, {
    category,
    limit,
  });
  return productsData;
};
