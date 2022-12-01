// React
import { useState } from 'react';
// Next JS
import Link from 'next/link';
// Components

import Card from '@/global//components/Card';
import Container from '@/global//layouts/Container';
import Layout from '@/global//layouts/Layout';
import Subscribe from '@/global//components/Subscribe';

export default function Listing() {
  return (
    <Layout>
      <Container>
        <section className="listings">
          <Card />
          <Card />
          <Card />
        </section>
      </Container>

      <Subscribe />
    </Layout>
  );
}
