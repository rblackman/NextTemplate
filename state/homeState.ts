import User from '@t/user';
import { atom, selector } from 'recoil';

export const userState = atom<User>({
	key: 'userState',
	default: {
		id: -1,
		userId: -1,
		title: '',
		completed: false,
	},
});

export const hasUserSelector = selector<boolean>({
	key: 'hasUserSelector',
	get: ({ get }) => {
		const user = get(userState);
		return user.id !== -1;
	},
});
