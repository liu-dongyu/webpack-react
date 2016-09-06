import 'normalize.css/normalize.css';
import 'font-awesome/css/font-awesome.css';
import 'global.scss';
import 'flexibility/flexibility.js';
import React from 'react';
import FaviconIco from './FaviconIco';

function App({ children }) {
  return (
    <div style={{ height: '100%' }}>
      <FaviconIco />
      {children}
    </div>
  );
}

if (process.env.NODE_ENV !== 'production') {
  App.propTypes = {
    children: React.PropTypes.node,
  };
}

export default App;
