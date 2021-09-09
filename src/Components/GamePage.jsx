import {useState, useEffect} from 'react';
import Questions from './Questions';
import Countdown from './Countdown'

function GamePage(data) {
    const monies = data.money;
    const [gameStop, setGameStop] = useState(false);
    const [questionNumber, setQuestionNumber] = useState(1);
    const [won, setWon] = useState("$ 0");
    const [stopClock, setStopClock] = useState(30);
    
    useEffect(() => {
       questionNumber > 1 && setWon(monies.find(q => q.id === questionNumber - 1).amount);
    }, [questionNumber, monies])
    
    return (
        <div className ="main-page">
            <div className="question-page">
            {gameStop? (
                 <h1>you won {won}</h1>
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

