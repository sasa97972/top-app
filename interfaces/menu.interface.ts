interface IPageItem {
    _id: string,
    alias: string,
    category: string
    title: string,
}

export interface IMenuItem {
    _id: {
        secondCategory: string,
    },
    pages: IPageItem[],
}
