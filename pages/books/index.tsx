import { GetStaticProps } from "next";
import { Heading } from "../../components";
import { IHomeProps } from "../../interfaces/home.interface";
import { TopLevelCategory } from "../../enums/category.enum";
import { getMenuData } from "../../helpers/api";
import { withLayout } from "../../layout";

const BooksIndex = () =>
	<Heading tag="h1">Главная страница книг</Heading>
;

BooksIndex.getLayout = withLayout;

export default BooksIndex;

export const getStaticProps: GetStaticProps<IHomeProps> = async() => {
	const { data: menu } = await getMenuData(TopLevelCategory.Books);

	return {
		props: {
			category: TopLevelCategory.Books,
			menu,
		},
	};
};
