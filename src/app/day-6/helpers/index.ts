export const checkPair = (
  activeEl: string[],
  listOfCapitals: string[],
  listOfCountries: string[]
) => {
  const isCountry = listOfCountries.findIndex((e: string) => e === activeEl[0]);

  if (isCountry !== -1) {
    return (
      listOfCapitals[isCountry].toLowerCase() === activeEl[1].toLowerCase()
    );
  } else {
    const isCapital = listOfCapitals.findIndex(
      (e: string) => e === activeEl[0]
    );
    return (
      listOfCountries[isCapital].toLowerCase() === activeEl[1].toLowerCase()
    );
  }
};

export const shuffle = (array: string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
