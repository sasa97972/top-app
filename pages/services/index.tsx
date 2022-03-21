import { GetStaticProps } from "next";
import { Heading } from "../../components";
import { IHomeProps } from "../../interfaces/home.interface";
import { TopLevelCategory } from "../../enums/category.enum";
import { getMenuData } from "../../helpers/api";
import { withLayout } from "../../layout";

const ServicesIndex = () =>
	<Heading tag="h1">Главная страница сервисов</Heading>
;

ServicesIndex.getLayout = withLayout;

export default ServicesIndex;

export const getStaticProps: GetStaticProps<IHomeProps> = async() => {
	const { data: menu } = await getMenuData(TopLevelCategory.Services);

	return {
		props: {
			category: TopLevelCategory.Services,
			menu,
		},
	};
};
