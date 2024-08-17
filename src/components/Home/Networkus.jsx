import { IoIosArrowForward } from "react-icons/io";
import customfluencer from '../../assets/images/customfluencer.png'
import creasa from '../../assets/images/creasa.png'
import parcelin from '../../assets/images/parcelin.png'
import customprinting from '../../assets/images/customprinting.png'
import parcelinpack from '../../assets/images/parcelinpack.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

function Networkus() {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        speed: 10000,
        autoplaySpeed: 0,
        cssEase: "linear",
        arrows: false // This line removes the arrows
    };

    const settings2 = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        speed: 10000,
        autoplaySpeed: 0,
        cssEase: "linear",
        rtl: true,
        arrows: false // This line removes the arrows
    };

    return (
        <div className='grid grid-cols-1 bg-black'>
            <div className="my-16 mx-5 xl:mx-24 2xl:mx-28">
                <div className="space-y-5 xl:space-y-8 2xl:space-y-12">
                    <div className="flex space-x-2">
                        <div>
                            <h1 className="text-xl text-left xl:text-5xl 2xl:text-7xl text-white font-bold">Our Network</h1>
                        </div>
                        <div className='pt-3.5 xl:pt-7'>
                            <div className='bg-yellow-400 p-1 xl:p-2 rounded-xl px-8 xl:px-16'>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white p-2 rounded-xl'>
                        <Slider className="" {...settings}>
                        <div className='my-auto mx-auto'>
                                <img className="my-5" src={customfluencer} alt="" />
                            </div>
                            <div className='my-auto mx-auto'>
                                <img className="my-5" src={creasa} alt="" />
                            </div>
                            <div className='my-auto mx-auto'>
                                <img className="xl:my-5" src={parcelin} alt="" />
                            </div>
                            <div className='my-auto mx-auto'>
                                <img src={customprinting} alt="" />
                            </div>
                            <div className='my-auto mx-auto'>
                                <img className="my-6" src={parcelinpack} alt="" />
                            </div>
                        </Slider>
                        <Slider className="space-x-6" {...settings2}>
                            <div className='my-auto mx-auto'>
                                <img className="my-6" src={parcelinpack} alt="" />
                            </div>
                            <div className='my-auto mx-auto'>
                                <img className="" src={customprinting} alt="" />
                            </div>
                            <div className='my-auto mx-auto'>
                                <img className="xl:my-5" src={parcelin} alt="" />
                            </div>
                            <div className='my-auto mx-auto'>
                                <img className="my-5" src={creasa} alt="" />
                            </div>
                            <div className='my-auto mx-auto'>
                                <img className="my-5" src={customfluencer} alt="" />
                            </div>
                        </Slider>
                    </div>
                    <div className="w-fit">
                        <Link to="">
                            <div className="p-2 my-auto hover:scale-110 hover:bg-gradient-to-l flex justify-between from-blue-400 to-blue-600 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl w-fit duration-200 delay-150">
                                <h1 className='text-white font-semibold text-left xl:px-5 px-2 text-sm xl:text-xl 2xl:text-2xl'>Find More Our Sister Company</h1>
                                <IoIosArrowForward className='text-white w-5 h-5 xl:w-7 xl:h-7' />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Networkus
