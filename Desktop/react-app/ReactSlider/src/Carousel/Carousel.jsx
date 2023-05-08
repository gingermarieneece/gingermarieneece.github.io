import React from 'react'



import flower1 from './image/flower-1.png'
import flower2 from './image/flower-2.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectCoverflow, Autoplay } from 'swiper'

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import './Carousel.css'

const slider = [
    {
        title: "Orchid",
        description: "Orchids are plants that belong to the family Orchidaceae, a diverse and widespread group of flowering plants with blooms that are often colourful and fragrant. Orchidaceae is one of the two largest families of flowering plants, along with the Asteraceae.",
        url: "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSbywUFuXvFMZ1dqCi--Qc4bjlee40_0qvyaggtR1fWqbMQtsT7GfjWZj4oeOf5lRNq"
      },
      {
        title: "Hydrangea",
        description: "Hydrangea, commonly named the hortensia, is a genus of more than 75 species of flowering plants native to Asia and the Americas. By far the greatest species diversity is in eastern Asia, notably China, Korea, and Japan.",
        url: "https://www.whiteflowerfarm.com/mas_assets/cache/image/6/3/d/1/25553.Jpg"
      },
      {
        title: "Lily",
        description: "Lilium is a genus of herbaceous flowering plants growing from bulbs, all with large prominent flowers. They are the true lilies. Lilies are a group of flowering plants which are important in culture and literature in much of the world.",
        url: "https://www.atozflowers.com/wp-content/uploads/2017/11/Lilium_Eyeliner_05.jpg"
      },
    
      {
        title: "Tulip",
        description: "Tulips are a genus of spring-blooming perennial herbaceous bulbiferous geophytes. The flowers are usually large, showy and brightly coloured, generally red, pink, yellow, or white. They often have a different coloured blotch at the base of the tepals, internally.",
        url: "https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTnuMdz8NbpO5c-FxH1BFE1_Z-RkIzBetqjYH7ySXAZ9S07lIqxN2yiN_9QO2dLn5aG"
      },
      {
        title: "Chrysanthemum",
        description: "Chrysanthemums, sometimes called mums or chrysanths, are flowering plants of the genus Chrysanthemum in the family Asteraceae. They are native to East Asia and northeastern Europe. Most species originate from East Asia and the center of diversity is in China. Countless horticultural varieties and cultivars exist.",
        url: "https://cdn.britannica.com/09/174809-050-CA9F8F8C/daisy-mums-ray-flowers-disk-centre.jpg"
      },
]

const Carousel = () => {
  return (
    <div className='carousel'>
        <div>
            <div className='carousel-content'>
                <span>discover</span>
                <h1>React Image Slider - Swiper Framework</h1>
                <hr />
            </div>
        </div>

        <Swiper 
        className='myswiper'
        modules={[Pagination, EffectCoverflow, Autoplay]}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: true
        }}
        loop={true}
        pagination={{clickable: true}}

        autoplay={{
            delay: 5000,
            disableOnInteraction: false
        }}
        breakpoints={{
            640: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 1
            },
            1024: {
                slidesPerView: 2
            },
            1560: {
                slidesPerView: 3
            },
        }}
        
        >
            {
                slider.map(data => (
                    <SwiperSlide style={{ backgroundImage: `url(${data.url})` }} className="myswiper-slider">
                        <div>
                            <h2>{data.title}</h2>
                            <p>{data.description}</p>
                            <a href={`${data.url}`} target="_blank" className='slider-btn'>explore</a>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>

        <img src={flower1} alt="bg image" className='flower1' />
        <img src={flower2} alt="bg image" className='flower2' />
    </div>
  )
}

export default Carousel