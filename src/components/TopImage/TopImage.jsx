import React from 'react';
import './TopImage.scss';



function TopImage({member, cont, totalFacts, setCont}) {

  function showFact(totalFacts, cont, setCont) {
    if(cont < totalFacts) {
        setCont(cont + 1);
    }  
  }

  return (   
    <div className="row justify-content-center">
      <div className="top-img-container__wrapper">
        <img onClick={() => showFact(totalFacts, cont, setCont) } className="top-img-container__img" src={member.imgUrl} alt={member.name}/>
        {cont === 0 && <p className="top-img-container__click-me">Click me!</p>}    
      </div>
    </div>
  );
}

export default TopImage;
