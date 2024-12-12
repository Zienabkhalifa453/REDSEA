export const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long'
  });
};

export const getYearFromDate = (date: string): number => {
  return new Date(date).getFullYear();
};