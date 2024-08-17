import getstarted from '../../assets/images/getstarted.png'
import { Link } from 'react-router-dom';

function Hero() {

    return (
        <div className="bg-black grid grid-cols-1 h-screen">
            <div className="my-auto xl:my-60 2xl:my-72 mx-auto">
                <div className="space-y-4">
                    <div className="xl:flex justify-center xl:space-x-5 space-y-4">
                        <div className='text-center'>
                            <h1 className="text-white text-4xl font-semibold xl:text-8xl 2xl:text-9xl">WE ARE</h1>
                        </div>
                        <div className="mx-auto xl:w-1/4 xl:mx-0 my-auto">
                            <p className="text-white font-base text-center xl:text-left text-xs xl:text-base 2xl:text-lg">We can help your company grow and win more business with creative branding, social media, digital, print and merchandise.</p>
                        </div>

                    </div>
                    <div className="text-center">
                        <h1 className="text-yellow-500 font-semibold text-4xl xl:text-8xl 2xl:text-9xl">FULL - SERVICES</h1>
                    </div>
                    <div className="xl:flex justify-center xl:space-x-12">
                        <div className="">
                            <h1 className="text-white text-4xl text-center font-semibold xl:text-8xl 2xl:text-9xl">AGENCY</h1>
                        </div>
                    </div>
                    <div className="xl:flex xl:justify-center xl:space-x-10 space-y-8">
                        <div className="xl:w-1/3 my-auto">
                            <p className="text-white font-base text-center xl:text-left text-xs xl:text-base 2xl:text-lg">Ready To See How Our True Full-Stack Solution Can Help Drive Meaningful Growth For You.</p>
                        </div>
                        <div className="my-auto mx-auto">
                            <div className="xl:px-28 mx-10 xl:mx-0 px-0 p-1 xl:p-2 rounded-xl border-4 border-yellow-500">
                            </div>
                        </div>
                        <div className='justify-center flex'>
                            <Link to="/">
                                <img className='' src={getstarted} alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
