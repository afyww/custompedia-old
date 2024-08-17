import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";

function Whatsapp() {
  return (
    <div className="z-50 fixed bottom-12 right-10 opacity-85 shadow-emerald-200 hover:opacity-100">
    <Link to="" className="">
        <IoLogoWhatsapp className="text-emerald-600 w-12 h-16 xl:w-20 xl:h-20" />
    </Link>
</div>
)
}

export default Whatsapp
