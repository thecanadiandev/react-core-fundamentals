import { useState, useEffect } from "react";

export default function LifecycleDemo() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  // 1. Component Mount - Runs once when component first renders
  useEffect(() => {
    // Component mounted

    setTimeout(() => {
      setData("Data loaded from API");
    }, 2000);

    return () => {
      // Component unmounted - cleanup
    };
  }, []); // Empty dependency array = runs once on mount

  // 2. Component Update - Runs when count changes
  useEffect(() => {
    // Count changed

    if (count > 0) {
      document.title = `Count: ${count}`;
    }

    return () => {
      // Cleanup before next count update
    };
  }, [count]); // Runs whenever count changes

  // 3. Runs on Every Render
  useEffect(() => {
    // Component rendered or updated
  }); // No dependency array = runs on every render

  return (
    <div className="container mt-5">
      <div className="card shadow-sm">
        <div className="card-header bg-info text-white">
          <h4 className="mb-0">Lifecycle Demo</h4>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <h5>Count: {count}</h5>
            <button
              className="btn btn-primary me-2"
              onClick={() => setCount(count + 1)}
            >
              Increment
            </button>
            <button className="btn btn-secondary" onClick={() => setCount(0)}>
              Reset
            </button>
          </div>

          <div className="mb-3">
            <h5>Data Status:</h5>
            <p className="text-muted">{data ? data : "Loading..."}</p>
          </div>

          <div className="alert alert-info">
            <strong>Check console</strong> to see lifecycle logs
          </div>
        </div>
      </div>
    </div>
  );
}
