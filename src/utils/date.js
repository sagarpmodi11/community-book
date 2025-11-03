const formatDate = (dt) => {
  if (!dt) return date;
  if (dt.includes("-")) {
    let [year, month, day] = dt.split("-");
    return `${day}-${month}-${year}`;
  } else {
    return dt;
  }
};

const formatDatewithSlashes = (dt) => {
  if (!dt) return date;
  if (dt.includes("-")) {
    let [day, month, year] = dt.split("-");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  } else {
    return dt;
  }
};

export { formatDate, formatDatewithSlashes };
