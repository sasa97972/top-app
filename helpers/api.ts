import axios, { AxiosResponse } from "axios";
import { API_URL } from "../config";
import { IMenuItem } from "../interfaces/menu.interface";
import { TopLevelCategory } from "../enums/category.enum";

export const getMenuData = async (category: TopLevelCategory): Promise<AxiosResponse<IMenuItem[]>> => {
    const menuData = await axios.post<IMenuItem[]>(`${API_URL}/top-page/find`, {
        firstCategory: category,
    });
    return menuData;
};
