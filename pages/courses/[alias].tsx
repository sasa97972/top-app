import { API_URL, DEFAULT_CATEGORY, DEFAULT_LIMIT } from "../../config";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { Heading } from "../../components";
import { ICourseProps } from "../../interfaces/course.interface";
import { IMenuItem } from "../../interfaces/menu.interface";
import { IPage } from "../../interfaces/page.interface";
import { IProduct } from "../../interfaces/product.interface";
import { Layout } from "../../layout/";
import { ParsedUrlQuery } from "querystring";
import { ReactElement } from "react";
import axios from "axios";

export default function Course({ menu, page, products }: ICourseProps) {
	return (
		<>
			<Heading tag="h1">Курс</Heading>
			<Heading tag="h2">Меню</Heading>
			<ul>
				{menu?.map(item =>
					<li key={item._id.secondCategory}>{item._id.secondCategory}</li>
				)}
			</ul>
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

Course.getLayout = (page: ReactElement) => (
	<Layout>
		{page}
	</Layout>
);

export const getStaticProps: GetStaticProps<ICourseProps> = async({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
	if (!params) {
		return {
			notFound: true,
		};
	}

	const { data: menu } = await axios.post<IMenuItem[]>(`${API_URL}/top-page/find`, {
		firstCategory: DEFAULT_CATEGORY,
	});
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
	const { data: menu } = await axios.post<IMenuItem[]>(`${API_URL}/top-page/find`, {
		firstCategory: DEFAULT_CATEGORY,
	});

	return {
		fallback: false,
		paths: menu.flatMap(item => item.pages.map(page => ({
			params: {
				alias: page.alias,
			},
		}))),
	};
};
