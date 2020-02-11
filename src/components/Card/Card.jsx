import React, { useRef, useEffect } from 'react';
import './Card.scss';
import star from '../../assets/images/giphy.gif';

function showFact(totalFacts, cont, setCont) {
  if(cont < totalFacts) {
      setCont(cont + 1);
  }  
}

function Card({facts, cont, totalFacts, setCont}) {
  const div = useRef();

  useEffect(() => div.current && div.current.scrollIntoView({ behavior: "smooth" }));


  return (   
    <div className="fact-card-container container-fluid py-3">
      <div  className="d-flex justify-content-center flex-wrap">
      { facts && facts.map( (fact, i) => {
         return  cont > i && <div key={`fact-card-${i}`} className="fact-card-container__row glowing-box">
                    
                        <div className="d-flex justify-content-center">
                            <p className="fact-card-container__text" key={`fact-${i}`}>{fact.fact}</p>
                        </div>
                </div>
          })
        }
        <div ref={div} className="fact-card-container__clickable-star d-flex align-items-center justify-content-center ">
        
        {cont > 0 && 
        <div className="fact-card-container__wrapper">
          <img onClick={() => showFact(totalFacts, cont, setCont) } className="fact-card-container__img-star" src={star} alt="star"/>
          {(cont === 1 && totalFacts !== 1) && <p className="fact-card-container__click-me">Click me to see next fact!</p>}    
        </div>}

          <p className="fact-card-container__clickable-text">{cont} / {totalFacts}</p>
        </div>
      </div>  
    </div>
  );
}

export default Card;
