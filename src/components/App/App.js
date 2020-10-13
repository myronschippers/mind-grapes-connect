import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

// CUSTOM COMPONENTS
import GlobalLayout from '../GlobalLayout/GlobalLayout';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

// MODULES
import navConfig from '../MainNav/nav.config';

function App() {
  return (
    <Router>
      <GlobalLayout header={Header} footer={Footer}>
        {navConfig.map((pgConfig) => {
          return (
            <Route exact path={pgConfig.path} component={pgConfig.component} />
          );
        })}
      </GlobalLayout>
    </Router>
  );
}

export default App;
