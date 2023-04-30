import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { Link } from 'react-router-dom';
import '../scss/components/Slider.scss'

SwiperCore.use([Navigation, Pagination, Autoplay]);

type SliderData = {
    id: number;
    type: 'image' | 'video';
    src: string;
    link?: string;
    alt?: string;
};

interface SliderProps {
    slides: SliderData[];
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
    console.log(slides);
    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            loop
        >
            {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                    {slide.type === 'image' && (
                        <div className="relative">
                            <img src={slide.src} alt={slide.alt} className="slider-image" />
                            {slide.link && (
                                <Link
                                    to={slide.link}
                                    className="absolute inset-0"
                                    aria-label={slide.alt}
                                ></Link>
                            )}
                        </div>
                    )}
                    {slide.type === 'video' && (
                        <video
                            src={slide.src}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="slider-video"
                        ></video>
                    )}
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider;
