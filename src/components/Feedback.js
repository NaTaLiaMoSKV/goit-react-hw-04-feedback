import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Notification from "./Notification";
import { useState } from "react";

export default function Feedback() {
    const [ good, setGood ] = useState(0);
    const [ neutral, setNeutral ] = useState(0);
    const [ bad, setBad ] = useState(0);

    const countTotalFeedback = () => {
        return good + neutral + bad;
    }

    const countPositiveFeedbackPercentage = () => {
        return (good / (good + neutral + bad) * 100).toFixed();
    }

    const handleButton = event => {
        const innerText = event.currentTarget.textContent;
        switch (innerText) {
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
                return;
        };
    }
   
    return (
        <>
            <FeedbackOptions options={{good, neutral, bad}} onLeaveFeedback={handleButton} />
            {
                countTotalFeedback === 0
                ? <Notification message="No feedback given" />
                : <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()}/>
            }
        </>
    );
}
