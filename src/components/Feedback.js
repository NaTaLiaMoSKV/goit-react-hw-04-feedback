import React, { Component } from "react";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Notification from "./Notification";
// import Section from "./Section";

class Feedback extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    handleButton = (event) => {
        const innerText = event.currentTarget.textContent;
        this.setState(prevState => {
             if (innerText === 'good')  return { [innerText]: prevState.good + 1, }
             if (innerText === 'neutral')  return { [innerText]: prevState.neutral + 1, }
             if (innerText === 'bad')  return { [innerText]: prevState.bad + 1, }
        }, () => {
            this.countTotalFeedback();
        })
    }

    countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad;
    }

    countPositiveFeedbackPercentage = () => {
        return (this.state.good / (this.state.good + this.state.neutral + this.state.bad) * 100).toFixed();
    }

    render() { 
        const { good, neutral, bad } = this.state;
        return (
            <>
                <FeedbackOptions options={this.state} onLeaveFeedback={this.handleButton} />
                {
                    this.countTotalFeedback() === 0
                    ? <Notification message="No feedback given" />
                    : <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/>
                }
            </>
        );
    }
}

export default Feedback;