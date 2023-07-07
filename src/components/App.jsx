
// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { FeedbackStatistics } from './FeedbackStatistics/FeedbackStatistics';
import {Notification} from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (option) => {
    this.setState(prevState => {
        return {
          [option]: prevState[option] + 1,
        }
      }
    )};

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return Math.round((good / total) * 100);
  };

  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad,  } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title={"Statistics"}>
          {total > 0 ? (
            <FeedbackStatistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage} />
            ) : ( <Notification message="There is no feedback"/>)
          }
        </Section>
      </>
    )
  }
}
