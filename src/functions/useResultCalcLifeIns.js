import { useState, useEffect } from 'react';

const useUserData = () => {
  const [resultCalcLifeIns, setResultCalcLifeIns] = useState({});

  useEffect(() => {
    const getDataServer = async () => {
      const resultCalcLifeIns_FromServer = await fetchResultCalcLifeIns();
      setResultCalcLifeIns(resultCalcLifeIns_FromServer);
    };

    getDataServer();
  }, []);

  // Fetch;
  const fetchResultCalcLifeIns = async () => {
    const res = await fetch('http://localhost:5000/resultCalcLifeIns');
    const data = await res.json();
    return data;
  };

  return { resultCalcLifeIns, setResultCalcLifeIns };
};

export default useUserData;
