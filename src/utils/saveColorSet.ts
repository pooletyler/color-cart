const saveColorSet = (
  inputValue: string,
  selectedColors: string[],
  savedColorSets: { name: string; colors: string[] }[],
  setCookie: (name: string, value: string, daysValid: number) => void,
  setSavedColorSets: (
    newSavedColorSets: { name: string; colors: string[] }[]
  ) => void,
  setSelectedColors: (newSelectedColors: string[]) => void,
  setInputValue: (newInputValue: string) => void
) => {
  const newColorSet = {
    name: inputValue,
    colors: selectedColors,
  };
  const newSavedColorSets = [...savedColorSets];

  newSavedColorSets.push(newColorSet);

  setCookie('savedColorSets', JSON.stringify(newSavedColorSets), 10);
  setSavedColorSets(newSavedColorSets);
  setSelectedColors([]);
  setInputValue('');
};

export default saveColorSet;
