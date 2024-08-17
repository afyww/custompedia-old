/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import digitalmarketing from '../../assets/images/digitalmarketing.png';
import socialmedia from '../../assets/images/socialmedia.png';
import kol from '../../assets/images/kol.png';
import advertising from '../../assets/images/advertising.png';
import brand from '../../assets/images/brandactivation.png';
import content from '../../assets/images/contentproduct.png';
import { Link } from "react-router-dom";

function Serviceus() {
    const [currentSlide, setCurrentSlide] = useState(0); 
    
    var settings = {
        className: "center",
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 3,
        centerMode: true,
        slidesToScroll: 3,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 0,
        rtl: false,
        beforeChange: (current, next) => setCurrentSlide(next),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className='grid grid-cols-1 bg-black'>
            <div className="my-16 mx-5 xl:mx-24 2xl:mx-28">
                <div className="space-y-2 xl:space-y-4 2xl:space-y-6">
                    <div className="flex space-x-2">
                        <div>
                        <h1 className="text-xl text-left text-white xl:text-5xl 2xl:text-7xl font-bold">Our Services</h1>
                        </div>
                        <div className='pt-3.5 xl:pt-7'>
                            <div className='bg-yellow-400 p-1 xl:p-2 rounded-xl px-8 xl:px-16'>
                            </div>
                        </div>
                    </div>
                    <div className="xl:w-1/2 text-left">
                        <p className="font-semibold text-sm text-white xl:text-lg">As your partner, we're dedicated to navigating the complex marketing landscape and delivering lasting impact.</p>
                    </div>
                    <div className="slider-container p-2">
                        <Slider {...settings}>
                            {[
                                { image: digitalmarketing, title: "Digital Marketing" },
                                { image: socialmedia, title: "Social Media" },
                                { image: kol, title: "KOL Management" },
                                { image: advertising, title: "Advertising" },
                                { image: brand, title: "Brand Activation" },
                                { image: content, title: "Content Production" }
                            ].map((item, index) => (
                                <div key={index} className={`p-4 ${index === currentSlide ? 'transform scale-110' : ''} transition-transform`}>
                                    <div className='bg-blue-400 rounded-3xl w-fit'>
                                        <img src={item.image} alt="" />
                                        <div className='p-2 space-y-2'>
                                            <div>
                                                <h1 className='text-white text-lg xl:text-2xl font-semibold'>{item.title}</h1>
                                            </div>
                                            <div>
                                                <Link to="/service">
                                                    <div className='border-white border-2 p-1 w-fit rounded-xl'>
                                                        <h1 className='text-white text-sm xl:text-xl font-semibold px-2 xl:px-4'>See More</h1>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Serviceus;
