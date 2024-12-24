import DealItem from "./components/DealItem.tsx";

export type DealProps = {
   title?: string;
   discount?: number;
   image?: string;
}

const list: DealProps[] = [
   {title: 'Chef Burgers London', discount: 40, image: '/assets/images/deal_01.png'},
   {title: 'Grand Ai Cafe London', discount: 20, image: '/assets/images/deal_02.png'},
   {title: 'Butterbrot Cafe London', discount: 17, image: '/assets/images/deal_01.png'},
]

const Deals = () => {
   return (
      <div id={`categories`}>
         <div className={`inner`}>
            <h2 className={`font-bold text-lg sm:text-3xl mb-10`}>Up to -40% Order.uk exclusive deals</h2>
            <div className={`grid gap-5 lg:grid-cols-2 xl:grid-cols-3`}>
               {list.map((item, i) => {
                  return (
                     <DealItem key={i} item={item}/>
                  )
               })}
            </div>
         </div>
      </div>
   );
};

export default Deals;