import { useState } from "react";

const Quiz = ({questions}) => {
    const[currentQuestion, setCurrentQuestion] = useState(0);
    const {question, choices} = questions[currentQuestion];
    const [answerIdx, setAnswerIdx] = useState(null);
    const [answer, setAnswer] = useState(null);

    const onAnswerClick = (answer, index) => {
        setAnswerIdx(index);
        if (answer == "Yes") {
            setAnswer(true);

        }else{
            setAnswer(false);
    }


    }

    return  <div className = "quiz-container">
        <>
        <span className = "active-question-no">{currentQuestion + 1}</span>
        <span className = "total-question">/{questions.length}</span>
        <h2>{question} </h2>
        <ul>
            {
                choices.map((answer, index) => (
                    <li
                        onClick={() => onAnswerClick(answer, index)}
                        key = {answer}
                        className = {answerIdx == index ? "selected-answer" : null}
                        
                    >
                        {answer}                   
                     </li>
                    
                     
                ))
            }
        </ul>
        </>    
    </div>;
    
};

export default Quiz; 