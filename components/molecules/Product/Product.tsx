import { Card } from "../Card";
import styles from "./Product.module.scss";
import { IProductProps } from "./Product.props";

export function Product({ title }: IProductProps) {
    return (
        <Card className={styles.product}>
            <header>
                <p className={styles.title}>{title}</p>
            </header>
        </Card>
    );
}
