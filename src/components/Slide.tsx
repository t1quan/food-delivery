import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/swiper-bundle.css';

type SlideProps = {
   children?: React.ReactNode;
   component?: React.ElementType;
}

const Slide = ({children, component: Component = React.Fragment}: SlideProps) => {
   if (!Array.isArray(children) || children.length == 0) return null;

   return (
      <Swiper spaceBetween={20} slidesPerView={3}>
         {children.map((child, i) => (
            <SwiperSlide key={i}>
               <Component prop={child}/>
            </SwiperSlide>
         ))}
      </Swiper>
   );
};

export default Slide;