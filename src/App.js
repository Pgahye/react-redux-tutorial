import React from 'react';
import Counters from './components/Counters';
import Todos from './components/Todos';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';

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

/*
function App() {
  return (
    <div>
      <CounterContainer />
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
      <TodosContainer />
    </div>
  );
}
export default App;
