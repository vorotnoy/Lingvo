import s from "./ModalOrder.module.scss";
import { BackdropModal } from "../Backdrop/Backdrop";
import svg from "../../assets/icons/sprite.svg";
import { useCallback, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

const OrderSchema = Yup.object().shape({
  reason: Yup.string().required("Required"),
  name: Yup.string()
    .min(2, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string().min(9, "must be more than 9").required("Required"),
});

export const ModalOrder = ({ onClose }) => {
  const formik = useFormik({
    initialValues: {
      reason: "",
      name: "",
      email: "",
      phone: "",
    },
    onSubmit: (values, actions) => {
      actions.resetForm({
        values: { reason: "", name: "", email: "", number: "" },
      });
      onClose();
      console.log(values);
    },

    validationSchema: OrderSchema,
  });

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  const changeReason = (e) => {
    console.log(e.currentTarget.value);
    const value = e.currentTarget.value;
    formik.values.reason = value;
  };
  return (
    <BackdropModal closeModal={onClose} >
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
            <h3 className={s.modal_title}>Book trial lesson</h3>
            <div className={s.scroll_block}>
            <p className={s.modal_desc}>
              Our experienced tutor will assess your current language level,
              discuss your learning goals, and tailor the lesson to your
              specific needs.
            </p>
            <div className={s.modal_teacherblock}>
              <img
                src={name.avatar_url}
                className={s.modal_teacherblock__avatar}
              />
              <div>
                <p className={s.modal_teacherblock__head}>Your teacher</p>
                <p className={s.modal_teacherblock__name}>
                  {name.name} {name.surname}
                </p>
              </div>
            </div>
            <div className={s.modal_radio}>
              <div className={s.modal_radio__title}>
                What is your main reason for learning English?
              </div>
              <input
                type="radio"
                name="reason"
                value="career"
                className={s.modal_radio__input}
                id="input_1"
                onChange={(e) => changeReason(e)}
              />
              <label className={s.modal_radio__label} for="input_1">
                Career and business
              </label>

              <input
                type="radio"
                name="reason"
                value="kids"
                className={s.modal_radio__input}
                id="input_2"
                onChange={(e) => changeReason(e)}
              />
              <label className={s.modal_radio__label} for="input_2">
                Lesson for kids
              </label>

              <input
                type="radio"
                name="reason"
                value="abroad"
                className={s.modal_radio__input}
                id="input_3"
                onChange={(e) => changeReason(e)}
              />
              <label className={s.modal_radio__label} for="input_3">
                Living abroad
              </label>

              <input
                type="radio"
                name="reason"
                value="exam"
                className={s.modal_radio__input}
                id="input_4"
                onChange={(e) => changeReason(e)}
              />
              <label className={s.modal_radio__label} for="input_4">
                Exams and coursework
              </label>

              <input
                type="radio"
                name="reason"
                value="travel"
                className={s.modal_radio__input}
                id="input_5"
                onChange={(e) => changeReason(e)}
              />
              <label className={s.modal_radio__label} for="input_5">
                Culture, travel or hobby
              </label>
            </div>
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
                />{" "}
                {formik.errors.email && formik.touched.email && (
                  <span className={s.error}>{formik.errors.email}</span>
                )}
              </label>
              <label className={s.modal_regist__label}>
                <input
                  type="phone"
                  name="phone"
                  placeholder="Phone number"
                  className={s.modal_regist__input}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                />
                {formik.errors.phone && formik.touched.phone && (
                  <span className={s.error}>{formik.errors.phone}</span>
                )}
              </label>
            </div>
            <button type="submit" className={s.modal_btn}>
              Book
            </button>
            </div>
          </form>
        </div>
      </div>
    </BackdropModal>
  );
};
