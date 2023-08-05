import throwError from '@helpers/throwError';
import HomepageRecoilRoot from './homepageRecoilRoot';
import UserInfo from './userInfo';

const API_ENDPOINT =
	process.env.API_ENDPOINT ??
	throwError('API_ENDPOINT env variable not defined (should be "https://jsonplaceholder.typicode.com/todos/1")');


export default async function Home() {
	const response = await fetch(API_ENDPOINT);
	const user = await response.json();

	return (
		<HomepageRecoilRoot user={user}>
			<>
				<h1>Hello World</h1>
				<UserInfo />
			</>
		</HomepageRecoilRoot>
	);
}
