import { TeachersFav } from "../../components/TeachersFav/TeachersFav";

export const FavoritePage = ({isAuth}) => {
  return (
    <>
      <TeachersFav isAuth={isAuth}/>
    </>
  );
};
