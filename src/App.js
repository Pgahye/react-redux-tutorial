import React from 'react';
import Counters from './components/Counters';
import Todos from './components/Todos';

function App() {
  return (
    <div>
      <Counters number={0} />
      <hr />
      <Todos />
    </div>
  );
}

export default App;
