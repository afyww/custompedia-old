import map from '../../assets/images/map.png'

function Nineyears() {
    return (
        <div className='grid grid-cols-1 bg-black'>
            <div className="my-20 mx-5 xl:mx-24 2xl:mx-28">
                <div className='grid grid-cols-1 xl:grid-cols-2 space-y-10'>
                    <div className="space-y-10">
                        <div className="">
                            <div>
                                <h1 className="text-2xl text-left xl:text-6xl 2xl:text-8xl text-blue-400 font-extrabold">NINE YEARS</h1>
                                <h1 className="text-2xl text-left xl:text-6xl 2xl:text-8xl text-blue-400 font-extrabold">IN THE GAME</h1>
                            </div>
                            <div className="">
                                <p className="text-white font-semibold text-left text-xs xl:text-lg 2xl:text-xl">Through our years of experience, we develop branding and marketing strategic to best possible growth solutions for our clients.</p>
                            </div>
                        </div>
                        <div>
                            <img src={map} alt="" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 xl:grid-cols-2 my-auto gap-5 xl:gap-10 xl:mx-10">
                        <div className="space-y-2">
                            <div className='mx-auto xl:mx-0 p-4 w-fit border-2 border-yellow-400 rounded-xl'>
                                <h2 className="text-2xl xl:text-5xl font-bold text-white">9th</h2>
                            </div>
                            <div className='text-center xl:text-left'>
                                <h2 className="font-semibold text-xs xl:text-lg text-blue-400">Years of Experience</h2>
                            </div>
                            <div className='text-center xl:text-left'>
                                <p className='text-white font-semibold text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique lorem. </p>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className='mx-auto xl:mx-0 p-4 w-fit border-2 border-yellow-400 rounded-xl'>
                                <h2 className="text-2xl xl:text-5xl font-bold text-white">50+</h2>
                            </div>
                            <div className='text-center xl:text-left'>
                                <h2 className="font-semibold text-xs xl:text-lg text-blue-400">Skilled Professional</h2>
                            </div>
                            <div className='text-center xl:text-left'>
                                <p className='text-white font-semibold text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique lorem. </p>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className='mx-auto xl:mx-0 p-4 w-fit border-2 border-yellow-400 rounded-xl'>
                                <h2 className="text-2xl xl:text-5xl font-bold text-white">300+</h2>
                            </div>
                            <div className='text-center xl:text-left'>
                                <h2 className="font-semibold text-xs xl:text-lg text-blue-400">Satisfied Clients</h2>
                            </div>
                            <div className='text-center xl:text-left'>
                                <p className='text-white font-semibold text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique lorem. </p>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className='mx-auto xl:mx-0 p-4 w-fit border-2 border-yellow-400 rounded-xl'>
                                <h2 className="text-2xl xl:text-5xl font-bold text-white">2,5K</h2>
                            </div>
                            <div className='text-center xl:text-left'>
                                <h2 className="font-semibold text-xs xl:text-lg text-blue-400">Project Done</h2>
                            </div>
                            <div className='text-center xl:text-left'>
                                <p className='text-white font-semibold text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique lorem. </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nineyears
