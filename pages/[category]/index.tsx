import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import { Heading } from "../../components";
import { getMenuData } from "../../helpers/api";
import { ICategoryProps } from "../../interfaces/category.interface";
import { withLayout } from "../../layout";
import { topLevelMenu } from "../../layout/Menu/config";

function CourseIndex({ categoryName }: ICategoryProps) {
    return (
        <Heading tag="h1">
            Главная страница раздела
            {" "}
            {categoryName}
        </Heading>
    );
}

CourseIndex.getLayout = withLayout;

export default CourseIndex;

export const getStaticProps: GetStaticProps<ICategoryProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
    const topLevelItem = topLevelMenu.find((menuItem) => menuItem.route === params?.category);

    if (!params || !topLevelItem) {
        return {
            notFound: true,
        };
    }

    try {
        const { data: menu } = await getMenuData(topLevelItem.id);

        return {
            props: {
                category: topLevelItem.id,
                categoryName: topLevelItem.name,
                menu,
            },
        };
    } catch {
        return {
            notFound: true,
        };
    }
};

export const getStaticPaths: GetStaticPaths = async () => ({
    fallback: true,
    paths: topLevelMenu.map((menuItem) => ({
        params: {
            category: menuItem.route,
        },
    })),
});
