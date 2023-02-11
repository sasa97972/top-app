import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { Heading, Paragraph } from '../components';
import { DEFAULT_CATEGORY } from '../config';
import { getMenuData } from '../helpers';
import { IHomeProps } from '../interfaces/home.interface';
import { withLayout } from '../layout';

export default function Search() {
  const router = useRouter();

  return (
    <>
      <Heading tag="h1">Страница поиска</Heading>
      {router.query.q && (
        <Paragraph size="l">
          Вы ищите:
          {' '}
          {router.query.q}
        </Paragraph>
      )}
    </>
  );
}

Search.getLayout = withLayout;

export const getStaticProps: GetStaticProps<IHomeProps> = async () => {
  const { data: menu } = await getMenuData(DEFAULT_CATEGORY);

  return {
    props: {
      category: DEFAULT_CATEGORY,
      menu,
    },
  };
};
