import { Routes, Route } from "react-router-dom";
import { About } from "./About/About";
import { Navigate } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { Menu } from "pages/Menu";


export const App = () => {
  
  return (
    <>
      <Routes>
        <Route path="/menu" element={<Layout />} >
          <Route index element={<Menu/>}/> 
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to={"/menu"} />} />
      </Routes>
    </>
  );
};
