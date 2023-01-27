import { Routes, Route } from "react-router-dom";
// import { About } from "pages/About";
import { Navigate } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { Menu } from "pages/Menu";


export const App = () => {
  
  return (
    <>
      <Routes>
        <Route path="/menu" element={<Layout />} >
          <Route index element={<Menu/>}/>
          {/* <Route path="about" element={<About />} /> */}
        </Route>
        <Route path="*" element={<Navigate to={"/menu"} />} />
      </Routes>
    </>
  );
};
