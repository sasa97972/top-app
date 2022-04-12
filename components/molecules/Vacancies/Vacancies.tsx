import classNames from "classnames";
import { formatSalary } from "../../../helpers";
import { Heading } from "../../atoms/Heading";
import { Tag } from "../../atoms/Tag";
import { Card } from "../Card";
import RateIcon from "./icons/star.svg";
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
                <Tag className={styles.tag} color="red" size="m">hh.ru</Tag>
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
                            {formatSalary(juniorSalary)}
                        </span>
                        <div className={styles.rate}>
                            <RateIcon className={styles.filled} />
                            <RateIcon />
                            <RateIcon />
                        </div>
                    </div>
                    <div className={styles.cardSection}>
                        <span className={styles.cardText}>Средний</span>
                        <span className={classNames(styles.cardText, styles.big)}>
                            {formatSalary(middleSalary)}
                        </span>
                        <div className={styles.rate}>
                            <RateIcon className={styles.filled} />
                            <RateIcon className={styles.filled} />
                            <RateIcon />
                        </div>
                    </div>
                    <div className={styles.cardSection}>
                        <span className={styles.cardText}>Профессионал</span>
                        <span className={classNames(styles.cardText, styles.big)}>
                            {formatSalary(seniorSalary)}
                        </span>
                        <div className={styles.rate}>
                            <RateIcon className={styles.filled} />
                            <RateIcon className={styles.filled} />
                            <RateIcon className={styles.filled} />
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}
