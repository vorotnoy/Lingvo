import s from "./TeacherCard.module.scss";
import svg from "../../assets/icons/sprite.svg";
import img from "../../assets/images/avatar.jpg";

export const TeacherCard = () => {
  return (
    <section className={s.wrapper}>
      <div className={s.avatar}>
        <div className={s.avatar_circle}>
        <div className={s.avatar_img__wrapper}>
          <img src={img} alt="" className={s.avatar_img} />
          <div className={s.avatar_online__border}>
            <div className={s.avatar_online__circle}></div>
          </div>
          </div>
        </div>
      </div>
      <div className={s.teacher_block}>
        <div className={s.teacher_stat}>
          <p className={s.teacher_stat__Lang}>Languages</p>
          <ul className={s.teacher_stat__list}>
            <li className={s.teacher_stat__item}>
              <svg width="16" height="16" className={s.teacher_stat__svg}>
                <use href={svg + "#icon-book-open"}></use>
              </svg>
              <p className={s.teacher_stat__text}>Lessons online</p>
            </li>
            <li className={s.teacher_stat__item}>
              <p className={s.teacher_stat__text}>Lessons done: 1098</p>
            </li>
            <li className={s.teacher_stat__item}>
              <svg width="16" height="16" className={s.teacher_stat__svg}>
                <use href={svg + "#icon-book-open"}></use>
              </svg>
              <p className={s.teacher_stat__text}>Rating: 4.8</p>
            </li>
            <li className={s.teacher_stat__item}>
              <p className={s.teacher_stat__text}>Price / 1 hour: 30$</p>
            </li>
          </ul>
          <svg width="16" height="16">
            <use href={svg + "#icon-heart"}></use>
          </svg>
        </div>
        <p className={s.teacher_name}>Jane Smith</p>
        <div className={s.teacher_desc}>
          <p className={s.teacher_desc__title}>
            Speaks:<span className={s.teacher_desc__text}> German, French</span>
          </p>
          <p className={s.teacher_desc__title}>
            Lesson Info:
            <span className={s.teacher_desc__text}>
              {" "}
              Lessons are structured to cover grammar, vocabulary, and practical
              usage of the language.
            </span>
          </p>
          <p className={s.teacher_desc__title}>
            Conditions:
            <span className={s.teacher_desc__text}>
              {" "}
              Welcomes both adult learners and teenagers (13 years and
              above).Provides personalized study plans
            </span>
          </p>
        </div>
        <p className={s.teacher_more}>Read more</p>
        <ul className={s.teacher_lavel}>
          <li className={s.teacher_lavel__true}>#A1 Beginner</li>
          <li className={s.teacher_lavel__false}>#A2 Elementary</li>
          <li className={s.teacher_lavel__false}>#B1 Intermediate</li>
          <li className={s.teacher_lavel__false}>#B2 Upper-Intermediate</li>
        </ul>
      </div>
    </section>
  );
};
