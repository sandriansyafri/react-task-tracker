import React from 'react';
import PropTypes from 'prop-types';
import './index.css'


const Button = ({ color, backgroundColor, children, onClick }) => {
      return (
            <>
                  <button onClick={onClick} className='btn' style={{ color, backgroundColor }}>
                        {children}
                  </button>
            </>
      );
};

Button.defaultProps = {
      color: 'black',
      backgroundColor: 'steelblue',
      children: 'text',
}

Button.propTypes = {
      color: PropTypes.string,
      backgroundColor: PropTypes.string,
      children: PropTypes.string,
      onClick: PropTypes.func
};

export default Button;
