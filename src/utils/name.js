const formatName = (fullName) => {
  if (!fullName) return "";
  const names = fullName.split(" ");
  const nameCount = names.length;
  const firstName = names[0];
  const middleName = nameCount == 3 ? names[1] : "";
  const lastName = names[names.length - 1];
  return { firstName, middleName, lastName };
};

export { formatName };
