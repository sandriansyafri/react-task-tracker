import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'

const Footer = () => {
      return (
            <>
                  <footer>
                        <p>Copyright &copy; - SANS 2022</p>
                        <Link to={'/about'}>About</Link>
                  </footer>
            </>
      );
};

export default Footer;
