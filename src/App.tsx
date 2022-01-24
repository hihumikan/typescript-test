import React, { useCallback, useState } from "react";

import { Child1, Child2 } from "./components/Child";

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);
  const handleDecrement = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);
  return (
    <div>
      <div className="App">
        <div>{count}</div>
        <div>
          <button onClick={handleIncrement}>+1</button>
          <button onClick={handleDecrement}>-1</button>
        </div>
      </div>
    </div>
  );
};

export default App;
