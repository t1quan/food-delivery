import {Link} from "react-router-dom";

type CollabItemProps = {
   title?: string;
   subtitle?: string;
   link?: string;
   tag?: string;
   image?: string;
}

const CollabItem = ({title, subtitle, link, tag, image}: CollabItemProps) => {
   return (
      <article>
         <div className={`overflow-hidden rounded-lg sm:rounded-xl relative`}>
            <img src={`${image}`} alt={title} className={`aspect-[1.5] sm:aspect-[1.75] object-cover`}/>
            <div className={`absolute w-full h-full inset-0 bg-black-gradient`}>
            </div>
            <div
               className={`absolute top-0 left-[7%] font-bold text-sm sm:text-base bg-white rounded-b-lg sm:rounded-b-xl px-4 sm:px-6 py-2 sm:py-3.5`}>
               {tag}
            </div>
            <div className={`absolute left-[7%] bottom-[7%] text-white`}>
               <p className={`font-medium text-orange text-sm sm:text-lg mb-1.5`}>{subtitle}</p>
               <h3 className={`text-2xl sm:text-[2.75rem] mb-4 sm:mb-6 leading-tight`}>{title}</h3>
               <Link to={`${link}`} className={`font-medium block rounded-full px-5 sm:px-12 py-2 sm:py-3.5 bg-orange w-fit text-sm sm:text-base`}>
                  Get Started
               </Link>
            </div>
         </div>
      </article>
   );
};

export default CollabItem;