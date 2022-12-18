// Next JS
import { useRouter } from 'next/router';
//
export default function Host({ modal, caption, message }) {
  const pathname = useRouter().pathname;
  return (
    <div className={modal ? 'success' : 'hidden'}>
      <main>
        <h5>{caption}</h5>
        <hr />
        <p>{message}</p>
        <a href={`${pathname}`}>Close Modal</a>
      </main>
    </div>
  );
}
