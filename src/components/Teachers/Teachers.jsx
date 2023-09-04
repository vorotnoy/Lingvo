import { useSelector } from "react-redux";
import { TeachersList } from "../TeachersList/TeachersList";
import { selectTeacherList } from "../../redux/Teachers/teacherSelectors";

export const Teachers = ({isAuth}) => {
  const listOfTeachers = useSelector(selectTeacherList);
  console.log('teachers')
  return (
    <>
      <TeachersList typeOfPage={true} listOfTeachers={listOfTeachers} isAuth={isAuth}/>
    </>
  );
};
