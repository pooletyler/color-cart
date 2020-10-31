const updateSelectedColors = (
  hex: string,
  selectedColors: string[],
  removeItemFromArray: (item: any, array: any[]) => any[],
  setSelectedColors: (newSelectedColors: string[]) => void
) => {
  let newSelectedColors = [...selectedColors];

  if (newSelectedColors.includes(hex)) {
    newSelectedColors = removeItemFromArray(hex, selectedColors);
  } else {
    newSelectedColors.push(hex);
  }

  setSelectedColors(newSelectedColors);
};

export default updateSelectedColors;
