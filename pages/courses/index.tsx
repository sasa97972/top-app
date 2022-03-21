import { GetStaticProps } from "next";
import { Heading } from "../../components";
import { IHomeProps } from "../../interfaces/home.interface";
import { TopLevelCategory } from "../../enums/category.enum";
import { getMenuData } from "../../helpers/api";
import { withLayout } from "../../layout";

const CourseIndex = () =>
	<Heading tag="h1">Главная страница курсов</Heading>
;

CourseIndex.getLayout = withLayout;

export default CourseIndex;

export const getStaticProps: GetStaticProps<IHomeProps> = async() => {
	const { data: menu } = await getMenuData(TopLevelCategory.Courses);

	return {
		props: {
			category: TopLevelCategory.Courses,
			menu,
		},
	};
};
