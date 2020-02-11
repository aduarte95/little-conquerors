import React from 'react';
import './InfoChart.scss';
import { CSSTransition } from 'react-transition-group';


function InfoChart({children, className}) {
  
  return (
    <CSSTransition in={true}
    timeout={10000}
    classNames="info-chart"
    unmountOnExit
    appear>
      <div className={"info-chart-container glowing-box " + className}>
          <p className="info-chart-container__text">
              {children}
          </p>
      </div>
    </CSSTransition>
  );
}

export default InfoChart;
