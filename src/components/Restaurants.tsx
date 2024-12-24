import RestaurantItem from "./components/RestaurantItem.tsx";

export type RestaurantProps = {
   title?: string;
   image?: string;
};

const list: RestaurantProps[] = [
   {title: 'McDonald’s London', image: '/assets/images/rest_01.png'},
   {title: 'Papa Johns', image: '/assets/images/rest_02.png'},
   {title: 'KFC West London', image: '/assets/images/rest_03.png'},
   {title: 'Texas Chicken', image: '/assets/images/rest_04.png'},
   {title: 'Burger King', image: '/assets/images/rest_05.png'},
   {title: 'Shaurma 1', image: '/assets/images/rest_06.png'},
];

const Restaurants = () => {
   return (
      <div id={`categories`}>
         <div className={`inner`}>
            <h2 className={`font-bold text-lg sm:text-3xl mb-10`}>Popular Restaurants</h2>
            <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5`}>
               {list.map((item, i) => {
                  return <RestaurantItem key={i} item={item}/>;
               })}
            </div>
         </div>
      </div>
   );
};

export default Restaurants;