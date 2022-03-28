import {
    Advantages,
    Heading,
    Html,
    Product,
    Skills,
    Tag,
    Vacancies,
} from "../..";
import styles from "./TopPage.module.scss";
import { ITopPageProps } from "./TopPage.props";

export function TopPage({ page, products }: ITopPageProps) {
    return (
        <article>
            <header className={styles.header}>
                <Heading className={styles.title} tag="h1">{page.title}</Heading>
                {products && <Tag className={styles.productCount} color="grey" size="m">{products.length}</Tag>}
                <span className={styles.toolbar}>Сортировка</span>
            </header>
            <div className={styles.productsList}>
                {products && products.map((product) => (
                    <Product key={product._id} title={product.title} />
                ))}
            </div>
            {page.hh && (
                <Vacancies
                    category={page.category}
                    count={(page.hh.count)}
                    juniorSalary={page.hh.juniorSalary}
                    middleSalary={page.hh.middleSalary}
                    seniorSalary={page.hh.seniorSalary}
                />
            )}
            {page.advantages?.length > 0 && (
                <Advantages advantages={page.advantages} />
            )}
            {page.seoText && <div className={styles.seoText}><Html html={page.seoText} /></div>}
            {page.tags?.length > 0 && (
                <Skills skills={page.tags} />
            )}
        </article>
    );
}
