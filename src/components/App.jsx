import { Routes, Route } from "react-router-dom";
import { About } from "pages/About";
import { Navigate } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { Menu } from "pages/Menu";

export const App = () => {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Navigate to={"/menyu-kuhni/zakuski"} />} /> 
          <Route path=":rootCategory" element={<Menu />} >
            <Route path=":category" element={<Menu />} />
          </Route>
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="*" element={<Navigate to={"/menyu-kuhni/zakuski"} />} />
      </Routes>
    </>
  );
};

// /menyu-kuhni