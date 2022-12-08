import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Hero from '../components/hero/Hero';
import Destination from '../components/destinations/Destination';
import Search from '../components/search/Search';
import Selects from '../components/selects/Selects';
import Carousel from '../components/carousel/Carousel';
import Footer from '../components/footer/Footer';

const Pages = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Destination />
        <Search />
        <Selects />
        <Carousel />
        <Footer />

    </div>
  )
}

export default Pages