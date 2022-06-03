import React from 'react';
import './projects.css'
import IMG from '../../assets/portfolio.jpg';

import {Pagination, Navigation,EffectCoverflow } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/effect-coverflow";
import 'swiper/css/pagination';

const data =[{
  id:1,
  image:IMG,
  title: 'Mamaguebo',
  github: 'github.com',
  demo: 'demo.com'
},
{
  id:2,
  image:IMG,
  title: 'Mamaguebo2',
  github: 'github.com',
  demo: 'demo.com'
},
{
  id:3,
  image:IMG,
  title: 'Mamaguebo3',
  github: 'github.com',
  demo: 'demo.com'
}]

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="container-md projects-container">
        {
          data.map(({id, image, title, github, demo})=> {
            return(
              <article key={id} className='projects-item'>
                <div>
                  <img src={image} alt={title} className="projects-item-img"/>
                </div>
                <h3>{title}</h3>
                <div className="projects-item-cta">
                  <a href={github} className='btn'>Github</a>
                  <a href={demo} className='btn btn-primary'>Live Demo</a> 
                </div>
              </article>
            )
          })
        }
      </div>
        <br />
      {/* <Swiper className="container-sm projects-container" 
      modules={[Pagination, Navigation]}
      Navigation
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({id, image, title, github, demo})=> {
            return(
              <SwiperSlide key={id} className='projects-item'>
                <div>
                  <img src={image} alt={title} className="projects-item-img"/>
                </div>
                <h3>{title}</h3>
                <div className="projects-item-cta">
                  <a href={github} className='btn'>Github</a>
                  <a href={demo} className='btn btn-primary'>Live Demo</a> 
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper> */}
    </section>
  )
}

export default Projects