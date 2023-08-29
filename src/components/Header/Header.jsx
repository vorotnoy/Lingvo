import React, { useState } from "react";
import { Navigation } from "../Navigation/Navigation";
import s from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import logo from '../../assets/images/logo.png'
import { Registration } from "../Registration/Registration";
import { ModalRegister } from "../ModalRegister/ModalRegister";

export const Header = () => {
  const [showModalWindow, setShowModalWindow] = useState(false);
  const [register, setRegister] = useState(false)
  const handleModalWindowOpen = () => setShowModalWindow(true);
  const handleModalWindowClose = () => setShowModalWindow(false);
  return (
    <>
      <header className={s.container}>
        <nav className={s.nav}>
          <NavLink to="/" className={s.logo}>
          <img src={logo} alt="Lingvo" className={s.logo_image} />
          <p className={s.logo_title}>LearnLingo</p>
          </NavLink>
          <Navigation/>
          <Registration openModal={handleModalWindowOpen} setform={setRegister}/>
        </nav>
      </header>
      {showModalWindow && <ModalRegister onClose={handleModalWindowClose} typeForm ={register}/>}
    </>
  );
};
