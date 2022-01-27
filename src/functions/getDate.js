const getDate = () => {
  const current = new Date();

  const date = {
    date: current.getDate(),
    month: current.getMonth() + 1,
    year: current.getFullYear(),
  };

  return date;
};

export default getDate;
