import React from 'react';
import Questions from './Questions';
import Countdown from './Countdown'

function gamePage(data) {
    const monies = data.money;
    return (
        <div className ="main-page">
            <div className="question-page">
                <Countdown/>
                <Questions data = {data}/>
            </div>
            <div className= "question-amount">
                <div className="amount-align">
                <ul className= "amount-list">
                    {monies.map(money => 
                  <li>
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

export default gamePage

