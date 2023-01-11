const formatDate = (date: Date): string => {
  return `${date.toLocaleDateString().split('/').join('.')} ${date.toLocaleTimeString()}`;
};

export default formatDate;
