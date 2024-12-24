import Collabs from "../components/Collabs.tsx";
import Categories from "../components/Categories.tsx";
import Deals from "../components/Deals.tsx";
import Restaurants from "../components/Restaurants.tsx";

const HomePage = () => {
   return (
      <>
         <Deals/>
         <Categories/>
         <Restaurants/>
         <Collabs/>
      </>
   );
};

export default HomePage;
