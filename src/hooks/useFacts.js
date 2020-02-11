import { useState , useEffect } from "react";

export const useFacts = (member) => {
    const [totalFacts, setTotalFacts] = useState(0);
    const [cont, setCont] = useState(0);

    useEffect( () => {
      if(member) {
          setTotalFacts(member.facts.length);
      }
  }, [member]);

  return {
    totalFacts,
    cont,
    setCont
  }
  };