import "./App.css";
import Questions from "./components/Questions";
import Result from "./components/Result";
import questions from "./constants/questions.json";
import { useState } from "react";

const formattedQuestions = questions.map((question) => ({
  ...question,
  correctAnswerIndex: question.answerOptions.findIndex((opt) => opt.isCorrect),
}));

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const handleNextQuestion = (isCorrect) => {
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswers([...userAnswers, isCorrect]);
  };
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
  };

  return (
    <div className="App">
      <h1>Quiz App</h1>
      {currentQuestion < formattedQuestions.length && (
        <Questions
          question={formattedQuestions[currentQuestion]}
          onAnswerClick={handleNextQuestion}
        />
      )}
      {currentQuestion === formattedQuestions.length && (
        <Result
          userAnswers={userAnswers}
          questions={formattedQuestions}
          resetQuiz={resetQuiz}
        />
      )}
    </div>
  );
}

export default App;
