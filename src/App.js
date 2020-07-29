import React ,{ useState } from 'react';
import './App.css';
import Parent from './components/parent'
import ValueContext from './components/context';


function App() {
  return (
    <ValueContext.Provider>
    <div className="App">
        <Parent ></Parent>
    </div>
    </ValueContext.Provider>
  );
}

export default App;
