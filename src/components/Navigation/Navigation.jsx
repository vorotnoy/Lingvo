import s from "./Navigation.module.scss";
import { NavLink } from "react-router-dom";
export const Navigation = ({ onclick }) => {
  return (
    <div className={s.wrapper}>
      <ul className={s.link_list}>
        <li className={s.link_item}>
          <NavLink to="/" className={s.link} onClick={onclick}>
            Home
          </NavLink>
        </li>
        <li className={s.link_item}>
          <NavLink to="/teachers" className={s.link} onClick={onclick}>
            Teachers
          </NavLink>
        </li>
        <li className={s.link_item}>
          <NavLink to="/favorite" className={s.link} onClick={onclick}>
            Favorite
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
