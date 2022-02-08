import { Button, Heading } from "../components";

export default function Home() {
	return (
		<>
			<Heading tag="h1">Заголовок</Heading>
			<div>
				<Button arrow="down">Узнать подробнее</Button>
				<Button appearance="secondary" arrow="right">Читать отзывы</Button>
			</div>
		</>
	);
}
