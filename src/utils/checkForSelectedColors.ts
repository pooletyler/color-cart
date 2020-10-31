const checkForSelectedColors = (
  getCookie: (name: string) => string,
  setSelectedColors: (selectedColors: string[]) => void
) => {
  const inCart = getCookie('inCart');

  if (inCart) {
    setSelectedColors(JSON.parse(inCart));
  }
};

export default checkForSelectedColors;
