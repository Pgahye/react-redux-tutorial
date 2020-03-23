import React from 'react';
import Counters from './components/Counters';
import Todos from './components/Todos';
import CounterContainer from './containers/CounterContainer';

/*
function App() {
  return (
    <div>
      <Counters number={0} />
      <hr />
      <Todos />
    </div>
  );
}
*/

function App() {
  return (
    <div>
      <CounterContainer />
      <hr />
      <Todos />
    </div>
  );
}
export default App;
