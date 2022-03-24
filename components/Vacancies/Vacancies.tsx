import classNames from "classnames";
import { Card } from "../Card";
import { Heading } from "../Heading";
import { Tag } from "../Tag";
import styles from "./Vacancies.module.scss";
import { IVacanciesProps } from "./Vacancies.props";

export function Vacancies({
    category,
    count,
    className,
    juniorSalary,
    middleSalary,
    seniorSalary,
    ...props
}: IVacanciesProps) {
    return (
        <div className={styles.vacancies} {...props}>
            <div className={styles.vacanciesTitle}>
                <Heading tag="h2">
                    Вакансии -
                    {" "}
                    {category}
                </Heading>
                <Tag color="red" size="m">hh.ru</Tag>
            </div>
            <div className={styles.vacanciesRow}>
                <Card align="center">
                    <span className={styles.cardText}>Всего вакансий</span>
                    <span className={classNames(styles.cardText, styles.accent)}>{count.toLocaleString("ru")}</span>
                </Card>
                <Card align="center" className={styles.cardRow}>
                    <div className={styles.cardSection}>
                        <span className={styles.cardText}>Начальный</span>
                        <span className={classNames(styles.cardText, styles.big)}>
                            {juniorSalary.toLocaleString("ru")}
                            {" "}
                            ₽
                        </span>
                    </div>
                    <div className={styles.cardSection}>
                        <span className={styles.cardText}>Средний</span>
                        <span className={classNames(styles.cardText, styles.big)}>
                            {middleSalary.toLocaleString("ru")}
                            {" "}
                            ₽
                        </span>
                    </div>
                    <div className={styles.cardSection}>
                        <span className={styles.cardText}>Профессионал</span>
                        <span className={classNames(styles.cardText, styles.big)}>
                            {seniorSalary.toLocaleString("ru")}
                            {" "}
                            ₽
                        </span>
                    </div>
                </Card>
            </div>
        </div>
    );
}
