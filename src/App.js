import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import 'normalize.css/normalize.css';
import 'font-awesome/css/font-awesome.css';

function App({ children }) {
  return (
    <div>
      <Header />
      <div>
        {children}
        <a href="https://github.com/liu-dongyu"><i className="fa fa-github"></i></a>
      </div>
      <Footer />
    </div>
  );
}

if (process.env.NODE_ENV !== 'production') {
  App.propTypes = {
    children: React.PropTypes.node,
  };
}

export default App;

