import css from './Options.module.css';

const Options = ({ updateFeedback }) => {
  return (
    <div className={css.optionsContainer}>
      <button
        onClick={() => updateFeedback('Good')}
        className={css.optionsBTN}
        type="button"
      >
        Good
      </button>
      <button
        onClick={() => updateFeedback('Neutral')}
        className={css.optionsBTN}
        type="button"
      >
        Neutral
      </button>
      <button
        onClick={() => updateFeedback('Bad')}
        className={css.optionsBTN}
        type="button"
      >
        Bad
      </button>
    </div>
  );
};

export default Options;
