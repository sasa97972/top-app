import classNames from "classnames";
import { useRouter } from "next/router";
import {
    KeyboardEventHandler,
    useState,
    KeyboardEvent,
    FocusEventHandler,
} from "react";
import { Button } from "../../atoms/Button";
import { Input } from "../../atoms/Input";
import { isSearchValid } from "./helpers";
import SearchIcon from "./icons/search.svg";
import styles from "./Search.module.scss";
import { ISearchProps } from "./Search.props";

type Placeholder = "Поиск..." | "Введите ваш запрос";

export function Search({ className, ...props }: ISearchProps) {
    const router = useRouter();
    const [search, setSearch] = useState<string>("");
    const [placeholder, setPlaceholder] = useState<Placeholder>("Поиск...");
    const [error, setError] = useState<boolean>(false);

    const goToSearch = (): void => {
        if (!isSearchValid(search)) {
            setError(true);
            setPlaceholder("Введите ваш запрос");
            return;
        }

        setSearch("");
        router.push({
            pathname: "/search",
            query: { q: search },
        });
    };

    const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e: KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === "Enter") {
            goToSearch();
        }
    };

    const handleBlur: FocusEventHandler<HTMLInputElement> = (): void => {
        if (search === "" || (error && isSearchValid(search))) {
            setError(false);
            setPlaceholder("Поиск...");
        }
    };

    return (
        <div className={classNames(className, styles.search)} {...props}>
            <Input
                className={classNames(styles.input, {
                    [styles.error]: error,
                })}
                onBlur={handleBlur}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                value={search}
            />
            <Button
                className={styles.button}
                onClick={goToSearch}
            >
                <SearchIcon />
            </Button>
        </div>
    );
}
