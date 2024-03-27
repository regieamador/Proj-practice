// Questions.jsx
import React from "react";

export default function Questions(props) {
  const styles = {
    backgroundColor: props.userAnswer ? "black" : "white",
    color: props.userAnswer ? "white" : "black",
  };

  const handleSelect = (selectedAnswer) => {
    props.select(props.id, selectedAnswer);
  };

  return (
    <div className="question">
      <h1>{props.tanong}</h1>
      <div className="choices">
        <p onClick={() => handleSelect(props.inc[0])} style={styles}>
          {props.inc[0]}
        </p>
        <p onClick={() => handleSelect(props.inc[1])} style={styles}>
          {props.inc[1]}
        </p>
        <p onClick={() => handleSelect(props.inc[2])} style={styles}>
          {props.inc[2]}
        </p>
        <p onClick={() => handleSelect(props.correct)} style={styles}>
          {props.correct}
        </p>
      </div>
    </div>
  );
}
