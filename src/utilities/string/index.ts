/**
 *splits camelcase string by space
 */
export const getDisplayTextFromCamelCase = (input: string) => {
  if (!input) return "";
  const result = input.replace(/([A-Z])/g, " $1");

  return result.split(" ").reduce((previousValue, currentValue, ind) => {
    if (ind === 0)
      return `${previousValue}${currentValue
        .charAt(0)
        .toUpperCase()}${currentValue.slice(1)}`;
    else if (currentValue.length === 1)
      return `${previousValue}${currentValue}`;
    else return `${previousValue} ${currentValue}`;
  }, "");
};
