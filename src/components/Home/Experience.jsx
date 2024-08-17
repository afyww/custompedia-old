import atas from '../../assets/images/assetpage2.png'
import bawah from '../../assets/images/assetpage2bawah.png'

function Experience() {
  return (
    <div className='grid grid-cols-1 bg-black'>
      <div className="my-20 mx-5 xl:my-44 2xl:my-48 xl:mx-56 2xl:mx-60">
        <div className="space-y-4">
          <div className="flex space-x-2">
            <div>
              <h1 className="text-blue-400 text-2xl xl:text-6xl font-semibold">NINE YEARS</h1>
            </div>
            <div>
              <img className='w-36 xl:w-fit h-full' src={atas} alt="" />
            </div>
          </div>
          <div className="flex space-x-2">
            <div>
              <img className='w-32 xl:w-fit h-full' src={bawah} alt="" />
            </div>
            <div>
              <h1 className="text-blue-400 text-2xl xl:text-6xl font-semibold">IN THE GAME</h1>
            </div>
          </div>
          <div className="text-center xl:text-left xl:w-1/2">
            <p className="text-white font-semibold text-left text-xs xl:text-lg 2xl:text-xl">Through our years of experience, we develop branding and marketing strategic to best possible growth solutions for our clients.</p>
          </div>
        </div>
        <div className="p-4 xl:p-12">
        <div className="grid grid-cols-4">
          <div className="text-center">
            <h2 className="text-2xl xl:text-5xl font-bold text-yellow-400">9th</h2>
            <h2 className="font-semibold text-xs xl:text-lg text-white">Years of Experience</h2>
          </div>
          <div className="text-center">
            <h2 className="text-2xl xl:text-5xl font-bold text-yellow-400">50+</h2>
            <h2 className="font-semibold text-xs xl:text-lg text-white">Skilled Professionals</h2>
          </div>
          <div className="text-center">
            <h2 className="text-2xl xl:text-5xl font-bold text-yellow-400">300+</h2>
            <h2 className="font-semibold text-xs xl:text-lg text-white">Satisfied Clients</h2>
          </div>
          <div className="text-center">
            <h2 className="text-2xl xl:text-5xl font-bold text-yellow-400">2,5K</h2>
            <h2 className="font-semibold text-xs xl:text-lg text-white">Project Done</h2>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Experience