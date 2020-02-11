import React from 'react';
import './TestMePage.scss';
import QuizForm from '../../components/QuizForm/QuizForm';
import Title from '../../components/shared/Title/Title';

function TestMePage({match}) {
  
  return (  
      <div className="test-me-container">
        <Title> Let's see <div>how much did you learn!</div></Title>
        <QuizForm props={match}/>
      </div>
  );
}

export default TestMePage;
