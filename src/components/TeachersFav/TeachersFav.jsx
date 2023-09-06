import { useSelector } from "react-redux";
import { selectFavorite } from "../../redux/Teachers/teacherSelectors";
import { TeachersList } from "../TeachersList/TeachersList";
import s from "./TeachersFav.module.scss";

export const TeachersFav = ({ isAuth }) => {
  const listOfFav = useSelector(selectFavorite);

  return (
    <>
      {isAuth && (
        <TeachersList
          isAuth={isAuth}
          typeOfPage={false}
          listOfTeachers={listOfFav}
        />
      )}
      {!isAuth && <h2 className={s.messege}>You need to login</h2>}
    </>
  );
};
