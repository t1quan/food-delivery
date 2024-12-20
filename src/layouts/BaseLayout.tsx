import {ReactNode} from "react";
import Header from "../components/Header.tsx";

const BaseLayout = ({children}: { children: ReactNode }) => {
   return (
      <div id={`base-layout`} className="grid">
         <Header/>
         <main className={``}>
            <div className={`inner grid gap-y-40`}>{children}</div>
         </main>
      </div>
   );
};

export default BaseLayout;
