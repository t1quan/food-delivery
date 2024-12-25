import {ReactNode} from "react";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer";

const BaseLayout = ({children}: { children: ReactNode }) => {
   return (
      <div id={`base-layout`} className="flex flex-col min-h-screen">
         <Header/>
         <main className={`flex-1`}>
            <div className={`grid gap-y-12 md:gap-y-16`}>{children}</div>
         </main>
         <Footer/>
      </div>
   );
};

export default BaseLayout;
