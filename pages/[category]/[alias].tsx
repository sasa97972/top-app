import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import { Heading } from "../../components";
import { DEFAULT_LIMIT } from "../../config";
import { getMenuData, getPageData, getProductsData } from "../../helpers/api";
import { ICourseProps } from "../../interfaces/course.interface";
import { IPagePath } from "../../interfaces/paths.interface";
import { withLayout } from "../../layout";
import { topLevelMenu } from "../../layout/Menu/config";

export default function Course({ categoryName, page, products }: ICourseProps) {
    return (
        <>
            <Heading tag="h1">{categoryName}</Heading>
            <Heading tag="h2">Страница</Heading>
            <p>{page?.title}</p>
            <Heading tag="h2">Продукты</Heading>
            <ul>
                {products?.map((item) => <li key={item._id}>{item.title}</li>)}
            </ul>
        </>
    );
}

Course.getLayout = withLayout;

export const getStaticProps: GetStaticProps<ICourseProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
    const topLevelItem = topLevelMenu.find((menuItem) => menuItem.route === params?.category);

    if (!params || !topLevelItem) {
        return {
            notFound: true,
        };
    }

    try {
        const { data: menu } = await getMenuData(topLevelItem.id);
        const { data: page } = await getPageData(params.alias as string);
        const { data: products } = await getProductsData(page.category, DEFAULT_LIMIT);

        return {
            props: {
                category: topLevelItem.id,
                categoryName: topLevelItem.name,
                menu,
                page,
                products,
            },
        };
    } catch {
        return {
            notFound: true,
        };
    }
};

export const getStaticPaths: GetStaticPaths = async () => {
    let paths: IPagePath[] = [];
    for (const topLevelItem of topLevelMenu) {
        const { data: menu } = await getMenuData(topLevelItem.id);
        paths = paths.concat(
            menu.flatMap((item) => item.pages.map((page) => ({
                params: {
                    alias: page.alias,
                    category: topLevelItem.route,
                },
            }))),
        );
    }

    return {
        fallback: true,
        paths,
    };
};
