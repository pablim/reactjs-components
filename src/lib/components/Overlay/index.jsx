import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { flexPositions } from '../../utils/displayFex'

import styles from './Overlay.module.scss';

export const Overlay = ({ 
    visible, 
    onClick, 
    children, 
    contentPosition, 
    contentSize 
}) => {
	const [visibility, setVisibility] = useState(false);

	const onClickToLeave = (e) => {
		onClick(e);
		setVisibility(false);
	};

	useEffect(() => {
		setVisibility(visible);
	}, []);

	return (
		<div
			className={`${visibility ? styles.overlay : ''}`}
            style={flexPositions[contentPosition]}
			onClick={(e) => onClickToLeave(e)}
			data-testid='overlay'
		>
            {visibility && 
                <div className={styles.content} 
                    onClick={(e) => e.stopPropagation()}
                >
                    {children}
                </div>
            }

        </div>
	);
};

Overlay.propTypes = {
	visible: PropTypes.bool,
	onClick: PropTypes.func,
	children: PropTypes.element,
    contentPosition: PropTypes.oneOf([
        'left',
        'leftTop',
        'leftBottom',
        'right',
        'rightTop',
        'rightBottom,',
        'top',
        'topLeft',
        'topRight',
        'bottom',
        'bottomLeft',
        'bottomRight',
        'center',
    ]), 
    contentSize: PropTypes.string 
};

Overlay.defaultProps = {
    onClick: () => {}
}