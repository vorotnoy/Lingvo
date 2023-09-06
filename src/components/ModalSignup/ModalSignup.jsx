import s from "./ModalSignup.module.scss";
import { BackdropModal } from "../Backdrop/Backdrop";
import svg from "../../assets/icons/sprite.svg";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/auth/authOperation";
import * as Yup from "yup";
import { useFormik } from "formik";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(7, "Too short, must contain 7 characters or more")
    .required("Required"),
});

export const ModalSignup = ({ onClose, toggleModal }) => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(true);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      dispatch(addUser(values));
      onClose();
    },
    validationSchema: SignupSchema,
  });

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);
  const toggleShowPass = () => {
    setShowPassword(!showPassword);
  };
  return (
    <BackdropModal closeModal={onClose} toggleModal={toggleModal}>
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
            <h3 className={s.modal_title}>Registration</h3>
            <p className={s.modal_desc}>
              Thank you for your interest in our platform! In order to register,
              we need some information. Please provide us with the following
              information
            </p>
            <div className={s.modal_regist}>
              <label className={s.modal_regist__label}>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className={s.modal_regist__input}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.errors.name && formik.touched.name && (
                  <span className={s.error}>{formik.errors.name}</span>
                )}
              </label>
              <label className={s.modal_regist__label}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={s.modal_regist__input}
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
                  type={showPassword ? "password" : "text"}
                  name="password"
                  placeholder="Password"
                  className={s.modal_regist__input}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                <svg
                  width="20"
                  height="20"
                  className={s.svg_showpassword}
                  onClick={toggleShowPass}
                >
                  {showPassword && <use href={svg + "#icon-eye-off"}></use>}
                  {!showPassword && <use href={svg + "#icon-eye"}></use>}
                </svg>
                {formik.errors.password && formik.touched.password && (
                  <span className={s.error}>{formik.errors.password}</span>
                )}
              </label>
            </div>
            <button type="submit" className={s.modal_btn}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </BackdropModal>
  );
};
