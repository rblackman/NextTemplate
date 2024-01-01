import clsx from 'clsx';
import Link, { LinkProps as NextLinkProps } from 'next/link';
import { ReactNode } from 'react';
import styles from './linkTemplate.module.css';

export interface LinkTemplateProps extends Omit<NextLinkProps, 'href'> {
	href: string;
	children: ReactNode;
	className?: string;
}

export default function LinkTemplate({ children, href, className, ...props }: LinkTemplateProps): ReactNode {
	const customClass = styles[className ?? 'default'];
	const classes = clsx({ [styles.link]: true, [customClass]: typeof className === 'string' });
	return (
		<Link href={href} className={classes} {...props}>
			{children}
		</Link>
	);
}

LinkTemplate.defaultProps = {
	className: undefined,
};
