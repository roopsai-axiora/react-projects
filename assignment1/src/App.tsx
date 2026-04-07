import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <main className="app-shell">
      <section className="card">
        <p className="eyebrow">Counter App</p>
        <h1>Count: {count}</h1>
        <div className="button-row">
          <button type="button" onClick={() => setCount((prev) => prev + 1)}>
            inc
          </button>
          <button type="button" onClick={() => setCount((prev) => Math.max(0, prev - 1))}>
            dec
          </button>
          <button type="button" onClick={() => setCount(0)}>
            reset
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
