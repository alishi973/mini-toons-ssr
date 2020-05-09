import React from 'react';

const Layout = ({ children }) => {
  return (
    <>
      <div className=''>Header</div>
      <>{children}</>
      <footer>Footer</footer>
    </>
  );
};

export default Layout;
