import React from 'react';

function App({ children }) {
  return (
    <div style={{ height: '100%' }}>
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
