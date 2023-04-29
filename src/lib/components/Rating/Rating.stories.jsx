import React from 'react';
import { Rating } from '.';

export default {
	title: 'Rating',
	component: Rating,
};

function Template(args) {
	return <Rating {...args} />;
}

const commonArgs = {
	range: 5,
	score: 0,
	scoreVisible: false,
	onChange: null,
};

export const AtacadaoMobile = Template.bind({});
AtacadaoMobile.args = commonArgs;

export const AtacadaoDesktop = Template.bind({});
AtacadaoDesktop.args = commonArgs;

export const CotabestMobile = Template.bind({});
CotabestMobile.args = commonArgs;

export const CotabestDesktop = Template.bind({});
CotabestDesktop.args = commonArgs;
