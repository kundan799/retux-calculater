import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { COUNTER_DECREMENT, COUNTER_INCREMENT } from './store/action.type';
import { add, divide, inadd, insubtract, Myltiplay, subtract } from './store/Action';

function App() {
  const [input,setInput]=useState(0)
  
  const dispatch=useDispatch();
  const count=useSelector(state=>state.count)
 
  return (
    
    <div className="App">
      <h1>
        count:{count}</h1>
       
      <button onClick={()=>dispatch(add())}>increment</button>
      <button  disabled ={count<=0} onClick={()=>dispatch(subtract())}>decrement</button>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div>
        <h1>output</h1>
        <h1>{input}</h1>
      </div>
      <div>
      <input type="number" placeholder='enter number...' onChange={(e)=>setInput(e.target.value)} />
      <div>
        <button onClick={()=>dispatch(inadd(input))}>ADD</button>
        <button onClick={()=>dispatch(Myltiplay(input))}>multiplay</button>
      </div>
      <div>
        <button onClick={()=>dispatch(insubtract(input))}>subtract</button>
        <button onClick={()=>dispatch(divide(input))}>divide</button>
      </div>
      </div>
      
    </div>
  );
}

export default App;
