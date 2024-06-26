'use client'
import React, { useEffect, useState } from 'react'
import bgImg0 from '../app/assets/Hero/2151205182.jpg'
import bgImg1 from '@/public/Home/slider1.webp'
import bgImg2 from '@/public/Home/slider2.webp'
import bgImg3 from '@/public/Home/slider3.webp'
import bgImg4 from '@/public/Home/slider4.webp'
import bgImg5 from '@/public/Home/slider5.webp'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


export default function Hero() {
  const router = useRouter();
  let element;

  const gotoId = (id) => {
    if (router.pathname !== '/') {
      router.push('/');
      setTimeout(() => {
        element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 0);
    } else {
      element = document.getElementById(id);
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };
  const bgImgs = [
    bgImg0, bgImg1, bgImg2, bgImg3, bgImg4, bgImg5
  ]
  const [backgroundImage, setBackGroundImage] = useState()
  useEffect(() => {
    setBackGroundImage(bgImgs[Math.ceil(Math.random() * bgImgs.length) - 1].src)
  })
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {/* <div className="hero-overlay bg-opacity-60"></div> */}
      <div className=" h-full w-full backdrop-blur-sm bg-black/30 text-center text-neutral-content flex items-center justify-center">
        <div className="max-w-md">
          <h1 className="mb-2 text-5xl font-bold">Namaste!</h1>
          <p className="mb-5 ">&quot;Discover the rich flavors and aromatic spices of authentic Indian cuisine—right in your own kitchen!&quot;</p>
          <button className="btn btn-primary" onClick={() => { gotoId('dishofday') }}>Get Started</button>
        </div>
      </div>
    </div>
  )
}
