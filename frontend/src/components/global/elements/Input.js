export default function Input({ className, value, type, name, required, placeholder, onChange, disabled }) {
  return (
    <input
      value={value}
      className={className}
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
      disabled={disabled}
    />
  );
}
