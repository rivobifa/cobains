import { useState, useEffect } from 'react';

const useUserData = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const getDataServer = async () => {
      const userData_FromServer = await fetchUserData();
      setUserData(userData_FromServer);
    };

    getDataServer();
  }, []);

  // Fetch;
  const fetchUserData = async () => {
    const res = await fetch('http://localhost:5000/userData');
    const data = await res.json();
    return data;
  };

  return { userData, setUserData };
};

export default useUserData;
