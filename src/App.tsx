import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { pipe } from '@matechs/core/Function';
import { parseCatFactMatech } from './matechs/matechs';
import { option as O, effect as T } from '@matechs/core';
import { getCatFact } from './api/api';
import { WithCatFactService } from './matechs/services';
import { parseCatFactEffect } from './effects/effect';

function App() {
  const [factMatch, setFactMatech] = useState<string | null>(null)
  const [factEffect, setFactEffect] = useState<string | null>(null)

  useEffect(() => {
    pipe(
      parseCatFactMatech,
      T.chainTap(v => {
        setFactMatech(v)
        return T.unit
      }),
      WithCatFactService(getCatFact), // could be a mock
      T.runToPromise
    )
  }, [])

  useEffect(() => {
    parseCatFactEffect(getCatFact).then(setFactEffect)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>{factEffect}</p>
        <p>{factMatch}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
