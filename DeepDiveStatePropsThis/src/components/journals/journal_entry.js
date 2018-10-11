import React, { Component } from "react";

const JournalEntry  = props => {
    return(
    <div>
        <h1>{props.title}</h1>
        <p>Some amazing {props.content} </p>
    </div>
    );
};

export default JournalEntry;