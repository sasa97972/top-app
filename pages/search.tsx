import { Heading } from "../components";
import { withLayout } from "../layout";

function Search() {
    return <Heading tag="h1">Страница поиска</Heading>;
}

Search.getLayout = withLayout;

export default Search;