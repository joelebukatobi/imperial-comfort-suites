export default function Input({ className, type, name, required, placeholder, onChange }) {
  return (
    <input
      className={className}
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
    />
  );
}
