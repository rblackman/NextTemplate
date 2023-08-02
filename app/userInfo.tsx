'use client';

import { userState } from '@state/homeState';
import { useRecoilValue } from 'recoil';

export default function UserInfo() {
	const { userId, id, title } = useRecoilValue(userState);

	return (
		<>
			<p>
				<strong>ID</strong>: {id}
			</p>
			<p>
				<strong>User ID</strong>: {userId}
			</p>
			<p>
				<strong>Title</strong>: {title}
			</p>
		</>
	);
}
