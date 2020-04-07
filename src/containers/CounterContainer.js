import React, { useCallback } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counters';
import { increase, decrease } from '../modules/counter';
import { bindActionCreators } from 'redux';

/*
const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};
*/

const CounterContainer = () => {
  const number = useSelector(state => state.counter.number);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};
/*
const mapStateToProps = state => ({
  number: state.counter.number,
});

const mapDispatchToProps = dispatch => ({
  increase: () => {
    //console.log('increase');
    dispatch(increase());
  },
  decrease: () => {
    //console.log('decrease');
    dispatch(decrease());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
*/

/*
export default connect(
  state => ({
    number: state.counter.number,
  }),
  dispatch => ({
    increase: () => dispatch(increase()),
    decrease: () => dispatch(decrease()),
  }),
)(CounterContainer);
*/

/*
export default connect(
  state => ({
    number: state.counter.number,
  }),
  dispatch =>
    bindActionCreators(
      {
        increase,
        decrease,
      },
      dispatch,
    ),
)(CounterContainer);
*/
/*
export default connect(
  state => ({
    number: state.counter.number,
  }),
  {
    increase,
    decrease,
  },
)(CounterContainer);
*/

export default CounterContainer;
