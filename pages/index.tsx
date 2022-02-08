import { Button, Heading, Paragraph } from "../components";

export default function Home() {
	return (
		<>
			<Heading tag="h1">Заголовок</Heading>
			<div>
				<Button arrow="down">Узнать подробнее</Button>
				<Button appearance="secondary" arrow="right">Читать отзывы</Button>
			</div>
			<Paragraph size="s">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores aspernatur atque dicta dolore dolorem dolores illum, maxime nam natus nisi nostrum numquam qui quibusdam repellendus similique totam vero. Natus.
			</Paragraph>
			<Paragraph>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores aspernatur atque dicta dolore dolorem dolores illum, maxime nam natus nisi nostrum numquam qui quibusdam repellendus similique totam vero. Natus.
			</Paragraph>
			<Paragraph size="l">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores aspernatur atque dicta dolore dolorem dolores illum, maxime nam natus nisi nostrum numquam qui quibusdam repellendus similique totam vero. Natus.
			</Paragraph>
		</>
	);
}
