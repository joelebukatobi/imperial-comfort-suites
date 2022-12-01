// Next JS
import Link from 'next/link';
// Components
import Container from '@/global//layouts/Container';
import Button from '@/global//elements/Button';

export default function Subscribe() {
  return (
    <section className="subscribe">
      <Container className={'!px-0 flex flex-col md:flex-row md:justify-between md:items-center'}>
        <main>
          <span>You're In Safe Hands</span>
          <h2>Ready To Get Your Property Rented?</h2>
        </main>
        <Link href="/contact">
          <Button>Get in Touch</Button>
        </Link>
      </Container>
    </section>
  );
}
