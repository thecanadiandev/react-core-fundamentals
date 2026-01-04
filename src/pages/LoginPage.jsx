import { useRef } from "react";

export default function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get values directly from refs
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handleClear = () => {
    emailRef.current.value = "";
    passwordRef.current.value = "";
    emailRef.current.focus();
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white">
          <h4 className="mb-0">Login</h4>
        </div>
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                ref={emailRef}
                placeholder="Enter your email"
                autoComplete="email"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                ref={passwordRef}
                placeholder="Enter your password"
                autoComplete="current-password"
              />
            </div>

            <div className="d-grid gap-2">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Login
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={handleClear}
              >
                Clear
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
