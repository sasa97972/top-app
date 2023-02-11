import classNames from 'classnames';
import styles from './Skills.module.scss';
import { ISkillProps } from './Skills.props';
import { Heading } from '../../atoms/Heading';
import { Tag } from '../../atoms/Tag';

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
