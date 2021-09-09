import {useState, useEffect} from 'react';
import useSound from "use-sound";
import startGame from "../audio/startGame.wav";
import Questions from './Questions';
import Countdown from './Countdown';

function GamePage(data) {
    const monies = data.money;
    const [gameStop, setGameStop] = useState(false);
    const [questionNumber, setQuestionNumber] = useState(1);
    const [won, setWon] = useState("$ 0");
    const [stopClock, setStopClock] = useState(30);
    const [playGame] = useSound(startGame);
    

    
    useEffect(() => {
       questionNumber > 1 && setWon(monies.find(q => q.id === questionNumber - 1).amount);
    }, [questionNumber, monies])
    
    return (
        <div className ="main-page">
            <div className="question-page">
            {gameStop? (
                 <div className = "notification">you won {won}</div>
            ): (
                <>               
                <Countdown setGameStop = {setGameStop} questionNumber={questionNumber} setStopClock = {setStopClock} stopClock = {stopClock}/>
                <Questions data = {data} setGameStop = {setGameStop} questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} setStopClock = {setStopClock} />
                </>
            )}
            </div>
            
            <div className= "question-amount">
                <div className="amount-align">
                <ul className= "amount-list">
                    {monies.map(money => 
                  <li className = {questionNumber === money.id? "amount-list active": "amount-list"}>
                  <span>{money.id}</span>
                  <span>{money.amount}</span>
                 </li>
                    )}                  
                </ul>
                </div>
            </div>
            
            
        </div>
    )
}

export default GamePage

