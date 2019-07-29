import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './views/Home'

function App() {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Route path ="/" exact component={Home} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
