import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

function Ready() {
    return (
        <div className='grid grid-cols-1 bg-black rounded-b-3xl'>
            <div className="my-20 mx-5 xl:mx-24 2xl:mx-28">
                <div className="bg-yellow-400 p-8 xl:p-20 rounded-full">
                    <div className="grid grid-cols-1 xl:grid-cols-2 space-y-4">
                        <div className="my-auto text-center">
                            <h1 className="text-white text-base xl:text-3xl font-bold">Ready starting a new journey with your business?</h1>
                        </div>
                        <div className="space-y-4 xl:space-y-6 my-auto h-">
                            <div className="text-center">
                                <h1 className="text-white text-base xl:text-3xl font-bold">Talk to us about your ideas</h1>
                            </div>
                            <div className="w-fit mx-auto">
                                <Link to="/contact">
                                    <div className="p-2 my-auto hover:scale-110 hover:bg-gradient-to-l flex justify-between from-blue-400 to-blue-600 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl w-fit duration-200 delay-150">
                                        <h1 className='text-white font-semibold text-left xl:px-5 px-2 text-sm xl:text-xl 2xl:text-2xl'>Click Here</h1>
                                        <IoIosArrowForward className='text-white w-5 h-5 xl:w-7 xl:h-7' />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ready
