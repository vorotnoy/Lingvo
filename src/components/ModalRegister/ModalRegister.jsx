import s from "./ModalRegister.module.scss";
import { BackdropModal } from "../Backdrop/Backdrop";
import svg from "../../assets/icons/sprite.svg";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/auth/authOperation";
import { loginUser } from "../../redux/auth/authOperation";

export const ModalRegister = ({ onClose, typeForm,  onSubmit }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  const userOn = (data) => {
    if (typeForm) {
       dispatch(addUser(data));
    } else {
       dispatch(loginUser(data));
    }
  };


  const submit = (e) => {
    e.preventDefault();
    const user = {
      name,
      email,
      password,
    };
    userOn(user)
    onClose();
  };

  return (
    <BackdropModal closeModal={onClose}>
      <div className={s.wrapper}>
        <div className={s.modal_block}>
          <svg
            width="32"
            height="32"
            className={s.svg_close}
            onClick={handleClose}
          >
            <use href={svg + "#icon-close"}></use>
          </svg>
          <form onSubmit={submit}>
            {typeForm && (
              <>
                <h3 className={s.modal_title}>Registration</h3>
                <p className={s.modal_desc}>
                  Thank you for your interest in our platform! In order to
                  register, we need some information. Please provide us with the
                  following information
                </p>
              </>
            )}
            {!typeForm && (
              <>
                <h3 className={s.modal_title}>Log In</h3>
                <p className={s.modal_desc}>
                  Welcome back! Please enter your credentials to access your
                  account and continue your search for an teacher.
                </p>
              </>
            )}

            <div className={s.modal_regist}>
              {typeForm && (
                <label className={s.modal_regist__label}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className={s.modal_regist__input}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
              )}
              <label className={s.modal_regist__label}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={s.modal_regist__input}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label className={s.modal_regist__label}>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className={s.modal_regist__input}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </div>
            {typeForm && (
              <button type="submit" className={s.modal_btn}>
                Sign Up
              </button>
            )}
            {!typeForm && (
              <button type="submit" className={s.modal_btn}>
                Log In
              </button>
            )}
          </form>
        </div>
      </div>
    </BackdropModal>
  );
};
