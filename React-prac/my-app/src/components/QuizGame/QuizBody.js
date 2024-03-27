// QuizBody.jsx
import React from "react";
import Questions from "./Questions";
import { nanoid } from 'nanoid';

export default function QuizBody() {
  const [questions, setQuestions] = React.useState([]);
  const [score, setScore] = React.useState(0);

  React.useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple')
      .then(res => res.json())
      .then(data => {
        // Add a new property 'userAnswer' with an initial value of null to each question
        const questionsWithUserAnswer = data.results.map(question => ({
          ...question,
          id: nanoid(),
          userAnswer: null, // Initial value is null
        }));

        // Set the state with the modified questions array
        setQuestions(questionsWithUserAnswer);
      });
  }, []);

  function selectAnswer(questionId, selectedAnswer) {
    const num = 0
    // Update the userAnswer for the selected question
    setQuestions(prevQuestions =>
      prevQuestions.map(question =>
        question.id === questionId ? { ...question, userAnswer: selectedAnswer } : question
      )
    );
    
    setScore(num)
    // Alert the selected answer
    alert(`Selected Answer: ${selectedAnswer}`);
  }

  const questionElements = questions.map(quest => (
    <Questions
      key={quest.id}
      id={quest.id}
      tanong={quest.question}
      inc={quest.incorrect_answers}
      correct={quest.correct_answer}
      userAnswer={quest.userAnswer}
      select={selectAnswer}
    />
  ));

  return (
    <div className="quizBody">
      {questionElements}

      <pre>{JSON.stringify(questions, null, 2)}</pre>
      <h5 className="result">{`Your Score: ${score}/5`}</h5>
      <div className="mx-auto">
        <button className="btnCheck">Check Answer</button>
      </div>
    </div>
  );
}
