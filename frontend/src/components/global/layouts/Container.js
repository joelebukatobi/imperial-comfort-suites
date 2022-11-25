export default function Container({ children, className }) {
  return (
    <section className={`max-w-[144rem] px-[3.2rem] w-[100%]  mx-auto overflow-hidden ${className}`}>
      {children}
    </section>
  );
}
