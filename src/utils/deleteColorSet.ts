const deleteColorSet = (
  index: number,
  savedColorSets: { name: string; colors: string[] }[],
  setCookie: (name: string, value: string, daysValid: number) => void,
  setSavedColorSets: (
    newSavedColorSets: { name: string; colors: string[] }[]
  ) => void
) => {
  const newSavedColorSets = [...savedColorSets];

  newSavedColorSets.splice(index, 1);

  setCookie('savedColorSets', JSON.stringify(newSavedColorSets), 10);
  setSavedColorSets(newSavedColorSets);
};

export default deleteColorSet;
