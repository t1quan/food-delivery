import CategoryItem from "./components/CategoryItem.tsx";

export type CategoryProp = {
   title?: string,
   image?: string,
   count?: number,
}

const list: CategoryProp[] = [
   {
      title: "Burgers & Fast food",
      image: "/assets/images/cate_01.png",
      count: 21,
   },
   {
      title: "Salads",
      image: "/assets/images/cate_02.png",
      count: 32,
   },
   {
      title: "Pasta & Casuals",
      image: "/assets/images/cate_03.png",
      count: 4,
   },
   {
      title: "Pizza",
      image: "/assets/images/cate_04.png",
      count: 32,
   },
   {
      title: "Breakfast",
      image: "/assets/images/cate_05.png",
      count: 21,
   },
   {
      title: "Soups",
      image: "/assets/images/cate_06.png",
      count: 4,
   },
]

const Categories = () => {
   return (
      <div id={`categories`}>
         <div className={`inner`}>
            <h2 className={`font-bold text-lg md:text-3xl mb-6 md:mb-10`}>Order.uk Popular Categories</h2>
            <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5`}>
               {list.map((item, i) => {
                  return (
                     <CategoryItem key={i} item={item}/>
                  );
               })}
            </div>
         </div>
      </div>
   );
};

export default Categories;