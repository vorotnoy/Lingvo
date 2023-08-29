import s from "./ModalOrder.module.scss";
import { BackdropModal } from "../Backdrop/Backdrop";
import svg from "../../assets/icons/sprite.svg";
import img from "../../assets/images/avatar.jpg";
import { useCallback } from "react";

export const ModalOrder = ({onClose}) => {
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
         <form>
         <h3 className={s.modal_title}>Book trial lesson</h3>
          <p className={s.modal_desc}>
            Our experienced tutor will assess your current language level,
            discuss your learning goals, and tailor the lesson to your specific
            needs.
          </p>
          <div className={s.modal_teacherblock}>
            <img src={img} className={s.modal_teacherblock__avatar} />
            <div>
              <p className={s.modal_teacherblock__head}>Your teacher</p>
              <p className={s.modal_teacherblock__name}>Jane Smith</p>
            </div>
          </div>
          <div className={s.modal_radio}>
            <div className={s.modal_radio__title}>
              What is your main reason for learning English?
            </div>
            <label className={s.modal_radio__label}>
              <input type="radio" name="reason" value="career" />
              Career and business
            </label>
            <label className={s.modal_radio__label}>
              <input type="radio" name="reason" value="kids" />
              Lesson for kids
            </label>
            <label className={s.modal_radio__label}>
              <input type="radio" name="reason" value="abroad" />
              Living abroad
            </label>
            <label className={s.modal_radio__label}>
              <input type="radio" name="reason" value="exam" />
              Exams and coursework
            </label>
            <label className={s.modal_radio__label}>
              <input type="radio" name="reason" value="travel" />
              Culture, travel or hobby
            </label>
          </div>
          <div className={s.modal_regist}>
            <label className={s.modal_regist__label}>
              <input type="text" name="name" placeholder="Full Name" className={s.modal_regist__input}/>
            </label>
            <label className={s.modal_regist__label}>
              <input type="email" name="email" placeholder="Email" className={s.modal_regist__input}/>
            </label>
            <label className={s.modal_regist__label}>
              <input type="phone" name="phone" placeholder="Phone number" className={s.modal_regist__input}/>
            </label>
          </div>
          <button type="submit" className={s.modal_btn}>Book</button>
         </form>
        </div>
      </div>
    </BackdropModal>
  );
};
