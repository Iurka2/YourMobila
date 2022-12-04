import styles from '../styles/Galery.module.css'
import Image from 'next/image';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { motion } from 'framer-motion';
import Head from 'next/head'
import img1 from '../public/gallery_images/24.jpeg'
import img2 from '../public/gallery_images/16.jpg'
import img3 from '../public/gallery_images/22.jpeg'
import img4 from '../public/gallery_images/50.jpg'
import img5 from '../public/gallery_images/51.jpg'
import img6 from '../public/gallery_images/52.jpg'
import img7 from '../public/gallery_images/53.jpg'
import img8 from '../public/gallery_images/1.jpg'
import img9 from '../public/gallery_images/18.jpg'
import img10 from '../public/gallery_images/14.jpg'
import img11 from '../public/gallery_images/11.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

const Gallery = () => {
  return ( 
<>

<Head>
  <title> YourMobila | Proiecte </title>
   <meta name='keywords' content='Proiecte mobila fotografii Brașov' />
   <link rel="icon" href="/favicon.ico" />
   <meta name='description' content='Galereie cu proiectele realizate' /> 
</Head>

  {/* //=========================Bucatarii=================// */}
<h1 className={styles.heading}>Bucătărie</h1>
<Swiper
  spaceBetween={24}
  slidesPerView={5}
  navigation={true} 
  modules={[Navigation]}
  >
    {/* //=====================================Aici pui img=============// */}
<SwiperSlide>
    <Zoom wrapStyle={{ maxWidth: "100%", minHeight: "100%" }} >
<Image src={img1} />
</Zoom>
</SwiperSlide>    
</Swiper>


{/* //=========================Baie=================// */}
<h1 className={styles.heading}>Baie</h1>
<Swiper
  spaceBetween={24}
  slidesPerView={5}
  navigation={true} 
  modules={[Navigation]}
  >
       {/* //=====================================Aici pui img=============// */}
<SwiperSlide>
    <Zoom wrapStyle={{ maxWidth: "100%", minHeight: "100%" }} >
<Image src={img1} />
</Zoom>
</SwiperSlide>    
</Swiper>


</>

   );
}
 
export default Gallery