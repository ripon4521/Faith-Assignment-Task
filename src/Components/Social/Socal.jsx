import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";


const Socal = () => {
    return (
        <div className="container mx-auto flex flex-wrap lg:flex-row justify-center gap-5 mt-10  lg:gap-20">
            <p   className=" flex items-center gap-2 text-2xl font-roboto text-blue-600"><FaFacebook></FaFacebook>Facebook</p>
            <p  className="flex items-center gap-2 text-2xl font-roboto text-blue-600"><FaTwitter></FaTwitter>Twiter</p>
            <p  className="flex items-center gap-2 text-2xl font-roboto text-red-600"><FaYoutube></FaYoutube>Youtube</p>
            <p  className="flex items-center gap-2 text-2xl font-roboto text-yellow-600"><FaInstagram></FaInstagram>Instagram</p>
        </div> 
    );
};

export default Socal;