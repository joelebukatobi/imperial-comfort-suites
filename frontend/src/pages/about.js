// React
import { useEffect } from 'react';
// Components
import Layout from '@/global//layouts/Layout';
import Container from '@/global//layouts/Container';
import Reviews from '@/global//components/Reviews';
import Subscribe from '@/global//components/Subscribe';
import Card from '@/global//components/Card';
// External Libraries
import AOS from 'aos';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Layout pageTitle={'About | Imperial Comfort Suites'}>
      <div className="about">
        <Container>
          <section className="about__listings">
            <header data-aos="fade-up" data-aos-duration="800" data-aos-delay="100" data-aos-easing="ease-in-out">
              <span>why we exist</span>
              <h2>Our Mission and Vision</h2>
              <p>
                We want to be the best at what we do - creating and delivering excellent hospitality services for our
                clients. We want to work with you to make sure our clients get high value returns on all properties
                listed on our platforms.
              </p>
            </header>
            <main data-aos="fade-up" data-aos-duration="800" data-aos-delay="100" data-aos-easing="ease-in-out">
              <p>
                The wise young man or wage earner of today invests his money in real estate.
                <br />
                <br />
                Talk to us, let’s help you maximize your investments.
              </p>
            </main>
          </section>
        </Container>

        <Subscribe />
      </div>
    </Layout>
  );
}
