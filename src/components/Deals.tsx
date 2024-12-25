import DealItem from "./components/DealItem.tsx";
import Slide from "./Slide.tsx";

type ListProps = {
   title?: string;
   discount?: number;
   image?: string;
}

const list: ListProps[] = [
   {title: 'Chef Burgers London', discount: 40, image: '/assets/images/deal_01.png'},
   {title: 'Grand Ai Cafe London', discount: 20, image: '/assets/images/deal_02.png'},
   {title: 'Butterbrot Cafe London', discount: 17, image: '/assets/images/deal_01.png'},
]

const Deals = () => {
   const listItems = list.map((item, index) => <DealItem key={index} prop={item}/>);
   return (
      <div id={`categories`}>
         <div className={`inner`}>
            <h2 className={`font-bold text-lg md:text-3xl mb-6 md:mb-10`}>Up to -40% Order.uk exclusive deals</h2>
            <Slide children={listItems} component={DealItem}/>
         </div>
      </div>
   );
};

export default Deals;