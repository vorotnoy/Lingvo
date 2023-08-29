import s from "./TeachersList.module.scss";
import { TeacherCard } from "../TeacherCard/TeacherCard";
import { ModalOrder } from "../ModalOrder/ModalOrder";
import { useState } from "react";

export const TeachersList = () => {
  const [showModalWindow, setShowModalWindow] = useState(false);
  const handleModalWindowOpen = () => setShowModalWindow(true);
  const handleModalWindowClose = () => setShowModalWindow(false);
  return (
    <section className={s.wrapper}>
      <TeacherCard openModal={handleModalWindowOpen} />
      <TeacherCard openModal={handleModalWindowOpen} />
      {showModalWindow && <ModalOrder onClose={handleModalWindowClose} />}
    </section>
  );
};
