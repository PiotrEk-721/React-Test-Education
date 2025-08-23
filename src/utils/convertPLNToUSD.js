export const convertPLNToUSD = (PLN) => {
  if (PLN === null || typeof PLN === "function" || typeof PLN === "object") {
    return "Error";
  }

  if (typeof PLN === "string") {
    return NaN;
  }

  if (!Number.isFinite(PLN)) return NaN;

  if (PLN < 0) PLN = 0;

  const PLNtoUSD = PLN / 3.5;

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return formatter.format(PLNtoUSD).replace(/\u00a0/g, " ");
};
