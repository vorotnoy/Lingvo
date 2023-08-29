import s from "./TeacherCard.module.scss";
import svg from "../../assets/icons/sprite.svg";
import img from "../../assets/images/avatar.jpg";
import { useState } from "react";

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

export const TeacherCard = ({openModal}) => {
  const [order, setOrder] = useState(false);
  function ordered() {
    setOrder(true);
  }
  function modalOpen(){
    openModal()
  }
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
                <use href={svg + "#icon-star"}></use>
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
              Lessons are structured to cover grammar, vocabulary, and practical
              usage of the language.
            </span>
          </p>
          <p className={s.teacher_desc__title}>
            Conditions:
            <span className={s.teacher_desc__text}>
              Welcomes both adult learners and teenagers (13 years and
              above).Provides personalized study plans
            </span>
          </p>
        </div>
        {order && (
          <>
            <Comment
              name="Frank"
              rating="4.0"
              text="Jane's lessons were very helpful. I made good progress."
            />
            <Comment
              name="Eve"
              rating="5.0"
              text="Jane is an amazing teacher! She is patient and supportive."
            />
          </>
        )}

        {!order&&<p className={s.teacher_more} onClick={ordered}>Read more</p>}
        <ul className={s.teacher_lavel}>
          <li className={s.teacher_lavel__true}>#A1 Beginner</li>
          <li className={s.teacher_lavel__false}>#A2 Elementary</li>
          <li className={s.teacher_lavel__false}>#B1 Intermediate</li>
          <li className={s.teacher_lavel__false}>#B2 Upper-Intermediate</li>
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
