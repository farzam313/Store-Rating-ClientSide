// src/components/Input.jsx
function Input({
  type = "text",
  placeholder = "",
  value,
  onChange,
  className = "",
  ...props
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`input-base ${className}`}
      {...props}
    />
  );
}
export default Input;
