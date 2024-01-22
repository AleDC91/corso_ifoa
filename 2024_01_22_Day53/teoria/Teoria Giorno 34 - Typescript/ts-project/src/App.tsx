import React from 'react';
import './App.css';
import MyFuncComponent from './components/MyFuncComponent';

function App() {
  return (
    <div className="App">
      <MyFuncComponent subTitle={'Sono il componente figlio di App'} num={5} />
    </div>
  );
}

export default App;
