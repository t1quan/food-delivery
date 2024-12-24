import CollabItem from "./components/CollabItem.tsx";

const Collabs = () => {
   return (
      <div id={`collabs`}>
         <div className={`inner grid lg:grid-cols-2 gap-y-7 gap-x-5`}>
            <CollabItem
               title={`Partner with us`}
               subtitle={`Signup as a business`}
               link={`#`}
               tag={`Earn more with lower fees`}
               image={`/assets/images/partner_01.png`}
            />
            <CollabItem
               title={`Ride with us`}
               subtitle={`Signup as a rider`}
               link={`#`}
               tag={`Avail exclusive perks`}
               image={`/assets/images/partner_02.png`}
            />
         </div>
      </div>
   );
};

export default Collabs;