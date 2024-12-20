import {BrowserRouter, Routes, Route} from "react-router-dom";
import {routes} from "./routes.ts";
import BaseLayout from "./layouts/BaseLayout.tsx";

function App() {
   return (
      <BrowserRouter>
         <BaseLayout>
            <Routes>
               {routes.map((route, i) => {
                  const Page = route.component;
                  return <Route key={i} path={route.path} element={<Page/>}/>
               })}
            </Routes>
         </BaseLayout>
      </BrowserRouter>
   );
}

export default App;
