import s from "./SIdebar.module.scss";
import { BackdropModal } from "../Backdrop/Backdrop";
import svg from "../../assets/icons/sprite.svg";
import { useCallback, useEffect } from "react";
import { Registration } from "../Registration/Registration";
import { Navigation } from "../Navigation/Navigation";

export const Sidebar = ({ onClose, signup, signin }) => {
  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <BackdropModal closeModal={onClose}>
      <section className={s.wrapper}>
        <div className={s.nav_block}>
          <svg
            width="32"
            height="32"
            className={s.svg_close}
            onClick={handleClose}
          >
            <use href={svg + "#icon-close"}></use>
          </svg>
          <Navigation onclick={handleClose} />
          <Registration signup={signup} signin={signin} />
        </div>
      </section>
    </BackdropModal>
  );
};
