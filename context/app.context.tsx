import { PropsWithChildren, createContext, useMemo } from "react";
import { DEFAULT_CATEGORY } from "../config";
import { IMenuItem } from "../interfaces/menu.interface";
import { TopLevelCategory } from "../enums/category.enum";

export interface IAppContext {
    category: TopLevelCategory,
    menu: IMenuItem[],
}

export const AppContext = createContext<IAppContext>({
    category: DEFAULT_CATEGORY,
    menu: [],
});

export function AppContextProvider({ category, children, menu }: PropsWithChildren<IAppContext>): JSX.Element {
    const providerValue = useMemo<IAppContext>(() => ({
        category,
        menu,
    }), [category, menu]);

    return (
        <AppContext.Provider value={providerValue}>
            { children }
        </AppContext.Provider>
    );
}
