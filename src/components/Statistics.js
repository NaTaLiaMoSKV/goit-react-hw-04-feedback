import React from "react";
import Section from "./Section";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <div className="statistics">
            <Section title={"Statistics"} />

            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: { positivePercentage === 'NaN'  ? `0` : `${positivePercentage}%`}</p>
        </div>
    )
};

export default Statistics;