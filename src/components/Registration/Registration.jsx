import s from "./Registration.module.scss";
import svg from "../../assets/icons/sprite.svg";

export const Registration = () => {
  return (
    <div className={s.wrapper}>
      <button type="button" className={s.btn_login}>
        <svg width="20" height="20" className={s.svg}>
          <use href={svg + "#icon-login"}></use>
        </svg>
        <p className={s.login}>Log in</p>
      </button>
      <button type="button" className={s.btn_reg}>Registration</button>
    </div>
  );
};
