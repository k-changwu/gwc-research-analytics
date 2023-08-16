import { useState, useEffect } from "react";
import "./index.css";
import logo from './images/logo-mint.png';
import { resultInitialState } from "./constants";
import { jsQuiz} from "./constants";



const Quiz = ({questions}) => {
    const[currentQuestion, setCurrentQuestion] = useState(0);
    const {question, choices, leadsToResult, nextQuestionYes, nextQuestionNo} = questions[currentQuestion];
    const [answerIdx, setAnswerIdx] = useState(null); /* answerIndx = index of the choice selected */
    //const [answer, setAnswer] = useState(null);
    const [quizStarted, setQuizStarted] = useState(false);
    const  [result, setResult] = useState(null);
    const [showResult, setShowResult] = useState(false);
 
    const onAnswerClick = (index) => {
        setAnswerIdx(index);
    }
    const onClickNext = () => {
        const selectedChoice = choices[answerIdx];
        if(selectedChoice === "Yes") {
            if (leadsToResult) {
                setShowResult(true);
                setResult(leadsToResult);
            }else{
                setCurrentQuestion(nextQuestionYes);
            }
        } else if (selectedChoice === "No"){
            if (nextQuestionNo !== undefined) {
                setCurrentQuestion(nextQuestionNo);
            }else {
                setShowResult(true);
                setResult(leadsToResult);
            }
        }
        setAnswerIdx(null);
       


    }
    const onClickBack = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion -  1);
        }
        setAnswerIdx(null);
       
    }
    const onStartQuiz = () => {
        setQuizStarted(true);
        setAnswerIdx(null); 
        setShowResult(false);
        setResult(null);
        setCurrentQuestion(0);
    };

    const onTryAgain = () => {
        setResult(resultInitialState);
        setShowResult(false);
        setCurrentQuestion(0);
        setAnswerIdx(null);
    }
    



    return  (
        <div>
       
        <div className = "quiz-container" >
        
        <img src = {logo} alt= "Logo" className="Logo"/>
            {quizStarted ? (
            !showResult ? (
                <>
                {/* <span className = "active-question-no">{currentQuestion + 1}</span>
                <span className = "total-question">/{questions.length}</span> */}
                <h2>{question} </h2>
                <ul style = {{ marginTop: 20, padding: 0, listStyleType: 'none'}}>
                    { 
                        choices.map((answer, index) => (
                            <li
                                onClick={() => onAnswerClick(index)}
                                key = {answer}
                                className = {answerIdx === index ? "selected-answer" : null}   
                            >
                                {answer}                  
                             </li> 
                        ))}
                </ul>
                <div className = "footer">
                  {currentQuestion !== 0 && (
                   <button className = "back-button" onClick ={onClickBack}>
                    Back

                    </button>
                    )}

                    <button
                        onClick={onClickNext} 
                 
                                disabled={answerIdx === null}
                            >
                    {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
                    </button>
                    
                </div>
                </>
                ) : <div className = "result">
                    <h3>Result</h3>
                    {result === 'salesforce' ? (
                        <div>
                    <p className = "result-heading" > Salesforce</p> 
                    <p> Based on your responses, you should create a Salesforce Report!</p>
                    </div>
                    
                    ) : (
                    <div>
                     <p className = "result-heading">Tableau</p> 
                    <p>Based on your responses, you should create a Tableau Dashboard!</p>
                    </div>
                    )
                    }
                    <button onClick = {onTryAgain}>
                        Start Again
                    </button>

                </div>
        
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

       //{() => {
                        //     if (currentQuestion === questions.length - 1) {
                        //     // Handle finishing the quiz
                        //     setShowResult(true);
                        //     setCurrentQuestion(0);
                        //     <div className = "results-page">
                        //         <h1>Your result is: Salesforce!</h1>
                        //         <p>Based on your responses, you should create a Salesforce report!</p>
                        //     </div>
                        //     } else {
                        //         setCurrentQuestion(currentQuestion + 1);
                        //         setAnswerIdx(null);
                        //     }
                        //     }}