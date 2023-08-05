import { ButtonTemplateProps } from './buttonTemplate';

const primary: ButtonTemplateProps = {
	children: 'Link Button',
	href: '#',
	variant: 'default',
};

const buttonButton: ButtonTemplateProps = {
	children: 'HTML Button Element',
	buttonType: 'button',
	variant: 'default',
};

const mockButtonTemplateProps = {
	primary,
	buttonButton,
};

export default mockButtonTemplateProps;
