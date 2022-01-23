export const classNames = (classNames) => {
  const removeUndefined = classNames.filter((n) => n);
  const joinClassNames = removeUndefined.join(" ");
  return joinClassNames;
};
