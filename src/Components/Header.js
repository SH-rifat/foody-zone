import React from 'react';

function Header() {
  return (
    <div className='top-section'>
      <div className='top'>
        <div className='logo'>F<span>oo</span>dy Z<span>o</span>ne</div>
        <input type="text" placeholder='Search Food...' />
      </div>
      <div className='menu-section'>
        <ul className='menu'>
            <li className='nav-link'>All</li>
            <li className='nav-link'>Breakfast</li>
            <li className='nav-link'>Lunch</li>
            <li className='nav-link'>Dinner</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
