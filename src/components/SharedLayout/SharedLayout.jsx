import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";

export const SharedLayout = ({isAuth}) => {
  // console.log('shared')
  return (
    <>
      <Header user={isAuth} />
      <Outlet />
    </>
  );
};
