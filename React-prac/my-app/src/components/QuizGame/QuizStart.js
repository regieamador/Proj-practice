

export default function QuizStart(props){
    return (
        <div className="quizStart">
            <h1>Quizzz Bee</h1>
            <p>Are You Smarter Than Grade 2?</p>
            <p>Let's Test Your Knowledge</p>
            <button onClick={props.startGame}>Start Quiz</button>
        </div>
    )
}