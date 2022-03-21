import { GetStaticProps } from "next";
import { Heading } from "../../components";
import { IHomeProps } from "../../interfaces/home.interface";
import { TopLevelCategory } from "../../enums/category.enum";
import { getMenuData } from "../../helpers/api";
import { withLayout } from "../../layout";

const ProductsIndex = () =>
	<Heading tag="h1">Главная страница продуктов</Heading>
;

ProductsIndex.getLayout = withLayout;

export default ProductsIndex;

export const getStaticProps: GetStaticProps<IHomeProps> = async() => {
	const { data: menu } = await getMenuData(TopLevelCategory.Products);

	return {
		props: {
			category: TopLevelCategory.Products,
			menu,
		},
	};
};
