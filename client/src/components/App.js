import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './views/Home'
import Navbar from './molecules/navbar/Navbar'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Route path ="/" exact component={Home} />
      </BrowserRouter>
    </div>
  );
}

export default App;
