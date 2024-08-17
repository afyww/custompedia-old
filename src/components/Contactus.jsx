import { IoIosArrowForward } from "react-icons/io";


function Contactus() {
    return (
        <div className='grid grid-cols-1 bg-black rounded-b-3xl'>
            <div className="my-24 xl:my-44 2xl:my-48 mx-5 xl:mx-48 2xl:mx-52">
                <div className="space-y-8 xl:space-y-24 2xl:space-y-36">
                    <form className="space-y-2 xl:space-y-20 2xl:space-y-16">
                        <div className="grid grid-cols-1 xl:grid-cols-3 space-y-5 xl:space-y-0">
                            <div className="mx-10">
                                <div className="">
                                    <label className="text-sm xl:text-lg 2xl:text-xl text-extralight text-white text-left">Name *</label>
                                </div>
                                <div className="">
                                    <input
                                        type="text"
                                        name="name"
                                        value=''
                                        onChange=''
                                        className="w-full py-2 rounded-none bg-transparent border-b-2 border-white outline-none"
                                    />
                                </div>
                            </div>
                            <div className="mx-10">
                                <div className="">
                                    <label className="text-sm xl:text-lg 2xl:text-xl text-extralight text-white text-left">Email *</label>
                                </div>
                                <div className="">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="e.g., example@mail.com"
                                        value=''
                                        onChange=''
                                        className="w-full py-2 rounded-none bg-transparent border-b-2 border-white outline-none"
                                    />
                                </div>
                            </div>
                            <div className="mx-10">
                                <div className="">
                                    <label className="text-sm xl:text-lg 2xl:text-xl text-extralight text-white text-left">Phone *</label>
                                </div>
                                <div className="">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="e.g., 555-555-5…"
                                        value=''
                                        onChange=''
                                        className="w-full py-2 rounded-none bg-transparent border-b-2 border-white outline-none"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 xl:grid-cols-3 space-y-5 xl:space-y-0">
                            <div className="mx-10">
                                <div className="">
                                    <label className="text-sm xl:text-lg 2xl:text-xl text-extralight text-white text-left">Company Name *</label>
                                </div>
                                <div className="">
                                    <input
                                        type="text"
                                        name="name"
                                        value=''
                                        onChange=''
                                        className="w-full py-2 rounded-none bg-transparent border-b-2 border-white outline-none"
                                    />
                                </div>
                            </div>
                            <div className="mx-10">
                                <div className="">
                                    <label className="text-sm xl:text-lg 2xl:text-xl text-extralight text-white text-left">Company Website *</label>
                                </div>
                                <div className="">
                                    <input
                                        type="text"
                                        name="name"
                                        value=''
                                        onChange=''
                                        className="w-full py-2 rounded-none bg-transparent border-b-2 border-white outline-none"
                                    />
                                </div>
                            </div>
                            <div className="mx-10">
                                <div className="">
                                    <label className="text-sm xl:text-lg 2xl:text-xl text-extralight text-white text-left">Company Social Media</label>
                                </div>
                                <div className="">
                                    <input
                                        type="text"
                                        name="name"
                                        value=''
                                        onChange=''
                                        className="w-full py-2 rounded-none bg-transparent border-b-2 border-white outline-none"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 xl:grid-cols-3">
                            <div className="mx-10">
                                <div className="">
                                    <label className="text-sm xl:text-lg 2xl:text-xl text-bold text-white text-left">What service(s) are you
                                        interested in? *</label>
                                </div>
                            </div>
                            <div className="mx-10 col-span-2">
                                <div className="">
                                    <label className="text-sm xl:text-lg 2xl:text-xl text-bold text-white text-left">How can we help you?</label>
                                </div>
                                <div className="">
                                    <textarea
                                        type="text"
                                        name="name"
                                        value=''
                                        onChange=''
                                        rows="12"
                                        className="w-full text-white border-2 py-2 bg-transparent border-white outline-none"
                                    >

                                    </textarea>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 mx-auto my-auto hover:scale-110 hover:bg-gradient-to-l bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl w-1/2 duration-200 delay-150">
                            <button className="flex justify-between items-center w-full">
                                <h1 className='text-white font-semibold px-4 text-left text-sm xl:text-xl 2xl:text-2xl'>Submit</h1>
                                <IoIosArrowForward className='text-white w-5 xl:w-7 h-5 xl:h-7' />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contactus
