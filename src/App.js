import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  return (
    <div style={styles.container}>
      <h1>React Counter</h1>
      <p style={styles.count}>{count}</p>
      <div>
        <button onClick={decrement} style={styles.button}>-</button>
        <button onClick={reset} style={styles.button}>Reset</button>
        <button onClick={increment} style={styles.button}>+</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'Arial, sans-serif',
  },
  count: {
    fontSize: '48px',
    margin: '20px 0',
  },
  button: {
    padding: '10px 20px',
    fontSize: '18px',
    margin: '5px',
    cursor: 'pointer',
  },
};

export default App;
