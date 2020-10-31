const removeItemFromArray = (item: any, array: any[]) => {
  const newArray = [...array];

  const index = newArray.indexOf(item);
  if (index > -1) {
    newArray.splice(index, 1);
  }

  return newArray;
};

export default removeItemFromArray;
