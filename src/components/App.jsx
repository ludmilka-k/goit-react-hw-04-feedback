
import React, { useState} from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { FeedbackStatistics } from './FeedbackStatistics/FeedbackStatistics';
import {Notification} from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

    const handleFeedback= (event) => {
      const btnType= event.target.name;
      if (btnType === "good") setGood(good + 1);
      if (btnType === "neutral") setNeutral(neutral + 1);
      if (btnType === "bad") setBad(bad + 1);
    }

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((good / total) * 100);
  };

  return (
    <>
      <Section title={"Please leave feedback"}>
        <FeedbackOptions
          options={Object.keys({ good, neutral, bad })}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      <Section title={"Statistics"}>
        {countTotalFeedback() ? (
          <FeedbackStatistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={ countPositiveFeedbackPercentage()} />
          ) : ( <Notification message="There is no feedback"/>)
        }
      </Section>
    </>
  )
}
