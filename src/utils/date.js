const formatDate = (dt) => {
  if (!dt) return date;
  if (dt.includes("-")) {
    let [year, month, day] = dt.split("-");
    return `${day}-${month}-${year}`;
  } else {
    return dt;
  }
};

export { formatDate };
