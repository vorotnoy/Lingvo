import s from "./TeachersList.module.scss";
import { TeacherCard } from "../TeacherCard/TeacherCard";
import { ModalOrder } from "../ModalOrder/ModalOrder";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAll,
  getLength,
  addFavorite,
  delFavorite,
} from "../../redux/Teachers/teacherOperation";
import { selectLength } from "../../redux/Teachers/teacherSelectors";
import { ModalSignin } from "../ModalSIgnIn/ModalSignin";
import { loginUser } from "../../redux/auth/authOperation";
import { selectFavorite } from "../../redux/Teachers/teacherSelectors";

export const TeachersList = ({ typeOfPage, listOfTeachers, isAuth }) => {
  const dispatch = useDispatch();
  const favList = useSelector(selectFavorite);
  const arrayLength = useSelector(selectLength);
  const [teacherName, setTeacherName] = useState();

  useEffect(() => {
    dispatch(getLength());
    dispatch(getAll(4));
  }, []);

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

  useEffect(() => {
    if (showModalWindow || showModalLoginWindow) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showModalWindow, showModalLoginWindow]);

  if (listOfTeachers.length === 0) return;

  const user = (data) => {
    dispatch(loginUser(data));
  };

  const addFav = (data) => {
    dispatch(addFavorite(data));
  };
  const delFav = (data) => {
    dispatch(delFavorite(data));
  };
  console.log("list");
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
      {arrayLength > listOfTeachers.length && typeOfPage && (
        <button type="button" className={s.btn_load} onClick={loadMore}>
          Load more
        </button>
      )}
      {showModalWindow && (
        <ModalOrder onClose={handleModalWindowClose} name={teacherName} />
      )}
      {showModalLoginWindow && (
        <ModalSignin onSubmit={user} onClose={handleModalLoginWindowClose} />
      )}
    </section>
  );
};
