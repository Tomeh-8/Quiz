import {useState, useEffect} from 'react';
import useSound from "use-sound";
import rightAnswer from "../audio/cheta.mp3";
import wrongAnswer from "../audio/wrongAnswer.wav";

function Questions(data) {
  console.log(data);
    const mainData = data.data.data;
    const setQuestionNumber = data.setQuestionNumber;
    const questionNumber = data.questionNumber;
    const setGameStop = data.setGameStop;
    const setStopClock = data.setStopClock;
    const [className, setClassName] =  useState("answer-section");
    const [chosenAnswer, setChosenAnswer] = useState(null);
    const [stage, setStage] = useState(null);
    const [incorrect] = useSound(wrongAnswer);
    const [correct] = useSound(rightAnswer);
  
    useEffect(() => {
        setStage(mainData[questionNumber - 1]);
    }, [mainData,questionNumber])

    const handleClick = (answer) => {

      setChosenAnswer(answer);
      setClassName("answer-section active");
      setTimeout(() => {
      setClassName(answer.correct? "answer-section correct" : "answer-section wrong");
      }, 1000);

      setTimeout(() => {
        if (answer.correct) {
          correct();
          setQuestionNumber(questionNumber + 1);
          console.log("correct");
          setChosenAnswer(null);
        }else{
          incorrect();
          setGameStop(true);
           console.log("fail")
        }
      },5000)

    }

    return (
        <div>
          <div className="question-section">{stage?.question}</div>
          <div className="answer-align">
          {stage?.answers.map(answer =>
             <div className= {chosenAnswer === answer? className:"answer-section"} onClick = {() => handleClick(answer)}>{answer.option}</div>
          )}
          </div>
          
        </div>
    )
}

export default Questions
