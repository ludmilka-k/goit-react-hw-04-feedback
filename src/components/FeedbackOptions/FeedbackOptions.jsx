import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
	return (
    <>
      <div className={css.wrapper}>
        {options.map(option => {
          return (
            <button
              key={option}
              type="button"
              className={css.button}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}</button>
          )
        }
      )}
      </div>
    </>
	)
}

FeedbackOptions.prototype = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
};

