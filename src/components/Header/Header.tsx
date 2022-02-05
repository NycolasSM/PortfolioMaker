import React from 'react';

import './Header.css'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className='header-wrapper'>
        <div>
          Logo
        </div>
        <nav className='header-navigation'>
          <ul>
            <li>Home</li>
            <li>Portfolio Maker</li>
            <li>Options</li>
            <li>Preview</li>
          </ul>
        </nav>
        <button>Save</button>
      </div>
    </header>
  );
};

export default Header;
