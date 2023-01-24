import { Routes, Route } from "react-router-dom";
import { Menu } from "pages/Menu";
import { Navigate } from "react-router-dom";


export const App = () => {
  
  return (
    <>
      <Routes>
        <Route path="/menu" element={<Menu/>} />
        {/* <Route path="/menu/:menuGroup" element={<MenuGroup/>} />       */}
        {/* <Route path="/about" element={<About/>} /> */}
        <Route path="*" element={<Navigate to={'/menu'} />} />
      </Routes>
    </>
  );
};
