import { screen, render, act, fireEvent } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Rating.stories';

const { AtacadaoMobile, AtacadaoDesktop, CotabestMobile, CotabestDesktop } = composeStories(stories);

describe('Rating Component', () => {
	describe('Atacadão', () => {
		describe('Mobile', () => {
			test('renders text', () => {
				const { container } = render(<AtacadaoMobile />);

				expect(container).toMatchSnapshot();
			});
		});

		describe('Desktop', () => {
			test('renders rating', () => {
				const { container } = render(<AtacadaoDesktop />);
				expect(container).toMatchSnapshot();
			});

			test('possibility rating value 1', () => {
				const score = 1;
				const range = 5;
				render(<AtacadaoDesktop onChange={() => {}} scoreVisible range={range} />);

				const stars = screen.getAllByTestId('star');
				const currentStarElement = stars[score - 1];

				act(() => {
					currentStarElement.click();
				});

				// Verificar se o texto corresponde as stars marcadas
				expect(screen.getByText(String(score))).toBeTruthy();
			});
			test('possibility rating value 2', () => {
				const score = 2;
				render(<AtacadaoDesktop onChange={() => {}} scoreVisible />);
				const stars = screen.getAllByTestId('star');

				const currentStarElement = stars[score - 1];
				const nextStarElement = stars[score + 1];

				act(() => {
					currentStarElement.click();
				});

				expect(screen.getByText(String(score))).toBeTruthy();
				expect(currentStarElement.getAttribute('data-checked')).toBeTruthy();
				expect(nextStarElement.getAttribute('data-checked')).toBe('false');
			});
			test('is score visible ', () => {
				const score = 1;
				render(<AtacadaoDesktop scoreVisible score={score} />);

				expect(screen.getByText(String(score))).toBeTruthy();
			});
			test('score is not visible ', () => {
				const score = 1;
				render(<AtacadaoDesktop score={score} />);
				const scoreContainer = screen.findByTestId('show-score');

				expect(scoreContainer.firstChild).toBeUndefined();
			});
			test('check star quantity', () => {
				const range = 5;
				render(<AtacadaoDesktop onChange={() => {}} scoreVisible range={range} />);

				const stars = screen.getAllByTestId('star');

				// Verifica se a quantidade de stars é igual ao range passado
				expect(stars.length).toBe(range);
			});
			test('check star checked', () => {
				const score = 1;
				const range = 5;

				render(<AtacadaoDesktop onChange={() => {}} scoreVisible range={range} />);

				const stars = screen.getAllByTestId('star');

				const currentStarElement = stars[score - 1];
				const nextStarElement = stars[score + 1];

				act(() => {
					currentStarElement.click();
				});

				// Verifica se a star está marcada
				expect(currentStarElement.getAttribute('data-checked')).toBeTruthy();
				// Verifica se a proxima star está desmarcada
				expect(nextStarElement.getAttribute('data-checked')).toBe('false');

				//expect(currentStarElement.querySelector('img').src).toBe('http://localhost/StarChecked.svg');
			});
			test('check score largest then range', () => {
				const score = 8;
				const range = 5;

				render(<AtacadaoDesktop onChange={() => {}} scoreVisible score={score} range={range} />);

				const stars = screen.getAllByTestId('star');

				// Verifica se a quantidade de stars é igual ao range passado
				expect(stars.length).toBe(range);
			});
		});
	});

	describe('Cotabest', () => {
		describe('Mobile', () => {
			test('renders text', () => {
				const { container } = render(<CotabestMobile />);

				expect(container).toMatchSnapshot();
			});
		});

		describe('Desktop', () => {
			test('renders text', () => {
				const { container } = render(<CotabestDesktop />);

				expect(container).toMatchSnapshot();
			});
		});
	});
});
