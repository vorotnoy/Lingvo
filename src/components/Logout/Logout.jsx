import s from "./Logout.module.scss";
import svg from "../../assets/icons/sprite.svg";
import { auth } from "../../firebase/config";
import {selectEmail} from '../../redux/auth/authSelectors'
import { useSelector } from "react-redux";
export const Logout = ({logout}) => {
  const currentUser = auth.currentUser;
const user = useSelector(selectEmail)
  return (
    <>
      <div className={s.wrapper}>
      <p className={s.user}>{user}</p>
        <button type="button" className={s.btn_logout} onClick={logout}>
          <p className={s.logout}>Log out</p>
          <svg width="20" height="20" className={s.svg}>
            <use href={svg + "#icon-login"}></use>
          </svg>
        </button>
      </div>
    </>
  );
};
