const Result = ({ userAnswers, questions, resetQuiz = () => {} }) => {
  const correctAnswers = userAnswers.filter((answer) => answer).length;

  return (
    <div className="results">
      <h2>Results</h2>
      <p>
        You answered {correctAnswers} out of {questions.length} question(s).
      </p>
      <button onClick={resetQuiz}>Click here to retry</button>
      <ul>
        {questions.map((question, index) => {
          const isCorrect = userAnswers[index] === question.correctAnswerIndex;

          return (
            <li key={index} data-correct={userAnswers[index]}>
              Q{index + 1}. {question.question}
              <br />
              Correct Answer:{" "}
              {question.answerOptions &&
              question.answerOptions[question.correctAnswerIndex]
                ? question.answerOptions[question.correctAnswerIndex].text
                : "Not available"}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Result;
