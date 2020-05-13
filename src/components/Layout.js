import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User, Search, Home } from '../helpers/svgs';

const Layout = (props) => {
  const address = useLocation();
  const isActive = (route) => address.pathname === route;
  const scrollToTop = (e) => {
    if (address.pathname == '/') {
      e.preventDefault && e.preventDefault();
      const c = document.documentElement.scrollTop || document.body.scrollTop;
      if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
      }
    }
  };
  return (
    <>
      <div className='header'>
        <span></span>

        <div className='title'>
          <h3>مینی تونز</h3>
        </div>

        <div></div>
      </div>
      <div className='container'>{props.children}</div>
      <div className='footer-mobile'>
        <ul>
          <li className={`${isActive('/profile') ? 'active' : ''}`}>
            <Link to='/profile'>
              <User />
              <span>پروفایل</span>
            </Link>
          </li>
          <li className={`${isActive('/search') ? 'active' : ''}`}>
            <Link to='/search'>
              <Search />
              <span>جستجو</span>
            </Link>
          </li>
          <li className={`${isActive('/') ? 'active' : ''}`}>
            <Link to='/' onClick={scrollToTop}>
              <Home active={true} />
              <span>خانه</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Layout;
