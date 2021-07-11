import React from 'react';

const Layout = ({ children, ...rest }) => {
  return (
    <div className='container' {...rest}>
      {children}
    </div>
  );
};

export default Layout;
