import css from './Options.module.css';

const Options = ({ updateFeedback }) => {
  return (
    <div className={css.optionsContainer}>
      <button
        onClick={() => updateFeedback('good')}
        className={css.optionsBTN}
        type="button"
      >
        Good
      </button>
      <button
        onClick={() => updateFeedback('neutral')}
        className={css.optionsBTN}
        type="button"
      >
        Neutral
      </button>
      <button
        onClick={() => updateFeedback('bad')}
        className={css.optionsBTN}
        type="button"
      >
        Bad
      </button>
    </div>
  );
};

export default Options;
