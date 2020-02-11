import React, { useState, useEffect } from 'react';
import './QuizForm.scss';
import ssQuizData from '../../data/ssQuiz.json'

const scoreTexts =[
  "Congratulations! You got a perfect score",
  "Hey, good job!",
  "Hey! Don't be sad, you can try again "
]

function QuizForm() {
  const [ssQuiz, setSsQuiz] = useState([]);
  const [selectedAnwers, setSelectedAnswers] = useState({});
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [scoreText, setScoreText] = useState(scoreTexts[2]);

  function getScore(e) {
    e.preventDefault();
    var score = 0;
    var totalNumQuestions = ssQuiz.length;

    if(ssQuiz) {
      
      for(let i = 0; i < totalNumQuestions; ++i) {
        if(ssQuiz[i].correctAnswer === Number(selectedAnwers[i])) {
          score++;
        }
      }
    }

    setScore((score/totalNumQuestions)*100);
    setShowScore(true);
    
  }

  function setAnswers(e) {
    e.persist();
    const key = e.target.name;
    var question = key.split("-");
    const id = e.target.id;
    var answer = id.split("-");
    
    setSelectedAnswers( oldObject => ({...oldObject[0], [question[1]]: answer[1]}))
  }

  function resetQuiz() {
    setSelectedAnswers({});
    setShowScore(false);
    setScore(0);
    setScoreText(scoreTexts[2]);
  }
  
  useEffect(() => {
    setSsQuiz(ssQuizData);
    
    if(score <= 65) {
      setScoreText(scoreTexts[2])
    } else if(score === 100) {
      setScoreText(scoreTexts[1])
    } else {
      setScoreText(scoreTexts[0])
    }
    
   
  }, [ssQuiz, score]);

  

  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center">
        { !showScore &&
         <div className="d-flex align-items-center">
            <img className="quiz-container__decorator-img" src="
              https://spaceplace.nasa.gov/review/planets/planets-13.sp.png" alt="Friendly Jupiter"></img>
            <form className="quiz-container margin-bottom glowing-box">
              { ssQuiz.map( (question, i) => {
                return    <div key={`question-${i}`} className="form-check margin-bottom">
                            <label className="quiz-container__label margin-bottom"> {question.label} </label>
                            { 
                              question.answers.map( (a,j) => {   

                                return  <div key={`answer-${j}`} className="margin-bottom-1"> 
                                          <div className="custom-control custom-radio">
                                              <input type="radio" onChange={(e) => setAnswers(e)} id={`customRadio-${a.id}`} name={`customRadio-${i}`} className="custom-control-input"/>
                                              <label className="custom-control-label" htmlFor={`customRadio-${a.id}`}>{a.answer}</label>
                                            </div>
                                        </div>
                              })
                              
                            }
                          </div>})
              }
              <div className="d-flex justify-content-center quiz-container__submit-btn">
                <button type="submit" className="btn primary-button" onClick={(e) => getScore(e)}>Submit</button>
              </div>
            </form> 
        </div> }
        { showScore &&
          <div className="score-container d-flex flex-column justify-content-center glowing-box">
            <h2 className="score-container__text margin-bottom-1">{scoreText}</h2>
            <p className="score-container__score margin-bottom"> {score} </p>
            { score <= 65 &&
              <button className="align-self-center btn score-container__button primary-button" type="button" onClick={() => resetQuiz()}>
                Try Again
              </button>
            }      
          </div>

        }
      </div>
    </div>
  );
}

export default QuizForm;
