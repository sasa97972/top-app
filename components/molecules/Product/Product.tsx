import Image from "next/image";
import { IMAGE_URL } from "../../../config";
import { Card } from "../Card";
import styles from "./Product.module.scss";
import { IProductProps } from "./Product.props";

export function Product({ title, image }: IProductProps) {
    return (
        <Card className={styles.product}>
            <div className={styles.logoContainer}>
                <Image
                    alt={title}
                    objectFit="cover"
                    layout="fill"
                    src={image.search(/^https?/) !== -1 ? image : `${IMAGE_URL}${image}`}
                />
            </div>
            <header>
                <p className={styles.title}>{title}</p>
            </header>
        </Card>
    );
}
