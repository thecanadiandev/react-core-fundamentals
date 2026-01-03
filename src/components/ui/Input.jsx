export default function Input({
  label,
  id,
  type = "text",
  error,
  register,
  validation,
  placeholder,
  ...rest
}) {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className={`form-control ${error ? "is-invalid" : ""}`}
        placeholder={placeholder}
        {...register(id, validation)}
        {...rest}
      />
      {error && <div className="invalid-feedback d-block">{error.message}</div>}
    </div>
  );
}
