import { useState, useEffect } from "react";
import "./index.css";
import logo from './images/logo-mint.png';



const Quiz = ({questions}) => {
    const[currentQuestion, setCurrentQuestion] = useState(0);
    const {question, choices} = questions[currentQuestion];
    const [answerIdx, setAnswerIdx] = useState(null); /* answerIndx = index of the choice selected */
    const [answer, setAnswer] = useState(null);
    const [quizStarted, setQuizStarted] = useState(false);

    const onAnswerClick = (answer, index) => {
        setAnswerIdx(index);
        if (answer === "Yes") {
            setAnswer(true);

        }else{
            setAnswer(false);
    }
}
    const onStartQuiz = () => {
        setQuizStarted(true);
        setAnswerIdx(null); 
    };
    

    
    useEffect(() => {
        document.title = "Salesforce or Tableau?"
    }, []);

    return  (
        <div>
        {/* <h1>Salesforce or Tableau?</h1> */}
        <div className = "quiz-container" >
            <img src = {logo} alt= "Logo" className="Logo"/>
            {quizStarted ? (
        <>

        <span className = "active-question-no">{currentQuestion + 1}</span>
        <span className = "total-question">/{questions.length}</span>
        <h2>{question} </h2>
        <ul style = {{ marginTop: 20, padding: 0, listStyleType: 'none'}}>
            { 
                choices.map((answer, index) => (
                    <li
                        onClick={() => onAnswerClick(answer, index)}
                        key = {answer}
                        className = {answerIdx === index ? "selected-answer" : null}
                        
                    >
                        {answer}                  
                     </li>
                    
                     
                ))}
        </ul>
        <div className = "footer">
           
            <button
                 onClick={() => {
                    if (currentQuestion === questions.length - 1) {
                    // Handle finishing the quiz
                    } else {
                        setCurrentQuestion(currentQuestion + 1);
                        setAnswerIdx(null);
                    }
                    }}
                        disabled={answerIdx === null}
                    >
            {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
            </button>
        </div>
        </>
        ):(
            <div className="landing-page">
                    <h1>Welcome to the Salesforce vs Tableau Survey!</h1>
                    <p>Take this survey to decide if you should create a Salesforce Report or Tableau Dashboard. </p>
                    <p>Click the "Start" button to begin.</p>
                    <button onClick = {onStartQuiz}>Start</button>
                </div>

            )}
         
    </div>
   
    </div>
    );
    
};

export default Quiz; 