import React from 'react';
import Slider from 'react-slick';
import './BehindTheSceneGallery.css';

// Import your images
import behind1 from '../assets/behind1.jpg';
import behind2 from '../assets/behind2.jpg';
import behind3 from '../assets/behind3.jpg';

const BehindTheScenesGallery = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 300, // Faster transition (was 500)
        fade: true,
        autoplay: true,
        autoplaySpeed: 1500, // Faster rotation (was 2000)
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        adaptiveHeight: true,
        cssEase: 'linear', // Smoother linear transition
        pauseOnHover: false, // Continue even when hovering
        pauseOnFocus: false, // Continue even when focused
        waitForAnimate: false // Don't wait for full animation
    };

    return (
        <section className="behind-the-scenes">
            <h2>Behind The Scenes</h2>
            <div className="slider-container">
                <Slider {...settings}>
                    <div>
                        <img src={behind1} alt="Behind the scenes 1" />
                    </div>
                    <div>
                        <img src={behind2} alt="Behind the scenes 2" />
                    </div>
                    <div>
                        <img src={behind3} alt="Behind the scenes 3" />
                    </div>
                </Slider>
            </div>
        </section>
    );
};

export default BehindTheScenesGallery;