import {Link} from "react-router-dom";

const Footer = () => {
   return (
      <footer className={`bg-gray/60`}>
         <div className={`inner grid lg:grid-cols-12 gap-y-16 gap-x-10 py-10 items-start xl:pt-16 xl:pb-12`}>
            <div className={`grid lg:col-span-full xl:col-span-4`}>
               <Link to={`/`}>
                  <img src={`/assets/images/logo_02.png`} alt="logo" className={`max-w-60 mx-auto xl:mx-0`}/>
               </Link>
               <div className={`flex gap-x-1 mt-8 mb-5 justify-center xl:justify-start`}>
                  <img src={`/assets/images/appStore.png`} alt="appStore" className={`max-w-44`}/>
                  <img src={`/assets/images/googlePlay.png`} alt="googlePlay" className={`max-w-44`}/>
               </div>
               <p className={`text-center xl:text-left text-sm`}>Company # 490039-445, Registered with <br className={`hidden xl:inline`}/>House of companies.
               </p>
            </div>

            <div className={`text-center lg:text-left grid w-full gap-y-3 lg:col-span-6 xl:col-span-4`}>
               <h3 className={`text-[1.125rem] mb-2 lg:pl-6`}>Get Exclusive Deals in your Inbox</h3>
               <form className={`flex bg-gray rounded-full overflow-hidden h-14 w-full`}>
                  <input placeholder={`youremail@gmail.com`} className={`text-black/60 w-full bg-transparent pl-6 pr-2.5 text-sm outline-none`}/>
                  <button type="submit" className={`rounded-full bg-orange text-white font-medium px-8`}>Subscribe</button>
               </form>
               <p className={`text-sm lg:pl-6`}>We wont spam, read our <a href={`#`} className={`underline`}>email policy</a></p>
            </div>

            <div className={`grid sm:grid-cols-2 gap-8 lg:col-span-6 xl:col-span-4`}>
               <div className={`grid gap-y-4 text-sm`}>
                  <h3 className={`text-[1.125rem]`}>Legal Pages</h3>
                  <a href="#" className={`underline`}>Terms and conditions</a>
                  <a href="#" className={`underline`}>Privacy</a>
                  <a href="#" className={`underline`}>Cookies</a>
                  <a href="#" className={`underline`}>Modern Slavery Statement</a>
               </div>

               <div className={`grid gap-y-4 text-sm`}>
                  <h3 className={`text-[1.125rem]`}>Important Links</h3>
                  <a href="#" className={`underline`}>Get help</a>
                  <a href="#" className={`underline`}>Add your restaurant</a>
                  <a href="#" className={`underline`}>Sign up to deliver</a>
                  <a href="#" className={`underline`}>Create a business account</a>
               </div>
            </div>
         </div>
         <div className={`bg-black text-white text-sm text-center`}>
            <div className={`inner py-6`}>
               <p>Order.uk Copyright 2024, All Rights Reserved.</p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;