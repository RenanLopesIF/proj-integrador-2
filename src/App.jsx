import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App" style={{ color: "red" }}>
      Componente app
    </div>
  );
}

export default App;
