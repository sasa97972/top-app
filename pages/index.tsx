import { Button, Heading, Paragraph, Tag } from "../components";

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
			<div>
				<Tag color="ghost">Sample tag</Tag>
				<Tag color="red">Sample tag</Tag>
				<Tag color="green">Sample tag</Tag>
				<Tag color="grey">Sample tag</Tag>
				<Tag color="primary">Sample tag</Tag>
			</div>
			<div>
				<Tag size="s" color="ghost">Sample tag</Tag>
				<Tag size="s" color="red">Sample tag</Tag>
				<Tag size="s" color="green">Sample tag</Tag>
				<Tag size="s" color="grey">Sample tag</Tag>
				<Tag size="s" color="primary">Sample tag</Tag>
			</div>
			<div>
				<Tag href="#" size="s" color="ghost">Sample tag</Tag>
				<Tag href="#" size="s" color="red">Sample tag</Tag>
				<Tag href="#" size="s" color="green">Sample tag</Tag>
				<Tag href="#" size="s" color="grey">Sample tag</Tag>
				<Tag href="#" size="s" color="primary">Sample tag</Tag>
			</div>
		</>
	);
}
