import logo from './logo.svg';
import './App.css';
import { CounterContext } from './context/counter-context'
import { useContext, useState } from 'react';

function App() {

  const [state, dispatch] = useContext(CounterContext)

  const [age] = useState()

  const onAgeUp = () => {
    dispatch({
      type: 'AGE_UP',
      val: 1
    })
  }

  const onAgeDown = () => {
    dispatch({
      type: 'AGE_DOWN',
      val: 1
    })
  }


  return (
    <div className="App">
      <div>Age: <span>{state.age}</span></div>
      <button onClick={onAgeUp}>Age UP</button>
      <button onClick={onAgeDown}>Age DOWN</button>
    </div>
  );
}

export default App;
