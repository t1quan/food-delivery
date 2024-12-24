import {CategoryProp} from "../Categories.tsx";
import {Link} from "react-router-dom";

const CategoryItem = ({item}: { item: CategoryProp }) => {
   return (
      <article>
         <div className={`rounded-xl overflow-hidden bg-[#f5f5f5] border border-black/10`}>
            <Link to={`#`}>
               <img src={item.image} alt={item.title} className={`aspect-[1.2] object-cover w-full`}/>
            </Link>
            <div className={`py-2 px-3 sm:px-5`}>
               <Link to={`#`} className={`sm:text-lg capitalize font-bold line-clamp-1`}>{item.title}</Link>
               <p className={`text-xs sm:text-sm text-orange`}>{item.count} Restaurants</p>
            </div>
         </div>
      </article>
   );
};

export default CategoryItem;