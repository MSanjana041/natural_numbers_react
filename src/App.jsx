import { useState } from 'react'

function App() {
  const [num, setNum] = useState(0);
  const [numbers , setNumbers] = useState([]);

  const generateNumber = () => {
    let n = num;
    let numss = [];
    for(let i=0; i<num ; i++){
      numss.push(i+1);
    }

    setNumbers(numss);
  }

  return (
    <div>
    <h2>First N natural numbers</h2>
    <input type="number" value={num} placeholder="Enter a number" onChange={(e)=>setNum(Number(e.target.value))}></input>
    <button onClick={generateNumber}>Generate</button>
    <p>{numbers.join(", ")}</p>
    </div>
    
  );
}

export default App
