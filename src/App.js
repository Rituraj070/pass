import './App.css';
import { useState } from 'react';
import Img from './home2.avif'

function App() {
  let [initial,setinitial] = useState(false)
  return (
    <>

      <input type={(initial ? 'text' : 'password')} name="pass" id="pass" />
      <button onClick={()=>setinitial(!initial)}>{initial ? 'hide' : 'show'}</button>

    </>
  );
}

export default App;
