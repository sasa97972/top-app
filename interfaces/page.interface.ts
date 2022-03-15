enum TopLevelCategory {
    Courses,
    Services,
    Books,
    Products,
}

interface IAdvantage {
    title: string;
    description: string;
    _id: string;
}

interface IHhData {
    count: number;
    juniorSalary: number;
    middleSalary: number;
    seniorSalary: number;
    updatedAt: Date;
    _id: string;
}

interface IBlog {
    h1: string;
    metaTitle: string;
    metaDescription: string;
    views: number;
    _id: string;
}

export interface IPage {
    _id: string;
    tags: string[];
    secondCategory: string;
    alias: string;
    title: string;
    category: string;
    seoText: string;
    tagsTitle: string;
    metaTitle: string;
    metaDescription: string;
    firstCategory: TopLevelCategory;
    advantages: IAdvantage[];
    createdAt: Date;
    updatedAt: Date;
    hh: IHhData;
    categoryOn: string;
    blog: IBlog;
}
