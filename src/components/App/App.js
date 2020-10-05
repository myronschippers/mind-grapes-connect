import React from 'react';

// CUSTOM COMPONENTS
import GlobalLayout from '../GlobalLayout/GlobalLayout';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function App() {
  return (
    <GlobalLayout header={Header} footer={Footer}>
      Body Content Here
    </GlobalLayout>
  );
}

export default App;
