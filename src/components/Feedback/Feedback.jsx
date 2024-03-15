import css from './Feedback.module.css';
// import App from "../../App";

const Feedback = () => {
  return (
    <ul className={css.feedbackList}>
      <li className={css.feedbackListItem}>Good: 0</li>
      <li className={css.feedbackListItem}>Neutral: 0</li>
      <li className={css.feedbackListItem}>Bad: 0</li>
    </ul>
  );
};

export default Feedback;
