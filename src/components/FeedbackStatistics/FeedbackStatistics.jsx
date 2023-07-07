import PropTypes from 'prop-types';
import css from './FeedbackStatistics.module.css';

export const FeedbackStatistics = ({good, neutral, bad, total, positivePercentage}) => {
	return (
    <>
      <div className={css.wrap}>
        <p className={css.goodStat}>Good: {good}</p>
        <p className={css.neutralStat}>Neutral: {neutral}</p>
        <p className={css.badStat}>Bad: {bad}</p>
        <p className={css.totalStat}>Total: {total}</p>
        <p className={css.percentageStat}>Positive Feedback: {positivePercentage}%</p>
      </div>
    </>
	);
};

FeedbackStatistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
