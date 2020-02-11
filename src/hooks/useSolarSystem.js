import { useState , useEffect } from "react";
import solarSystemData from '../data/solarSystem'

export const useSolarSystem = () => {
    const [solarSystem, setSolarSystem] = useState([]);
    
    useEffect(() => {
        setSolarSystem(solarSystemData);    
      }, []);

    const getMember = (id) => {
      return solarSystem.find(member => member.id === Number(id) );
    };

  return {
    solarSystem, 
    getMember
  }
  };