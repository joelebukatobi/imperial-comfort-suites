export default function Input({ required, type, placeholder, value, onChange, name, className }) {
  return (
    <textarea
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className={`border-[.1rem] border-black/10 ${className}`}
    ></textarea>
  );
}
