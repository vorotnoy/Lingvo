import s from "./Statistic.module.scss";

const ContentBlock = ({ title, desc }) => {
  return (
    <div className={s.contentBlock_wrapper}>
      <h3 className={s.contentBlock_title}>{title} +</h3>
      <p className={s.contentBlock_desc}>{desc}</p>
    </div>
  );
};

export const Statistic = () => {

  return (
    <section className={s.wrapper}>
      <ul className={s.statistic_list}>
        <li className={s.statistic_item}>
          <ContentBlock title="32,000" desc="Experienced tutors" />
        </li>
        <li className={s.statistic_item}>
          <ContentBlock title="300,000" desc="5-star tutor reviews" />
        </li>
        <li className={s.statistic_item}>
          <ContentBlock title="120" desc="Subjects taught" />
        </li>
        <li className={s.statistic_item}>
          <ContentBlock title="200" desc="Tutor nationalities" />
        </li>
      </ul>
    </section>
  );
};
