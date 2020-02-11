import React from 'react';
import SolarSystemContainer from '../../components/SolarSystemContainer/SolarSystemContainer';
import { Link } from 'react-router-dom';
import './HomePage.scss';
import Title from '../../components/shared/Title/Title';
import InfoChart from '../../components/shared/InfoChart/InfoChart';

function HomePage() {
  
  return (
    <div className="home-container">
      <Title> Our Solar System
          <span>
              <img className="home-container__title-img" alt="Solar System" src="https://static.thenounproject.com/png/2922433-84.png"/>
          </span>
      </Title>

      <InfoChart className="home-container__info-chart">
        Hey! Pick any member of the solar system and learn something cool about it!
      </InfoChart>
      <SolarSystemContainer />

      <Link className="test-me-button btn home-container__float-btn primary-button" to="test-me"> Test me up! </Link>
    </div> 
  );
}

export default HomePage;
