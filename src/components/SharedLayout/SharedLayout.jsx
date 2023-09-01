import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
export const SharedLayout = () => {
  console.log('shared')


  return (
    <>
      <Header  />
      {/* <Outlet/> */}
    </>
  );
};