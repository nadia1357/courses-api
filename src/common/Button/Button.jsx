import React from 'react';

const handleClick = (onClick) => {
	return onClick;
};

function Button({ buttonText, onClick }) {
	return (
		<button className='Button' onClick={handleClick(onClick)}>
			{buttonText}
		</button>
	);
}

export { Button };
