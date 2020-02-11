import React from 'react';
import './TestMe.scss';
import QuizForm from '../QuizForm/QuizForm';
import Title from '../shared/Title/Title';

function TestMe({match}) {
  
  return (  
      <div className="test-me-container">
        <Title> Let's see <div>how much you learn!</div></Title>
        <QuizForm props={match}/>
      </div>
  );
}

export default TestMe;
