import { ReactNode } from 'react';
import styles from './baseTemplate.module.css';

export interface BaseTemplateProps {
	text: string;
}

export default function BaseTemplate({ text }: BaseTemplateProps): ReactNode {
	return <div className={styles.component}>{text}</div>;
}
