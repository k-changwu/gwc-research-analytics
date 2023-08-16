import { useState, useEffect } from "react";
import "./index.css";
import logo from './images/logo-mint.png';
import { resultInitialState } from "./constants";
import { jsQuiz} from "./constants";
import { pointBasedQuestions } from "./constants";



const Quiz = ({questions}) => {
    const[currentQuestion, setCurrentQuestion] = useState(0);
    const {question, choices, leadsToResult, nextQuestionYes, nextQuestionNo} = questions[currentQuestion];
    const [answerIdx, setAnswerIdx] = useState(null); /* answerIndx = index of the choice selected */
    
    const [quizStarted, setQuizStarted] = useState(false);
    const  [result, setResult] = useState(null);
    const [showResult, setShowResult] = useState(false);

    const [isPointQuizStarted, setPointQuizStarted] = useState(false);
    const [pointQuizResult, setPointQuizResult] = useState(null);
    const [pointQuizQuestion, setPointQuizQuestion] = useState(0);
    const [resultPoints, setResultPoints] = useState({tableau: 0, salesforce: 0});

    const [tableauTotalPoints, setTableauPoints] = useState(0);
    const [salesforceTotalPoints, setSalesforcePoints] = useState(0);

    

    const initialResultPoints = {
        salesforce: 0,
        tableau: 0,
    }
 
    const onAnswerClick = (index) => {
        setAnswerIdx(index);
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
        setPointQuizStarted(false);
    }

    const onTryAgain = () => {
        setResult(resultInitialState);
        setShowResult(false);
        setCurrentQuestion(0);
        setAnswerIdx(null);
        setResultPoints({tableau: 0, salesforce: 0});
        setPointQuizStarted(false);
        setPointQuizResult(null);
    }
    
    
    const onClickNext = () => {
        const selectedChoice = choices[answerIdx];
    
        if (selectedChoice === "Yes") {
            if (leadsToResult) {
                setShowResult(true);
                setResult(leadsToResult);
            } else {
                setCurrentQuestion(nextQuestionYes);
            }
   
        } else if (selectedChoice === "No") {
            if (nextQuestionNo !== undefined) {
                setCurrentQuestion(nextQuestionNo);
            } else {
                if (currentQuestion === questions.length - 1) {
                    setPointQuizStarted(true);
                    setPointQuizResult(null);
                    setPointQuizQuestion(0);
                } else {
    
                    setShowResult(true);
                    setResult(leadsToResult);
                    
                }
            }
        }
        setAnswerIdx(null);
    }

    const onClickNextPointQuiz = () => {
        
        const selectedChoice = pointBasedQuestions.questions[pointQuizQuestion].choices[answerIdx];

        if (selectedChoice.result === "tableau") {
            setTableauPoints(tableauTotalPoints + 1);
        }else if (selectedChoice.result === "salesforce") {
            setSalesforcePoints(salesforceTotalPoints + 1);
        }

    
        if (pointQuizQuestion === pointBasedQuestions.questions.length - 1) {
            if (tableauTotalPoints > salesforceTotalPoints) {
                setResult("tableau");
            }else if (tableauTotalPoints < salesforceTotalPoints) {
                setResult("salesforce");
            }
            setShowResult(true);
            
        }
        setPointQuizQuestion(pointQuizQuestion + 1);
    
        setAnswerIdx(null);
    }
    



    return  (
        <div>
       
        <div className="quiz-container" >
        
        <img src = {logo} alt= "Logo" className="Logo"/>
            {quizStarted ? (
            !showResult ? (          
                isPointQuizStarted ? (
                // render scoring questions
                <div className="point-quiz">
                  <h2>{pointBasedQuestions.questions[pointQuizQuestion].question}</h2>
                  <ul style={{ marginTop: 20, padding: 0, listStyleType: 'none' }}>
                    {pointBasedQuestions.questions[pointQuizQuestion].choices.map((choice, index) => (
                      <li
                        onClick={() => onAnswerClick(index)}
                        key={choice.text}
                        className={answerIdx === index ? 'selected-answer' : null}
                      >
                        {choice.text}
                      </li>
                    ))}
                  </ul>
                  <div className="footer">
                    {/* {pointQuizQuestion !== 0 && (
                      <button className="back-button" onClick={onClickBackPoints}>
                        Back
                      </button>
                    )} */}
    
                    <button onClick={onClickNextPointQuiz} disabled={answerIdx === null}>
                      {pointQuizQuestion === pointBasedQuestions.questions.length - 1 ? 'Finish' : 'Next'}
                    </button>
                  </div>
                </div>
              ) : (
                // render regular questions
                <>
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
                    Next
                    </button>
                    
                </div>
                </>
              )
                ) : ( 
                <div className = "result">
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
                )
        
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
    )
    
}

export default Quiz; 

      