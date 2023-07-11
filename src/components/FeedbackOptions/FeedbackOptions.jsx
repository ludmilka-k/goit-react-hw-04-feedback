import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <ul className={css.wrapper}>
        {Object.entries(options)
          .map(([optionName, optionIcon]) => (
            <li key={optionName}>
              <button
                name={optionName}
                type='button'
                className={css.button}
                onClick={onLeaveFeedback}
              >
                {optionIcon} {optionName}
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};

FeedbackOptions.prototype = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
};

