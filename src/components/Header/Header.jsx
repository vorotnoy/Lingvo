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
import { useMediaQuery } from "react-responsive";
import svg from "../../assets/icons/sprite.svg";
import { Sidebar } from "../Sidebar/Sidebar";
export const Header = ({ user }) => {
  const dispatch = useDispatch();

  const [showModalSignup, setShowModalSignup] = useState(false);
  const SignUpWindowOpen = () => (
    setShowModalSignup(true), SidebarWindowClose()
  );
  const SignUpWindowClose = () => setShowModalSignup(false);

  const [showModalSignin, setShowModalSignin] = useState(false);
  const SignInWindowOpen = () => {
    setShowModalSignin(true), SidebarWindowClose();
  };
  const SignInWindowClose = () => setShowModalSignin(false);

  const [showModalSidebar, setShowModalSidebar] = useState(false);
  const SidebarWindowOpen = () => setShowModalSidebar(true);
  const SidebarWindowClose = () => setShowModalSidebar(false);

  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  useEffect(() => {
    if (showModalSignup || showModalSignin) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showModalSignup, showModalSignin]);

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
  return (
    <>
      <header className={s.wrapper}>
        <nav className={s.nav}>
          <NavLink to="/" className={s.logo}>
            <img src={logo} alt="Lingvo" className={s.logo_image} />
            <p className={s.logo_title}>LearnLingo</p>
          </NavLink>
          {!isMobile && (
            <>
              <Navigation />
              {!user && (
                <Registration
                  signup={SignUpWindowOpen}
                  signin={SignInWindowOpen}
                />
              )}
              {user && <Logout logout={logout} />}
            </>
          )}
          {isMobile && (
            <svg width="20" height="20" onClick={SidebarWindowOpen}>
              <use href={svg + "#icon-burger"}></use>
            </svg>
          )}
        </nav>
      </header>
      {showModalSignup && (
        <ModalSignup
          onClose={SignUpWindowClose}
          toggleModal={showModalSignup}
        />
      )}
      {showModalSignin && <ModalSignin onClose={SignInWindowClose} />}
      {showModalSidebar && (
        <Sidebar
          onClose={SidebarWindowClose}
          signup={SignUpWindowOpen}
          signin={SignInWindowOpen}
        />
      )}
    </>
  );
};
