// React
import { useRef } from 'react';
// Next JS
import Image from 'next/image';
import dynamic from 'next/dynamic';
// Images
import terrainImage from '@/images//terrain-image.png';
// Components
import Container from '@/global//layouts/Container';
import Button from '@/global//elements/Button';
// Config\, Utils & Helpers
import { API_URL } from '@/config/index';

// External Libraries
import { Swiper, SwiperSlide } from 'swiper/react';
import moment from 'moment/moment';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Reviews({ reviews }) {
  // console.log(reviews);
  const swiperRef = useRef();
  return (
    <section className="index__reviews">
      <Container className={'flex flex-col md:flex-row md:items-center md:justify-between relative'}>
        <header>
          <span>Client's Testimonials</span>
          <h2>See what our clients says about us</h2>
        </header>
        <nav>
          <Button onClick={() => swiperRef.current.slidePrev()}>
            <svg className="h-[3.2rem] w-[3.2rem] md:h-[6.4rem] md:w-[6.4rem]">
              <use href="/images/sprite.svg#icon-chevron-left" />
            </svg>
          </Button>
          <Button onClick={() => swiperRef.current.slideNext()}>
            <svg className="h-[3.2rem] w-[3.2rem] md:h-[6.4rem] md:w-[6.4rem]">
              <use href="/images/sprite.svg#icon-chevron-right" />
            </svg>
          </Button>
        </nav>
      </Container>
      <Container className={'absolute top-[32rem] m-auto w-full p-0'}>
        <div className="w-[100%] flex items-center justify-center">
          <Swiper
            loop={true}
            spaceBetween={20}
            slidesPerView="auto"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
          >
            {reviews.map((review) => (
              <SwiperSlide>
                <figure>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Image src={terrainImage} alt="terrain" layout="fill" priority />
                      <aside>
                        <h4>{review.name}</h4>
                        <p>{moment(review.created_at).format('MMMM YYYY')}</p>
                      </aside>
                    </div>
                    <div className="flex">
                      {[...new Array(review.stars)].map(() => {
                        return (
                          <svg className="h-[1.2rem] w-[1.2rem] md:h-[1.75rem] md:w-[1.64rem]">
                            <use href="/images/sprite.svg#icon-star" />
                          </svg>
                        );
                      })}
                    </div>
                  </div>
                  <figcaption>
                    <p>{review.review.substring(0, 100)}...</p>
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
}
