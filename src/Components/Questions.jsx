import React from 'react'

function Questions(data) {
    const mainData = data.data.data[0];
    return (
        <div>
          <div className="question-section">{mainData.question}</div>
          <div className="answer-align">
          {mainData.answers.map(answer =>
             <div className= "answer-section">{answer.option}</div>
          )}
          </div>
          
        </div>
    )
}

export default Questions
