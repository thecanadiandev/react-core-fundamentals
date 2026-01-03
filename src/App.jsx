import { useState } from "react";
import LifecycleDemo from "./components/LifecycleDemo";

function App() {
  const [showLifecycleDemo, setShowLifecycleDemo] = useState(false);
  return (
    <>
      <div className="container mt-5">
        <button
          className="btn btn-danger"
          onClick={() => setShowLifecycleDemo(!showLifecycleDemo)}
        >
          {showLifecycleDemo ? "Hide" : "Show"} Lifecycle Demo
        </button>
        {showLifecycleDemo && <LifecycleDemo />}
      </div>
    </>
  );
}

export default App;
