export const getCommaSeparator = (value) => {
  return value.toLocaleString(undefined, { maximumFractionDigits: 2 });
};

export const removeCommaSeparator = (value) => {
  return parseFloat(value.replace(/,/g, ''));
};
