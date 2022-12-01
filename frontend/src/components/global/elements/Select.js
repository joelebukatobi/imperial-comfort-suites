export default function Select({ className, name, required, children }) {
  return (
    <section className="select">
      <select name={name} className={className} required={required}>
        {children}
      </select>
    </section>
  );
}
