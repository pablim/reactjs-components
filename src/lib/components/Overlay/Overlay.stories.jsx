import React from 'react';
import { Overlay } from '.';
import { Star as StarUnchecked, StarChecked } from '@cotabest/components/stories/Icon/assets';

export default {
	title: 'Overlay',
	component: Overlay,
};

function Template(args) {
	return <Overlay {...args} />;
}

const commonArgs = {
	visible: true,
	onClick: () => {
		console.log('clicked');
	},
};

export const AtacadaoMobile = Template.bind({});
AtacadaoMobile.args = commonArgs;

export const AtacadaoDesktop = Template.bind({});
AtacadaoDesktop.args = commonArgs;

export const CotabestMobile = Template.bind({});
CotabestMobile.args = commonArgs;

export const CotabestDesktop = Template.bind({});
CotabestDesktop.args = commonArgs;