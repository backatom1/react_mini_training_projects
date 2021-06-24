import React from 'react';
import { Route } from 'react-router';

import Main from './components/Main';
import About from './components/About';
import Contacts from './components/Contacts';

function App() {
  return (
    <div>
      <Route exact path='/' component={Main} />
      <Route exact path='/about' component={About} />
      <Route exact path='/contacts' component={Contacts} />
    </div>
  );
}

export default App;