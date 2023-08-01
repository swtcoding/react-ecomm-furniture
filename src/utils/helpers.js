export const formatPrice = (number) => {
  const newNum = Intl.NumberFormat("en-UK", {
    style: "currency",
    currency: "GBP",
  }).format(number / 100);
  return newNum;
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  if (type === "colors") {
    unique = unique.flat();
  }
  return ["all", ...new Set(unique)];
};
