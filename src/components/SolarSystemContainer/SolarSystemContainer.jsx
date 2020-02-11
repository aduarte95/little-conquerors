import React from 'react';
import './SolarSystemContainer.scss';
import {Link} from 'react-router-dom';
import { useSolarSystem } from '../../hooks/useSolarSystem';

function SolarSystemContainer() {
    const { solarSystem } = useSolarSystem();
    
  return (   
            <div>
                <div className="ss-container d-flex">
                    {solarSystem.map( (member, i) => {
                            return  <div className={"ss-container__" + member.name + " d-flex align-items-center"} key={`member-${i}`}>
                                        <Link to={`/solar-system-member/${member.id}`}>
                                            {
                                                member.name !== 'sun' &&
                                                <img className="ss-container__inner-img ss-container__planet" alt={member.name} src={member.imgUrl}/>
                                            }
                                            {
                                                member.name === 'sun' &&
                                                <img className="ss-container__inner-img ss-container__member-sun" alt={member.name} src={member.imgUrl}/>
                                            }
                                
                                        </Link>
                                    </div>
                                    
                        }
                    )}
                </div>
            </div>
  );
}

export default SolarSystemContainer;
