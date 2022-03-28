import { PropsWithChildren, createContext, useMemo } from "react";
import { DEFAULT_CATEGORY } from "../config";
import { TopLevelCategory } from "../enums/category.enum";
import { IMenuItem } from "../interfaces/menu.interface";

export interface IAppContext {
    category: TopLevelCategory;
    menu: IMenuItem[];
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
