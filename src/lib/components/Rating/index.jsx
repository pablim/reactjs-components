import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Icon } from '../Icon';
import { Star as StarUnchecked, StarChecked } from '@cotabest/components/stories/Icon/assets';

import styles from './Rating.module.scss';

export function Rating({ range, score, scoreVisible, onChange }) {
	const { container, scoreText, stars, star, disableStar } = styles;

	const defineInitialScore = () => {
		var initalScore = 0;
		if (score >= 0) initalScore = score > range ? range : score;

		return initalScore;
	};

	const [newScore, setNewScore] = useState(defineInitialScore());

	const onClick = (value, e) => {
		e.preventDefault();
		if (onChange) {
			setNewScore(value);
			onChange();
		}
	};

	const Star = ({ rating, checked }) => (
		<a
			data-testid='star'
			href='#'
			className={onChange ? '' : ' ' + disableStar}
			onClick={(e) => onClick(rating, e)}
			data-checked={checked ? checked : false}
		>
			{checked ? (
				<Icon icon={StarChecked} className={star} />
			) : (
				<Icon icon={StarUnchecked} className={star} />
			)}
		</a>
	);

	const defineRating = () => {
		var stars = [];

		for (var i = 0; i < range; i++) {
			if (i < newScore) {
				stars.push(<Star key={i} rating={i + 1} checked />);
			} else {
				stars.push(<Star key={i} rating={i + 1} />);
			}
		}

		return stars;
	};

	return (
		<div className={container}>
			{scoreVisible && (
				<div data-testid='show-score' className={scoreText}>
					{newScore}
				</div>
			)}
			<div className={stars}>{defineRating()}</div>
		</div>
	);
}

Text.propTypes = {
	range: PropTypes.number,
	score: PropTypes.number,
	scoreVisible: PropTypes.bool,
	onChange: PropTypes.func,
};
Text.defaultProps = {
	range: 5,
	score: 0,
	scoreVisible: false,
	onChange: undefined,
};
