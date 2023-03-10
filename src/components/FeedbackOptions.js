import React from "react";
import Section from "./Section";

export default function FeedbackOptions({ options, onLeaveFeedback }) { 
    
    return (
        <div className="buttons">
            <Section title="Please leave feedback" />
            <button type="button" onClick={onLeaveFeedback} >good</button>
            <button type="button" onClick={onLeaveFeedback}>neutral</button>
            <button type="button" onClick={onLeaveFeedback}>bad</button>
        </div>
    )
}