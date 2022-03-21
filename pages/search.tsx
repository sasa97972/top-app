import { Heading } from "../components";
import { withLayout } from "../layout";

const Search = () =>
	<Heading tag="h1">Страница поиска</Heading>
;

Search.getLayout = withLayout;

export default Search;

