import React from "react";
import Section from "./Section";

const FeedbackOptions = (props) => { 
    return (
        <div className="buttons">
            <Section title="Please leave feedback" />
            <button type="button" onClick={props.onGoodBtn} >Good</button>
            <button type="button" onClick={props.onNeutralBtn}>Neutral</button>
            <button type="button" onClick={props.onBadBtn}>Bad</button>
        </div>
    )
}

export default FeedbackOptions;