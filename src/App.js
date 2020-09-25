
import React, { Fragment } from 'react';
import './normalize.css';
import './skeleton.css';
import './App.css';

import Form from './components/Forms.js';

function App() {
  return (
    <Fragment>
      <div>
      <h1>Valivery</h1>
      <div className='Login u-pull-right'>
      <Form></Form>
    </div>
      </div>
    
    <div className='Container'>
      
    </div>
    </Fragment>
  );
}

export default App;
