import s from "./Main.module.scss";
import img from "../../assets/images/block.jpg";
import { Statistic } from "../Statistic/Statistic";
import { NavLink } from "react-router-dom";

export const Main = () => {
  // console.log('main')
  return (
    <section className={s.wrapper}>
      <div className={s.info_block}>
        <div className={s.info_block__content}>
          <h2 className={s.info_block__title}>
            Unlock your potential with the best
            <span className={s.info_block__span}>language</span> tutors
          </h2>
          <p className={s.info_block__desc}>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>

          <NavLink to='/teachers'>
            <button type="button" className={s.info_block__btn}>
              Get started
            </button>
          </NavLink>
        </div>
        <img src={img} className={s.avatar} />
      </div>
      <Statistic />
    </section>
  );
};
