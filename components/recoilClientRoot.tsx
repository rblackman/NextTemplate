'use client';

import { ReactNode } from 'react';
import { MutableSnapshot, RecoilRoot } from 'recoil';

interface EmptyRecoilClientRootProps {
	children: ReactNode;
}

interface InitializerRecoilClientRootProps extends EmptyRecoilClientRootProps {
	initializeState: (_: MutableSnapshot) => void;
}

type RecoilProps = EmptyRecoilClientRootProps | InitializerRecoilClientRootProps;

function isInitializerProps(props: Omit<RecoilProps, 'children'>): props is InitializerRecoilClientRootProps {
	return typeof (props as InitializerRecoilClientRootProps)?.initializeState === 'function';
}

export default function RecoilClientRoot({ children, ...props }: RecoilProps): ReactNode {
	if (isInitializerProps(props)) {
		const { initializeState } = props;
		return <RecoilRoot initializeState={initializeState}>{children}</RecoilRoot>;
	}

	return <RecoilRoot>{children}</RecoilRoot>;
}
