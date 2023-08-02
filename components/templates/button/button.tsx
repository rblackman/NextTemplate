import clsx from 'clsx';
import Link from 'next/link';
import { ReactNode } from 'react';
import styles from './button.module.css';

interface BaseButtonProps {
	text: string;
	outline?: boolean;
	variant?: 'default' | 'red' | 'blue' | 'green';
}

export interface LinkButtonProps extends BaseButtonProps {
	href: string;
}

export interface ButtonButtonProps extends BaseButtonProps {
	buttonType: 'button' | 'submit' | 'reset';
}

export type ButtonProps = LinkButtonProps | ButtonButtonProps;

function isLinkButton(props: ButtonProps): props is LinkButtonProps {
	return typeof (props as LinkButtonProps)?.href === 'string';
}

export default function BaseTemplate(props: ButtonProps): ReactNode {
	const { text, variant, outline } = props;
	const variantClass = styles[variant ?? 'default'];
	const classes = clsx({ [styles.button]: true, [styles.outline]: outline ?? false, [variantClass]: true });

	if (isLinkButton(props)) {
		// is <a href>
		const { href, ...linkProps } = props;
		return (
			<Link href={href} {...linkProps} className={classes}>
				{text}
			</Link>
		);
	}

	// is <button>
	const { buttonType, ...buttonProps } = props;
	return (
		<button type={buttonType} {...buttonProps} className={classes}>
			{text}
		</button>
	);
}
