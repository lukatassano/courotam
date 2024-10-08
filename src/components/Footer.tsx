import Image from "next/image";
import email from "../assets/images/email.svg";
import whats from "../assets/icons/whatsapp.svg";

export const Footer = () => {
  return(
    <footer className='py-5 bg-black text-white/60 border-t border-white/20'>
    <div className="container">
      <div className='flex flex-col gap-5 sm:flex-col sm:justify-between'>
        <ul className='flex justify-center gap-2.5'>
        {/*<Image src={email} alt="Email icon" width={24} height={24} />*/}
          <li>courotam@email.com</li>
        </ul>
      </div>

    </div>
    </footer>
  )
};
