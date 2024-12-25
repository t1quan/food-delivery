const Hero = () => {
   return (
      <div id={`hero`}>
         <div className={`inner`}>
            <div className={`border border-black/10 lg:border-black/20 rounded-xl bg-[#e2e2e2] lg:bg-[#fbfbfb]`}>
               <div className={`text-center lg:text-left p-6`}>
                  <p className={`text-xs`}>Order Restaurant food, takeaway and groceries.</p>
                  <h1 className={`font-semibold text-3xl my-2`}>Feast Your Senses, <br/><span className={`text-orange`}>Fast and Fresh</span></h1>
                  <form>
                     <span className={`text-xs`}>Enter a postcode to see what we deliver</span>
                     <div>
                        <input type={`text`} placeholder={`e.g. EC4R 3TE`}/>
                        <button type={`submit`}>Search</button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Hero;