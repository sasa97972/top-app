import { Heading } from "../../Heading";
import { ITopPageProps } from "./TopPage.props";

export default function TopPage({ category, page, products }: ITopPageProps) {
    return (
        <>
            <Heading tag="h1">{category}</Heading>
            <Heading tag="h2">Страница</Heading>
            <p>{page?.title}</p>
            <Heading tag="h2">Продукты</Heading>
            <ul>
                {products?.map((item) => <li key={item._id}>{item.title}</li>)}
            </ul>
        </>
    );
}
