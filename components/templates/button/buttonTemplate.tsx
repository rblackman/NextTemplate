import clsx from 'clsx';
import Link from 'next/link';
import { ReactNode } from 'react';
import styles from './buttonTemplate.module.css';

interface BaseButtonTemplateProps {
	children: ReactNode;
	outline?: boolean;
	variant?: 'default' | 'red' | 'blue' | 'green';
}

export interface LinkButtonTemplateProps extends BaseButtonTemplateProps {
	href: string;
}

export interface ButtonButtonTemplateProps extends BaseButtonTemplateProps {
	buttonType: 'button' | 'submit' | 'reset';
}

export type ButtonTemplateProps = LinkButtonTemplateProps | ButtonButtonTemplateProps;

function isLinkButton(props: ButtonTemplateProps): props is LinkButtonTemplateProps {
	return typeof (props as LinkButtonTemplateProps)?.href === 'string';
}

export default function ButtonTemplate(props: ButtonTemplateProps): ReactNode {
	const { children, variant, outline } = props;
	const variantClass = styles[variant ?? 'default'];
	const classes = clsx({ [styles.button]: true, [styles.outline]: outline ?? false, [variantClass]: true });

	if (isLinkButton(props)) {
		// is <a href>
		const { href, ...linkProps } = props;
		return (
			<Link href={href} {...linkProps} className={classes}>
				{children}
			</Link>
		);
	}

	// is <button>
	const { buttonType, ...buttonProps } = props;
	return (
		<button type={buttonType} {...buttonProps} className={classes}>
			{children}
		</button>
	);
}
