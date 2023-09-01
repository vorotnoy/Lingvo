import s from "./TeachersList.module.scss";
import { TeacherCard } from "../TeacherCard/TeacherCard";
import { ModalOrder } from "../ModalOrder/ModalOrder";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAll,
  getLength,
  addFavorite,
  delFavorite
} from "../../redux/Teachers/teacherOperation";
import {
  selectTeacherList,
  selectLength,
} from "../../redux/Teachers/teacherSelectors";
import { ModalRegister } from "../ModalRegister/ModalRegister";
import { loginUser } from "../../redux/auth/authOperation";
import { selectFavorite } from "../../redux/Teachers/teacherSelectors";
import { selectEmail } from "../../redux/auth/authSelectors";
export const TeachersList = () => {
  const isAuth = useSelector(selectEmail);
  const favList = useSelector(selectFavorite);
  const arrayLength = useSelector(selectLength);
  const [teacherName, setTeacherName] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLength());
    dispatch(getAll(4));
  }, []);

  const listOfTeachers = useSelector(selectTeacherList);


  const loadMore = () => {
    let end = listOfTeachers.length + 4;
    dispatch(getAll(end));
  };

  const [showModalWindow, setShowModalWindow] = useState(false);
  const handleModalWindowOpen = () => setShowModalWindow(true);
  const handleModalWindowClose = () => setShowModalWindow(false);

  const [showModalLoginWindow, setShowModaLoginlWindow] = useState(false);
  const handleModalLoginWindowOpen = () => setShowModaLoginlWindow(true);
  const handleModalLoginWindowClose = () => setShowModaLoginlWindow(false);
  if (listOfTeachers.length === 0) return;

  const user = (data) => {
    dispatch(loginUser(data));
  };

  const addFav = (data)=>{
    dispatch(addFavorite(data))
  }
const delFav=(data)=>{
  dispatch(delFavorite(data))
}
  return (
    <section className={s.wrapper}>
      <ul>
        {listOfTeachers.map((item) => (
          <li key={item.id}>
            <TeacherCard
              data={item}
              openModal={handleModalWindowOpen}
              teacher={setTeacherName}
              openModalLogin={handleModalLoginWindowOpen}
              isAuth={isAuth}
              favList={favList}
              addFavorite={addFav}
              delFavorite={delFav}
            />
          </li>
        ))}
      </ul>
      {arrayLength > listOfTeachers.length && (
        <button type="button" className={s.btn_load} onClick={loadMore}>
          Load more
        </button>
      )}
      {showModalWindow && (
        <ModalOrder onClose={handleModalWindowClose} name={teacherName} />
      )}
      {showModalLoginWindow && (
        <ModalRegister
          onSubmit={user}
          onClose={handleModalLoginWindowClose}
          typeForm={false}
        />
      )}
    </section>
  );
};
