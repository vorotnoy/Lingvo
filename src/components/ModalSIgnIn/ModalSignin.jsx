import s from "./ModalSignin.module.scss";
import { BackdropModal } from "../Backdrop/Backdrop";
import svg from "../../assets/icons/sprite.svg";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/auth/authOperation";
import { loginUser } from "../../redux/auth/authOperation";
import * as Yup from "yup";
import { useFormik } from "formik";

const SigninSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(7, "Too short, must contain 7 characters or more")
    .required("Required"),
});

export const ModalSignin = ({ onClose }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      dispatch(loginUser(values));
      onClose();
    },
    validationSchema: SigninSchema,
  });

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

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
          <form onSubmit={formik.handleSubmit}>
            <h3 className={s.modal_title}>Log In</h3>
            <p className={s.modal_desc}>
              Welcome back! Please enter your credentials to access your account
              and continue your search for an teacher.
            </p>
            <div className={s.modal_regist}>
              <label className={s.modal_regist__label}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={s.modal_regist__input}
                  // onChange={(e) => setEmail(e.target.value)}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.errors.email && formik.touched.email && (
                  <span className={s.error}>{formik.errors.email}</span>
                )}
              </label>
              <label className={s.modal_regist__label}>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className={s.modal_regist__input}
                  // onChange={(e) => setPassword(e.target.value)}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.errors.password && formik.touched.password && (
                  <span className={s.error}>{formik.errors.password}</span>
                )}
              </label>
            </div>
            <button type="submit" className={s.modal_btn}>
              Log In
            </button>
          </form>
        </div>
      </div>
    </BackdropModal>
  );
};
