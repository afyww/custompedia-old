/* eslint-disable react/no-unescaped-entities */
import about from '..//../assets/images/about.png'
import drop from '..//../assets/images/dropdown.png'
import { useState } from 'react';


function About() {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
    const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleDropdown2 = () => {
        setIsDropdownOpen2(!isDropdownOpen2);
    };

    const toggleDropdown3 = () => {
        setIsDropdownOpen3(!isDropdownOpen3);
    };

    return (
        <div className='grid grid-cols-1 bg-black'>
            <div className="my-28 xl:my-36 2xl:my-52 mx-5 xl:mx-24 2xl:mx-28">
                <div className="space-y-8 xl:space-y-10">
                    <div className="flex space-x-2">
                        <div>
                            <h1 className="text-2xl text-center xl:text-left xl:text-6xl 2xl:text-8xl text-white font-extrabold">ABOUT US</h1>
                        </div>
                        <div className='pt-3.5 xl:pt-7 2xl:pt-14'>
                            <div className='border-2 xl:border-4 border-yellow-400 p-1 xl:p-2 rounded-xl px-12 xl:px-24 2xl:px-28'>
                            </div>
                        </div>
                    </div>
                    <div className='space-y-8 grid grid-cols-1 xl:grid-cols-2'>
                        <div className='mx-auto'>
                            <img className='mx-auto w-8/12 xl:w-10/12' src={about} alt="" />
                        </div>
                        <div className='my-auto space-y-4 '>
                            <div className='bg-gray-800 p-4 xl:p-6 rounded-3xl'>
                                <div className='flex justify-between'>
                                    <div className='my-auto'>
                                        <h1 className='text-white font-semibold text-xl xl:text-3xl'>It's CustomPedia</h1>
                                    </div>
                                    <button onClick={toggleDropdown}>
                                        <div className='my-auto'>
                                            <img className='my-auto w-3/4 xl:w-full' src={drop} alt="" />
                                        </div>
                                    </button>
                                </div>
                                {isDropdownOpen && (
                                    <div className='my-4 bg-gray-700 p-4 rounded-xl'>
                                        <p className='text-white font-semibold text-left text-xs xl:text-lg 2xl:text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique lorem sem, et semper libero ornare lacinia. Nunc efficitur dolor id diam consequat congue. Aenean aliquet facilisis augue, vel lobortis lectus vestibulum sed. Integer sit amet mauris rhoncus, tincidunt augue quis, tristique nulla. Etiam mattis sollicitudin est, sed dictum tortor scelerisque at.</p>
                                    </div>
                                )}
                            </div>
                            <div className='bg-gray-800 p-4 xl:p-6 rounded-3xl'>
                                <div className='flex justify-between'>
                                    <div className='my-auto'>
                                        <h1 className='text-white font-semibold text-xl xl:text-3xl'>How we started</h1>
                                    </div>
                                    <button onClick={toggleDropdown2}>
                                        <div className='my-auto'>
                                            <img className='my-auto w-3/4 xl:w-full' src={drop} alt="" />
                                        </div>
                                    </button>
                                </div>
                                {isDropdownOpen2 && (
                                    <div className='mt-4 bg-gray-700 p-4 rounded-xl'>
                                        <p className='text-white font-semibold text-left text-xs xl:text-lg 2xl:text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique lorem sem, et semper libero ornare lacinia. Nunc efficitur dolor id diam consequat congue. Aenean aliquet facilisis augue, vel lobortis lectus vestibulum sed. Integer sit amet mauris rhoncus, tincidunt augue quis, tristique nulla. Etiam mattis sollicitudin est, sed dictum tortor scelerisque at.</p>
                                    </div>
                                )}
                            </div>
                            <div className='bg-gray-800 p-4 xl:p-6 rounded-3xl'>
                                <div className='flex justify-between'>
                                    <div className='my-auto'>
                                        <h1 className='text-white font-semibold text-xl xl:text-3xl'>Grow with your beliefs</h1>
                                    </div>
                                    <button onClick={toggleDropdown3}>
                                        <div className='my-auto'>
                                            <img className='my-auto w-3/4 xl:w-full' src={drop} alt="" />
                                        </div>
                                    </button>
                                </div>
                                {isDropdownOpen3 && (
                                    <div className='mt-4 bg-gray-700 p-4 rounded-xl'>
                                        <p className='text-white font-semibold text-left text-xs xl:text-lg 2xl:text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique lorem sem, et semper libero ornare lacinia. Nunc efficitur dolor id diam consequat congue. Aenean aliquet facilisis augue, vel lobortis lectus vestibulum sed. Integer sit amet mauris rhoncus, tincidunt augue quis, tristique nulla. Etiam mattis sollicitudin est, sed dictum tortor scelerisque at.</p>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
