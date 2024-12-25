import {Link} from "react-router-dom";

type DealProps = {
   title?: string;
   discount?: number;
   image?: string;
}

const DealItem = ({prop}: { prop: DealProps }) => {
   return (
      <article>
         <div className={`relative`}>
            <Link to={`#`} className={`relative block rounded-xl overflow-hidden`}>
               <img src={prop.image} alt={prop.title} className={`aspect-[1.526]`}/>
               <div className={`absolute bg-black-gradient size-full inset-0`}></div>
            </Link>
            <span className={`absolute top-0 right-[5%] text-white bg-black rounded-b-xl py-3 px-4 font-bold text-lg`}>-{prop.discount}%</span>
            <div className={`md:absolute left-[7%] bottom-[8%] md:text-white`}>
               <p className={`text-orange text-lg font-medium`}>Restaurant</p>
               <Link to={`#`} className={`font-bold text-2xl`}>{prop.title}</Link>
            </div>
         </div>
      </article>
   );
};

export default DealItem;