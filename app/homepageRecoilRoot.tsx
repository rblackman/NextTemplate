'use client';

import { userState } from '@state/homeState';
import User from '@t/user';
import { ReactNode } from 'react';
import { MutableSnapshot, RecoilRoot } from 'recoil';

interface HomepageProps {
	user: User;
	children: ReactNode;
}

export default function HomepageRecoilRoot({ user, children }: HomepageProps) {
	function initializeState({ set }: MutableSnapshot) {
		set(userState, user);
	}

	return <RecoilRoot initializeState={initializeState}>{children}</RecoilRoot>;
}
