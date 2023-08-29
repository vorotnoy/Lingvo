import s from "./TeachersList.module.scss";
import { TeacherCard } from "../TeacherCard/TeacherCard";
export const TeachersList = () => {
  return (
    <section className={s.wrapper}>
      <TeacherCard />
      <TeacherCard />
    </section>
  );
};
