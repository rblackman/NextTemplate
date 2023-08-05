import { ReactNode } from "react";

export interface PrimaryLayoutProps {
	children: ReactNode;
}

export default function PrimaryLayout({ children }: PrimaryLayoutProps) {
	return (
		<main>
			{children}
		</main>
	);
}
