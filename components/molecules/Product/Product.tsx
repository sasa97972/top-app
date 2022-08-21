import clx from "classnames";
import Image from "next/image";
import { IMAGE_URL } from "../../../config";
import { formatSalary } from "../../../helpers";
import { Button, Tag } from "../../atoms";
import { Card } from "../Card";
import { Rating } from "../Rating";
import styles from "./Product.module.scss";

import { IProductProps } from "./Product.props";

export function Product({
    advantages,
    credit,
    categories,
    description,
    disadvantages,
    image,
    initialRating,
    price,
    reviewAvg,
    reviewCount,
    title,
}: IProductProps) {
    return (
        <Card className={styles.product}>
            <div className={styles.logo}>
                <div className={styles.logoContainer}>
                    <Image
                        alt={title}
                        className={styles.logoImg}
                        objectFit="cover"
                        layout="fill"
                        src={image.search(/^https?/) !== -1 ? image : `${IMAGE_URL}${image}`}
                    />
                </div>
            </div>
            <p className={styles.title}>{title}</p>
            <p className={styles.price}>{formatSalary(price)}</p>
            <p className={styles.credit}>
                {formatSalary(credit)}
                <span className={styles.smallText}>/мес</span>
            </p>
            <div className={styles.rating}><Rating rating={reviewAvg ?? initialRating} /></div>
            <div className={styles.tags}>
                {categories.map((category) => <Tag color="ghost" key={category}>{category}</Tag>)}
            </div>
            <p className={clx(styles.priceTitle, styles.smallTitle)}>цена</p>
            <p className={clx(styles.creditTitle, styles.smallTitle)}>кредит</p>
            <p className={clx(styles.ratingTitle, styles.smallTitle)}>
                {reviewCount}
                {" "}
                отзывов
            </p>
            <hr className={styles.hr} />
            <div className={styles.description}>{description}</div>
            <div className={styles.features}>Features</div>
            <div className={styles.advantages}>
                <div className={styles.pros}>
                    <span>Преимущества</span>
                    <div>{advantages}</div>
                </div>
                {
                    disadvantages && (
                        <div className={styles.cons}>
                            <span>Недостатки</span>
                            <div>{disadvantages}</div>
                        </div>
                    )
                }
            </div>
            <hr className={styles.hr} />
            <div className={styles.actions}>
                <Button appearance="primary">Узнать подробнее</Button>
                <Button appearance="secondary" arrow="right">Читать отзывы</Button>
            </div>
        </Card>
    );
}
