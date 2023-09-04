import React, { useEffect, useState } from "react";
import { Navigation } from "../Navigation/Navigation";
import s from "./Header.module.scss";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { ModalSignup } from "../ModalSignup/ModalSignup";
import { useDispatch, useSelector } from "react-redux";
import { getFavorite } from "../../redux/Teachers/teacherOperation";
import { logOutUser } from "../../redux/auth/authOperation";
import { resetAll } from "../../redux/Teachers/teacherOperation";
import { Registration } from "../Registration/Registration";
import { Logout } from "../Logout/Logout";
import { ModalSignin } from "../ModalSIgnIn/ModalSignin";

export const Header = ({ user }) => {
  const dispatch = useDispatch();
  const [showModalSignup, setShowModalSignup] = useState(false);
  const SignUpWindowOpen = () => setShowModalSignup(true);
  const SignUpWindowClose = () => setShowModalSignup(false);
  const [showModalSignin, setShowModalSignin] = useState(false);
  const SignInWindowOpen = () => setShowModalSignin(true);
  const SignInWindowClose = () => setShowModalSignin(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (showModalSignup||showModalSignin) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showModalSignup, showModalSignin])

  useEffect(() => {
    if (user) {
      dispatch(getFavorite());
    }
  }, [user]);

  const logout = async () => {
    await dispatch(resetAll());
    await dispatch(logOutUser());
    navigate("/");
  };
  console.log("header", user);
  return (
    <>
      <header className={s.container}>
        <nav className={s.nav}>
          <NavLink to="/" className={s.logo}>
            <img src={logo} alt="Lingvo" className={s.logo_image} />
            <p className={s.logo_title}>LearnLingo</p>
          </NavLink>
          <Navigation />
          {!user && <Registration signup={SignUpWindowOpen} 
            signin={SignInWindowOpen}
          />}
          {user && <Logout logout={logout} />}
        </nav>
      </header>
      {showModalSignup && <ModalSignup onClose={SignUpWindowClose} toggleModal={showModalSignup}/>}
      {showModalSignin && <ModalSignin onClose={SignInWindowClose} />}
    </>
  );
};
