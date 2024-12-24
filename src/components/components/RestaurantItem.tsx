import {RestaurantProps} from "../Restaurants.tsx";
import {Link} from "react-router-dom";

const RestaurantItem = ({item}: { item: RestaurantProps }) => {
   return (
      <article>
         <div className={`overflow-hidden rounded-xl bg-orange text-white border border-black/10`}>
            <Link to={`#`}>
               <img src={item.image} alt={item.title} className={`aspect-[1.2] object-cover w-full`}/>
            </Link>
            <div className={`py-3 px-3 sm:px-5`}>
               <Link to={`#`} className={`font-bold sm:text-lg capitalize line-clamp-1`}>{item.title}</Link>
            </div>
         </div>
      </article>
   );
};

export default RestaurantItem;