import { API_URL, DEFAULT_CATEGORY, DEFAULT_LIMIT } from "../../config";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { Heading } from "../../components";
import { ICourseProps } from "../../interfaces/course.interface";
import { IPage } from "../../interfaces/page.interface";
import { IProduct } from "../../interfaces/product.interface";
import { ParsedUrlQuery } from "querystring";
import axios from "axios";
import { getMenuData } from "../../helpers/api";
import { withLayout } from "../../layout/";

export default function Course({ page, products }: ICourseProps) {
	return (
		<>
			<Heading tag="h1">Курс</Heading>
			<Heading tag="h2">Страница</Heading>
			<p>{page?.title}</p>
			<Heading tag="h2">Продукты</Heading>
			<ul>
				{products?.map(item =>
					<li key={item._id}>{item.title}</li>
				)}
			</ul>
		</>
	);
}

Course.getLayout = withLayout;

export const getStaticProps: GetStaticProps<ICourseProps> = async({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
	if (!params) {
		return {
			notFound: true,
		};
	}

	const { data: menu } = await getMenuData(DEFAULT_CATEGORY);
	const { data: page } = await axios.get<IPage>(`${API_URL}/top-page/byAlias/${params.alias}`);
	const { data: products } = await axios.post<IProduct[]>(`${API_URL}/product/find`, {
		category: page.category,
		limit: DEFAULT_LIMIT,
	});

	return {
		props: {
			category: DEFAULT_CATEGORY,
			menu,
			page,
			products,
		},
	};
};

export const getStaticPaths: GetStaticPaths = async() => {
	const { data: menu } = await getMenuData(DEFAULT_CATEGORY);

	return {
		fallback: false,
		paths: menu.flatMap(item => item.pages.map(page => ({
			params: {
				alias: page.alias,
			},
		}))),
	};
};
