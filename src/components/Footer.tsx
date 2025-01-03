import {Link} from "react-router-dom";
import ReIcon from "./ReIcon.tsx";

const Footer = () => {
   return (
      <footer className={`bg-gray/60 mt-12 md:mt-16`}>
         <div className={`inner grid lg:grid-cols-12 gap-y-16 gap-x-10 py-10 items-start xl:pt-16 xl:pb-12`}>
            <div className={`grid lg:col-span-full xl:col-span-4`}>
               <Link to={`/`}>
                  <img src={`/assets/images/logo_02.png`} alt="logo" className={`max-w-60 mx-auto xl:mx-0`}/>
               </Link>
               <div className={`flex gap-x-1 mt-8 mb-5 justify-center xl:justify-start`}>
                  <a href={`#`} className={`max-w-44`}><img src={`/assets/images/appStore.png`} alt="appStore"/></a>
                  <a href={`#`} className={`max-w-44`}><img src={`/assets/images/googlePlay.png`} alt="googlePlay"/></a>
               </div>
               <p className={`text-center xl:text-left text-sm`}>Company # 490039-445, Registered with <br className={`hidden xl:inline`}/>
                  House of companies.
               </p>
            </div>

            <div className={`text-center lg:text-left grid w-full gap-y-3 lg:col-span-6 xl:col-span-4`}>
               <h3 className={`text-lg mb-2`}>Get Exclusive Deals in your Inbox</h3>
               <form className={`flex bg-gray rounded-full overflow-hidden h-14 w-full`}>
                  <input placeholder={`youremail@gmail.com`} className={`text-black/60 w-full bg-transparent pl-6 pr-2.5 text-sm outline-none`}/>
                  <button type="submit" className={`rounded-full bg-orange text-white font-medium px-8`}>Subscribe</button>
               </form>
               <p className={`text-sm`}>We wont spam, read our <a href={`#`} className={`underline`}>email policy</a></p>
               <div className={`flex gap-x-3.5 mt-4 justify-center lg:justify-start`}>
                  <a href={`#`}>
                     <ReIcon name={`RiFacebookCircleFill`} size={40}/>
                  </a>
                  <a href={`#`}>
                     <ReIcon name={`RiInstagramFill`} size={40}/>
                  </a>
                  <a href={`#`}>
                     <ReIcon name={`RiLinkedinBoxFill`} size={40}/>
                  </a>
                  <a href={`#`}>
                     <ReIcon name={`RiGithubFill`} size={40}/>
                  </a>
               </div>
            </div>

            <div className={`grid sm:grid-cols-2 gap-8 lg:col-span-6 xl:col-span-4`}>
               <div className={`grid gap-y-4 text-sm`}>
                  <h3 className={`text-lg`}>Legal Pages</h3>
                  <a href="#" className={`underline`}>Terms and conditions</a>
                  <a href="#" className={`underline`}>Privacy</a>
                  <a href="#" className={`underline`}>Cookies</a>
                  <a href="#" className={`underline`}>Modern Slavery Statement</a>
               </div>

               <div className={`grid gap-y-4 text-sm`}>
                  <h3 className={`text-lg`}>Important Links</h3>
                  <a href="#" className={`underline`}>Get help</a>
                  <a href="#" className={`underline`}>Add your restaurant</a>
                  <a href="#" className={`underline`}>Sign up to deliver</a>
                  <a href="#" className={`underline`}>Create a business account</a>
               </div>
            </div>
         </div>
         <div className={`bg-black text-white text-xs sm:text-sm text-center`}>
            <div className={`inner py-5`}>
               <p>Order.uk Copyright 2024, All Rights Reserved.</p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;