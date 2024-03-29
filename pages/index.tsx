import { GetStaticProps } from 'next';
import { useState } from 'react';
import {
  Button,
  Heading,
  Input,
  Paragraph,
  Rating,
  Tag,
  Textarea,
} from '../components';
import { DEFAULT_CATEGORY } from '../config';
import { getMenuData } from '../helpers';
import { IHomeProps } from '../interfaces/home.interface';
import { withLayout } from '../layout';

export default function Home() {
  const [rating, setRating] = useState<number>(3);

  const handleRatingChange = (newRating: number): void => {
    setRating(newRating);
  };

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
      <div>
        <Rating rating={rating} setRating={handleRatingChange} isEditable />
      </div>
      <div>
        <Rating rating={2} />
      </div>
      <div>
        <Input placeholder="Заголовок" />
        <Textarea placeholder="Текст отзыва" />
      </div>
    </>
  );
}

Home.getLayout = withLayout;

export const getStaticProps: GetStaticProps<IHomeProps> = async () => {
  const { data: menu } = await getMenuData(DEFAULT_CATEGORY);

  return {
    props: {
      category: DEFAULT_CATEGORY,
      menu,
    },
  };
};
