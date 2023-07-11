import React, { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { FeedbackStatistics } from './FeedbackStatistics/FeedbackStatistics';
import { Notification } from './Notification/Notification';
import { TbMoodEmpty, TbMoodSad, TbMoodSmile } from 'react-icons/tb';
import css from './FeedbackOptions/FeedbackOptions.module.css';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = (event) => {
    const btnType = event.target.name;
    switch (btnType) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        console.log('Error on feedback');
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((good / total) * 100);
  };

  const options = {
    good: <TbMoodSmile className={css.iconGood} size='20' />,
    neutral: <TbMoodEmpty className={css.iconNeutral} size='20' />,
    bad: <TbMoodSad className={css.iconBad} size='20' />,
  };

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      <Section title={'Statistics'}>
        {countTotalFeedback() ? (
          <FeedbackStatistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()} />
        ) : (<Notification message='There is no feedback' />)
        }
      </Section>
    </>
  );
};
