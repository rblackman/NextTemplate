import PrimaryLayout from '@components/layouts/primary/primaryLayout';
import { Overpass } from 'next/font/google';
import './globals.css';

const overpass = Overpass({ subsets: ['latin'] });

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={overpass.className}>
				<PrimaryLayout>{children}</PrimaryLayout>
			</body>
		</html>
	);
}
