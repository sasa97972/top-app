import classNames from "classnames";
import { Heading } from "../Heading";
import { Tag } from "../Tag";
import styles from "./Skills.module.scss";
import { ISkillProps } from "./Skills.props";

export function Skills({ className, skills, ...props }: ISkillProps) {
    return (
        <div className={classNames(className, styles.skills)} {...props}>
            <Heading tag="h2">Получаемые навыки</Heading>
            <div className={styles.list}>
                {skills.map((skill) => (
                    <Tag color="primary" key={skill}>{skill}</Tag>
                ))}
            </div>
        </div>
    );
}
