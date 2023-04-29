import { screen, render, act, fireEvent } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Overlay.stories';

const { AtacadaoMobile, AtacadaoDesktop, CotabestMobile, CotabestDesktop } = composeStories(stories);

describe('Rating Component', () => {
	describe('Atacadão', () => {
		describe('Mobile', () => {
			test('renders overlay', () => {
				const { container } = render(<AtacadaoMobile />);

				expect(container).toMatchSnapshot();
			});
		});

		describe('Desktop', () => {
			test('renders overlay', () => {
				const { container } = render(<AtacadaoDesktop />);
				expect(container).toMatchSnapshot();
			});
		});
	});

	describe('Cotabest', () => {
		describe('Mobile', () => {
			test('renders overlay', () => {
				const { container } = render(<CotabestMobile />);

				expect(container).toMatchSnapshot();
			});

			test('shold click on overlay', () => {
				render(<CotabestMobile />);

				const overlay = screen.getByTestId('overlay');

				fireEvent.click(overlay);
			});
		});

		describe('Desktop', () => {
			test('renders overlay', () => {
				const { container } = render(<CotabestDesktop />);

				expect(container).toMatchSnapshot();
			});
		});
	});
});