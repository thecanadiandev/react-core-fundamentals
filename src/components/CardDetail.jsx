import React from 'react'

const CardDetail = () => {
  return (
    <div className="container mt-5">
          <div className="card shadow-sm">
            <div className="card-header bg-success text-white">
              <h4 className="mb-0">Cart Details</h4>
            </div>
            <div className="card-body">
              <div className="border rounded p-3 mb-3">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h5 className="mb-0">Wireless Headphones</h5>
                  <button className="btn btn-sm btn-danger">Delete</button>
                </div>
                <p className="text-muted mb-2">Unit Price: $59.99</p>

                <div className="d-flex align-items-center gap-3 mb-2">
                  <label className="fw-bold">Quantity:</label>
                  <div className="btn-group" role="group">
                    <button className="btn btn-outline-secondary btn-sm">
                      -
                    </button>
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      disabled
                    >
                      2
                    </button>
                    <button className="btn btn-outline-secondary btn-sm">
                      +
                    </button>
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mt-3 pt-3 border-top">
                  <span className="fw-bold">Subtotal:</span>
                  <span className="fs-5 text-success fw-bold">$119.98</span>
                </div>
              </div>

              <div className="border rounded p-3 mb-3">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h5 className="mb-0">USB-C Cable</h5>
                  <button className="btn btn-sm btn-danger">Delete</button>
                </div>
                <p className="text-muted mb-2">Unit Price: $12.99</p>

                <div className="d-flex align-items-center gap-3 mb-2">
                  <label className="fw-bold">Quantity:</label>
                  <div className="btn-group" role="group">
                    <button className="btn btn-outline-secondary btn-sm">
                      -
                    </button>
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      disabled
                    >
                      1
                    </button>
                    <button className="btn btn-outline-secondary btn-sm">
                      +
                    </button>
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mt-3 pt-3 border-top">
                  <span className="fw-bold">Subtotal:</span>
                  <span className="fs-5 text-success fw-bold">$12.99</span>
                </div>
              </div>

              <div className="bg-light rounded p-3 mt-4">
                <div className="d-flex justify-content-between align-items-center">
                  <h4 className="mb-0">Total:</h4>
                  <h3 className="mb-0 text-success">$132.97</h3>
                </div>
              </div>

              <button className="btn btn-primary w-100 mt-3">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
  )
}

export default CardDetail
