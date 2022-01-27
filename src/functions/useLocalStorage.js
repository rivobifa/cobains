import { useState, useEffect } from 'react';

const useLocalStorage = () => {
  const [firstVisit, setFirstVisit] = useState(false);

  useEffect(() => {
    const getFirstVisit = () => {
      if (!window.localStorage) {
        // no localStorage (old browser) - either fall back to cookie method,
        // or just do nothing and skip the whole tour thing - if the user
        // can't be bothered to upgrade, why should you bother to accomodate them?
      } else {
        if (!window.localStorage.isReturningVisitor) {
          setFirstVisit(true);
          window.localStorage.isReturningVisitor = true;
        }
      }
    };

    getFirstVisit();
  }, []);

  localStorage.clear();

  return firstVisit;
};

export default useLocalStorage;
