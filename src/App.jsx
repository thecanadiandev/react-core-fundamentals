function App() {
  return (
    <>
      <div className="container mt-5">
        <div className="card shadow-sm">
          <div className="card-header bg-primary text-white">
            <h4 className="mb-0">Shopping Cart</h4>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush mb-3">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <span>Wireless Headphones</span>
                <div className="d-flex align-items-center gap-2">
                  <span className="badge bg-secondary rounded-pill">
                    $59.99
                  </span>
                  <button className="btn btn-sm btn-outline-success">+</button>
                </div>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <span>USB-C Cable</span>
                <div className="d-flex align-items-center gap-2">
                  <span className="badge bg-secondary rounded-pill">
                    $12.99
                  </span>
                  <button className="btn btn-sm btn-outline-success">+</button>
                </div>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <span>Phone Case</span>
                <div className="d-flex align-items-center gap-2">
                  <span className="badge bg-secondary rounded-pill">
                    $24.99
                  </span>
                  <button className="btn btn-sm btn-outline-success">+</button>
                </div>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <span>Screen Protector</span>
                <div className="d-flex align-items-center gap-2">
                  <span className="badge bg-secondary rounded-pill">$9.99</span>
                  <button className="btn btn-sm btn-outline-success">+</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
