import React, { Fragment } from 'react';
import './App.css';
import Header from '../components/Header';
import AutoCompleteResults from '../components/AutoCompleteResults';

function App() {
  return (
    <Fragment>
      <Header />
      <AutoCompleteResults />
    </Fragment>

  );
}

export default App;
