import React, { Component } from "react";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Notification from "./Notification";

class Feedback extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    handleGoodBtn = () => {
        this.setState(prevState => ({
            good: prevState.good + 1,
        }), () => {
            this.countTotalFeedback();
        });
    }

    handleNeutralBtn = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        }), () => {
            this.countTotalFeedback();
        });
    }

    handleBadBtn = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1,
        }), () => {
            this.countTotalFeedback();
        });
    }

    countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad;
    }

    countPositiveFeedbackPercentage = () => {
        return (this.state.good / (this.state.good + this.state.neutral + this.state.bad) * 100).toFixed();
    }

    render() {
        return (
            <>
                <FeedbackOptions options={this.state} onGoodBtn={this.handleGoodBtn} onNeutralBtn={this.handleNeutralBtn} onBadBtn={this.handleBadBtn}/>
                {
                    this.countTotalFeedback() === 0
                    ? <Notification message="No feedback given" />
                    : <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/>
                }
            </>
        );
    }
}

export default Feedback;