import s from "./TeacherCard.module.scss";
import svg from "../../assets/icons/sprite.svg";
import img from "../../assets/images/avatar.jpg";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { selectUid } from "../../redux/auth/authSelectors";

const Comment = ({ name, rating, text }) => {
  return (
    <div className={s.comment_block}>
      <div className={s.comment_ratingblock}>
        <img src={img} className={s.comment_avatar} />
        <div>
          <p className={s.comment_name}>{name}</p>
          <svg width="16" height="16" className={s.comment_svg}>
            <use href={svg + "#icon-star"}></use>
          </svg>

          <p className={s.comment_rating}>{rating}</p>
        </div>
      </div>
      <p className={s.comment_text}>{text}</p>
    </div>
  );
};

export const TeacherCard = ({
  data,
  openModal,
  teacher,
  openModalLogin,
  favList,
  isAuth,
  addFavorite,
  delFavorite,
}) => {
  const {
    avatar_url,
    conditions,
    experience,
    languages,
    lesson_info,
    lessons_done,
    levels,
    name,
    price_per_hour,
    rating,
    reviews,
    surname,
    id,
  } = data;
  const userID = useSelector(selectUid);
  const [order, setOrder] = useState(false);
  const [inFavorite, setInFavorite] = useState();

  useEffect(() => {
    const fav = favList?.find((item) => {
      return item.id === id;
    });
    setInFavorite(fav);
  });

  function ordered() {
    setOrder(true);
  }

  function modalOpen() {
    const teacherData = {
      name,
      surname,
      avatar_url,
    };
    teacher(teacherData);
    openModal();
  }
  const addFav = () => {
    if (!isAuth) {
      openModalLogin();
      return;
    }
    const addfav = {
      id: id,
      user: userID,
      teacher: data,
    };
    addFavorite(addfav);
  };

  const delFav = () => {
    if (!isAuth) {
      openModalLogin();
      return;
    }
    const delfav = {
      id: id,
      user: userID,
    };
    delFavorite(delfav);
  };
  // console.log('card',favList, inFavorite )
  return (
    <section className={s.wrapper}>
      <div className={s.avatar}>
        <div className={s.avatar_circle}>
          <div className={s.avatar_img__wrapper}>
            <img src={avatar_url} alt=" " className={s.avatar_img} />
            <div className={s.avatar_online__border}>
              <div className={s.avatar_online__circle}></div>
            </div>
          </div>
        </div>
      </div>
      <div className={s.teacher_block}>
        <div className={s.teacher_stat}>
          <p className={s.teacher_stat__lang}>Languages</p>
          <ul className={s.teacher_stat__list}>
            <li className={s.teacher_stat__item}>
              <svg width="16" height="16" className={s.teacher_stat__svg}>
                <use href={svg + "#icon-book-open"}></use>
              </svg>
              <p className={s.teacher_stat__text}>Lessons online</p>
            </li>
            <li className={s.teacher_stat__item}>
              <p className={s.teacher_stat__text}>
                Lessons done: {lessons_done}
              </p>
            </li>
            <li className={s.teacher_stat__item}>
              <svg width="16" height="16" className={s.teacher_stat__svg}>
                <use href={svg + "#icon-star"}></use>
              </svg>
              <p className={s.teacher_stat__text}>Rating: {rating}</p>
            </li>
            <li className={s.teacher_stat__item}>
              <p className={s.teacher_stat__text}>
                Price / 1 hour:
                <span className={s.teacher_stat__price}>{price_per_hour}$</span>
              </p>
            </li>
          </ul>
          {inFavorite && (
            <svg
              width="26"
              height="26"
              onClick={delFav}
              className={s.svg_heart}
            >
              <use href={svg + "#icon-heartplus"}></use>
            </svg>
          )}
          {!inFavorite && (
            <svg
              width="26"
              height="26"
              onClick={addFav}
              className={s.svg_heart}
            >
              <use href={svg + "#icon-heart"}></use>
            </svg>
          )}
        </div>
        <p className={s.teacher_name}>
          {name} {surname}
        </p>
        <div className={s.teacher_desc}>
          <p className={s.teacher_desc__title}>
            Speaks:
            <span className={s.teacher_desc__text}>{languages.join(", ")}</span>
          </p>

          <p className={s.teacher_desc__title}>
            Lesson Info:
            <span className={s.teacher_desc__text}> {lesson_info}</span>
          </p>
          <p className={s.teacher_desc__title}>
            Conditions:
            <span className={s.teacher_desc__text}>{conditions}</span>
          </p>
        </div>
        {!order && (
          <p className={s.teacher_more} onClick={ordered}>
            Read more
          </p>
        )}

        {order && (
          <>
            <p className={s.teacher_experience}>{experience}</p>
            <ul>
              {reviews.map((item) => (
                <li key={uuidv4()}>
                  <Comment
                    name={item.reviewer_name}
                    rating={item.reviewer_rating}
                    text={item.comment}
                  />
                </li>
              ))}
            </ul>
          </>
        )}

        <ul className={s.teacher_lavel}>
          {levels.map((item) => (
            <li className={s.teacher_level__false} key={uuidv4()}>
              {item}
            </li>
          ))}
        </ul>
        {order && (
          <button type="button" className={s.btn_order} onClick={modalOpen}>
            Book trial lesson
          </button>
        )}
      </div>
    </section>
  );
};
