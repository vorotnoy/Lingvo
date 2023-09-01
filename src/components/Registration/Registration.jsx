import s from "./Registration.module.scss";
import svg from "../../assets/icons/sprite.svg";
import { useState } from "react";

export const Registration = ({ openModal, setform}) => {

  const  register= ()=> {
    openModal();
    setform(true)
  }
  const  login= ()=> {
    openModal();
    setform(false)
  }
  return (
    <div className={s.wrapper}>
      <button type="button" className={s.btn_login} onClick={login}>
        <svg width="20" height="20" className={s.svg}>
          <use href={svg + "#icon-login"}></use>
        </svg>
        <p className={s.login}>Log in</p>
      </button>
      <button type="button" className={s.btn_reg} onClick={register}>
        Registration
      </button>
    </div>
  );
};
