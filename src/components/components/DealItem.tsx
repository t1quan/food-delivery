import {DealProps} from "../Deals.tsx";
import {Link} from "react-router-dom";

const DealItem = ({item}: { item: DealProps }) => {
   return (
      <article>
         <div className={`relative`}>
            <Link to={`#`}>
               <img src={item.image} alt={item.title}/>
            </Link>
            <span className={`absolute top-0 right-[10%]`}>{item.discount}</span>
            <div>
               <p>Restaurant</p>
               <Link to={`#`}>{item.title}</Link>
            </div>
         </div>
      </article>
   );
};

export default DealItem;