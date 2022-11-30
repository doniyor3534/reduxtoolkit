import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addData, anmount, anmountAsync, decriment, deletData, incriment } from './redux/Reducer';

function App() {
  const state = useSelector(state => state.counter)
  const { count, data } = state
  const dispatch = useDispatch()
  const [value, setValue] = useState(10)
  const [input, setInput] = useState({
    id: '',
    name: ''
  })
  const inputfun = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }
  console.log(data);

  return (
    <div className="App">
      <div className="card">
        <h1>{count}</h1>
        <button onClick={() => dispatch(incriment())}>incriment</button>
        <button onClick={() => dispatch(decriment())}>decriment</button>
        <button onClick={() => dispatch(anmount(Number(value) || 10))}>anmount</button>
        <button onClick={() => dispatch(anmountAsync(Number(value) || 10))}>anmount</button>
        <input type="number" value={value} onChange={(e) => setValue(e.target.value)} />
      </div>

      <div className="card">
        <input type="text" className='datainput' name='name' onChange={inputfun} />
        <button onClick={() => dispatch(addData(input))}>Add</button>
        {
          data.map((val) => (
            <div className='datacard'>
              <h1 key={val.id}>{val.name}</h1>
              <button onClick={()=>dispatch(deletData(val.id))}>delet</button>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
