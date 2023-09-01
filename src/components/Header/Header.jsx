import React, { useEffect, useState } from "react";
import { Navigation } from "../Navigation/Navigation";
import s from "./Header.module.scss";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { ModalRegister } from "../ModalRegister/ModalRegister";
import { useDispatch, useSelector } from "react-redux";
import { AuthBlock } from "../AuthBlock/AuthBlock";
import { selectEmail } from "../../redux/auth/authSelectors";
import {
  getFavorite,
} from "../../redux/Teachers/teacherOperation";

export const Header = () => {
  const dispatch = useDispatch();
  const [showModalWindow, setShowModalWindow] = useState(false);
  const [register, setRegister] = useState(false);
  const handleModalWindowOpen = () => setShowModalWindow(true);
  const handleModalWindowClose = () => setShowModalWindow(false);
  const isAuth = useSelector(selectEmail);

  useEffect(() => {
    if (isAuth) {
      dispatch(getFavorite());
    }
  }, [isAuth]);

  return (
    <>
      <header className={s.container}>
        <nav className={s.nav}>
          <NavLink to="/" className={s.logo}>
            <img src={logo} alt="Lingvo" className={s.logo_image} />
            <p className={s.logo_title}>LearnLingo</p>
          </NavLink>
          <Navigation />
          <AuthBlock
            isAuth={isAuth}
            handleModalWindowOpen={handleModalWindowOpen}
            setRegister={setRegister}
          />
        </nav>
      </header>

      {showModalWindow && (
        <ModalRegister
          onClose={handleModalWindowClose}
          typeForm={register}
        />
      )}
      <Outlet />
    </>
  );
};
