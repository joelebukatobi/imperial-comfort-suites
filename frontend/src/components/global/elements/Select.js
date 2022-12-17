export default function Select({ className, name, required, children, onChange }) {
  return (
    <section className="select">
      <select name={name} className={className} required={required} onChange={onChange}>
        {children}
      </select>
    </section>
  );
}
