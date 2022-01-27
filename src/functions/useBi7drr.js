import { useState, useEffect } from 'react';

const useBi7drr = () => {
  const [bi7drr, setBi7drr] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:5000/bi7drr');
      const data = await res.json();

      return setBi7drr(data);
    };

    fetchData();
  }, []);

  return { bi7drr };
};

export default useBi7drr;
