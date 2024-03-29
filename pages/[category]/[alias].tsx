import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { TopPage } from '../../components';
import { DEFAULT_LIMIT } from '../../config';
import { getMenuData, getPageData, getProductsData } from '../../helpers';
import { ICourseProps } from '../../interfaces/course.interface';
import { IPagePath } from '../../interfaces/paths.interface';
import { withLayout } from '../../layout';
import { topLevelMenu } from '../../layout/Menu/config';

export default function Page({ category, page, products }: ICourseProps) {
  return <TopPage category={category} page={page} products={products} />;
}

Page.getLayout = withLayout;

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
  const menuDatas = await Promise.all(topLevelMenu.map((topLevelItem) => getMenuData(topLevelItem.id)));

  const paths: IPagePath[] = topLevelMenu.reduce<IPagePath[]>((resPaths, topLevelItem, index) => resPaths.concat(
    menuDatas[index].data.flatMap((item) => item.pages.map((page) => ({
      params: {
        alias: page.alias,
        category: topLevelItem.route,
      },
    }))),
  ), []);

  return {
    fallback: true,
    paths,
  };
};
