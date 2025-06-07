import React from 'react'
import Header from './pages/Header'
import Hero from './pages/Hero'
import DestinationSection from './pages/DestinationSection'
import './css/Home.css';
import Footer from './pages/Footer';
import Blog from './pages/Blog';
import About from './pages/About';
import Popular from './pages/Popular';

export default function Home() {
  return (
    <>
    <Header />
    <Hero />
     <DestinationSection />

     <Popular />
<About />
     <Blog />
     <Footer />
    
    </>
  )
}
