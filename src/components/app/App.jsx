/* eslint-disable max-len */
import React, { useState } from 'react';

const useRecord = (init) => {
  const [current, setCurrent] = useState(init);
  const [index, setIndex] = useState(0);

  const record = (color) => {
    setCurrent((prev) => [...prev.slice(0, index + 1), color, ...prev.slice(index + 1)]);
    setIndex(prevIndex => prevIndex + 1);
  };

  const redo = () => {
    setIndex(prevIndex => prevIndex + 1);
  };

  const undo = () => {
    setIndex(prevIndex => prevIndex - 1);
  };

  return { undo, redo, record, index, current };
};

function App() {
  const { undo, redo, record, index, current } = useRecord('#FF0000');

  return (
    <section>
      <button aria-label="undo" onClick={undo} >Undo</button>
      <button aria-label="redo" onClick={redo} >Redo</button>
      <input aria-label="picker-input" type="color" value={current[index]} onChange={({ target }) => record(target.value)} />
      <div style={{ backgroundColor: current[index], width: '20rem', height: '20rem' }}>Color Picker</div>
    </section>
  );
}

export default App;
