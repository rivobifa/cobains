import { useState, useEffect } from 'react';

const useDataLifeIns = () => {
  const [dataLifeIns, setDataLifeIns] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:5000/dataLifeIns');
      const data = await res.json();

      return setDataLifeIns(data);
    };

    fetchData();
  }, []);

  return {dataLifeIns};
};

export default useDataLifeIns;
