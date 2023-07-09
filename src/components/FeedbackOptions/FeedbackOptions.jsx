import PropTypes from 'prop-types';
import { TbMoodSmile, TbMoodEmpty, TbMoodSad } from "react-icons/tb";
import css from './FeedbackOptions.module.css';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {/*<ul className={css.wrapper}>*/}
      {/*  {options.map(option => (*/}
      {/*    <li key={option}>*/}
      {/*      <button*/}
      {/*        name={option}*/}
      {/*        type="button"*/}
      {/*        className={css.button}*/}
      {/*        onClick={onLeaveFeedback}*/}
      {/*      >*/}
      {/*        {option}</button>*/}
      {/*    </li>*/}
      {/*    ))}*/}
      {/*</ul>*/}

        <ul className={css.wrapper}>
          {options.map(option => (
            <li key={option}>
              {option === 'good' && (
              <button
                name={option}
                type="button"
                className={css.button}
                onClick={onLeaveFeedback}
              >
                <TbMoodSmile className={css.iconGood} size="20"/>{option}</button>
              )}

              {option === 'neutral' && (
                <button
                  name={option}
                  type="button"
                  className={css.button}
                  onClick={onLeaveFeedback}
                >
                  <TbMoodEmpty className={css.iconNeutral} size="20"/>{option}</button>
              )}

              {option === 'bad' && (
                <button
                  name={option}
                  type="button"
                  className={css.button}
                  onClick={onLeaveFeedback}
                >
                  <TbMoodSad className={css.iconBad} size="20"/>{option}</button>
              )}
            </li>
          ))}
        </ul>
    </>
	)
}

FeedbackOptions.prototype = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
};

