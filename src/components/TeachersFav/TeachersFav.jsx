import { useSelector } from "react-redux";
import { selectFavorite } from "../../redux/Teachers/teacherSelectors";
import { TeachersList } from "../TeachersList/TeachersList";

export const TeachersFav = ({isAuth}) => {
  const listOfFav = useSelector(selectFavorite);

  return (
    <>
      <TeachersList isAuth={isAuth} typeOfPage={false} listOfTeachers={listOfFav} />
    </>
  );
};
