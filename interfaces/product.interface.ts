interface ICharacteristic {
    name: string;
    value: string;
}

interface IBlog {
    text: string;
    bigImage: string;
    _id: string;
}

interface IReview {
    _id: string;
    name: string;
    title: string;
    description: string;
    rating: number;
    createdAt: Date;
}

export interface IProduct {
    _id: string;
    categories: string[];
    tags: string[];
    title: string;
    image: string;
    description: string;
    link: string;
    price: number;
    credit: number;
    oldPrice: number;
    characteristics: ICharacteristic[];
    advantages: string;
    initialRating: number;
    createdAt: Date;
    updatedAt: Date;
    html: string;
    reviews: IReview[];
    reviewCount: number;
    reviewAvg?: number;
    blog: IBlog;
}
