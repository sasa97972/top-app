import classNames from "classnames";
import { useRouter } from "next/router";
import { KeyboardEventHandler, useState, KeyboardEvent } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import SearchIcon from "./icons/search.svg";
import styles from "./Search.module.scss";
import { ISearchProps } from "./Search.props";

export function Search({ className, ...props }: ISearchProps) {
    const router = useRouter();
    const [search, setSearch] = useState<string>("");

    const goToSearch = () => {
        setSearch("");
        router.push({
            pathname: "/search",
            query: { q: search },
        });
    };

    const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            goToSearch();
        }
    };

    return (
        <div className={classNames(className, styles.search)} {...props}>
            <Input
                className={styles.input}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Поиск..."
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
