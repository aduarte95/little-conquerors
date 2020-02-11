import React, {useState} from 'react';
import './InfoChart.scss';
import { CSSTransition } from 'react-transition-group';


function InfoChart({children, className}) {
  const [showInfoChart, setShowInfoChart] = useState(true);
  
  return (
    <div> { 
    <CSSTransition in={showInfoChart}
    timeout={10000}
    classNames="info-chart"
    unmountOnExit
    appear
    exit
    onEnter={()=> setTimeout(() => {
      setShowInfoChart(false);
    }, 9000)}>
      <div className={"info-chart-container glowing-box " + className}>
          <p className="info-chart-container__text">
              {children}
          </p>
      </div>
    </CSSTransition>
  }</div>
  );
}

export default InfoChart;
