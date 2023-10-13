import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'

import '@/assets/css/font.css'
import '@/assets/css/main.css'
import '@/assets/css/transition.css'

import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import 'swiper/css/effect-fade';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-creative';
import 'swiper/css/effect-coverflow';

import type { AppProps } from 'next/app'
gsap.registerPlugin(ScrollTrigger);

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
