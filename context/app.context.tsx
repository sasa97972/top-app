import { PropsWithChildren, createContext, useState } from "react";
import { DEFAULT_CATEGORY } from "../config";
import { IMenuItem } from "../interfaces/menu.interface";
import { TopLevelCategory } from "../enums/category.enum";

export interface IAppContext {
    category: TopLevelCategory,
    menu: IMenuItem[],
    setMenu?: (newMenu: IMenuItem[]) => void,
}

export const AppContext = createContext<IAppContext>({
	category: DEFAULT_CATEGORY,
	menu: [],
});

export const AppContextProvider = ({ category, children, menu }: PropsWithChildren<IAppContext>): JSX.Element => {
	const [menuState, setMenuState] = useState<IMenuItem[]>(menu);
	const setMenu = (newMenu: IMenuItem[]) => setMenuState(newMenu);

	return (
		<AppContext.Provider value={{
			category,
			menu: menuState,
			setMenu,
		}}>
			{ children }
		</AppContext.Provider>
	);
};
