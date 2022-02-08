import React from 'react';
import PropsTypes from 'prop-types';
import './index.css'
import Button from '../Button';
import { useLocation } from 'react-router-dom';

const Header = ({ title, showTask, onToggleShowTask }) => {
      const location = useLocation();
      return (
            <>
                  <header className='header'>
                        <h1>{title}</h1>
                        {
                              location.pathname === "/" && (
                                    <Button
                                          onClick={() => onToggleShowTask(!showTask)}
                                          color='#fff'
                                          backgroundColor={showTask ? 'red' : 'green'}>
                                          {showTask ? 'Close' : 'Add'}
                                    </Button>
                              )
                        }
                  </header>
            </>
      );
};

Header.defaultProps = {
      title: 'Default Title'
}

Header.propTypes = {
      title: PropsTypes.string.isRequired
}




export default Header;
