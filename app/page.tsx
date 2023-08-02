import styles from './page.module.css';
import UserInfo from './userInfo';

export default function Home() {
	return (
		<main className={styles.main}>
			<h1>Hello World</h1>
			<UserInfo />
		</main>
	);
}
