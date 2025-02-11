import React from 'react';
import PropTypes from 'prop-types';

const DynamicButton = ({
  text,
  link,
  color,
  radius,
  hoverColor,
  padding,
  width,
  height,
  fontSize,
  fontWeight,
  className,
}) => {
  const buttonStyles = {
    backgroundColor: color || 'blue', // Default color if not provided
    borderRadius: radius || '5px',
    padding: padding || '10px 20px',
    width: width || 'auto',
    height: height || 'auto',
    fontSize: fontSize || '16px',
    fontWeight: fontWeight || '600',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyles = {
    backgroundColor: hoverColor || 'darkblue', // Default hover color
  };

  return (
    <a href={link || '#'} style={{ textDecoration: 'none' }}>
      <button
        className={className}
        style={buttonStyles}
        onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyles.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyles.backgroundColor)}
      >
        {text || 'Click Me'}
      </button>
    </a>
  );
};

DynamicButton.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
  color: PropTypes.string,
  radius: PropTypes.string,
  hoverColor: PropTypes.string,
  padding: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  className: PropTypes.string,
};

export default DynamicButton;
