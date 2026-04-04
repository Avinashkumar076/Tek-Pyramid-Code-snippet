let stockPrices = [7, 1, 5, 3, 6, 4];

let maxProfit = function (stockPrices) {
  let minPrice = stockPrices[0]; // assume first price is the minimum initially
  let maxProfit = 0; // no profit at the beginning

  for (let i = 1; i < stockPrices.length; i++) {
    // Step 1: Calculate profit if we sell today
    let currentProfit = stockPrices[i] - minPrice;

    // Step 2: Update maxProfit if current profit is higher
    if (currentProfit > maxProfit) {
      maxProfit = currentProfit; // maxProfit is updated here
    }

    // Step 3: Update minPrice if current price is lower
    if (stockPrices[i] < minPrice) {
      minPrice = stockPrices[i]; // minPrice is updated here
    }
  }

  return maxProfit;
};

console.log(maxProfit(stockPrices));

/* Step-by-step dry run (tracking updates)

Input: [7, 1, 5, 3, 6, 4]

i   Price   minPrice   currentProfit   maxProfit   What happened
0   7       7          —               0           initial
1   1       1          1-7 = -6        0           minPrice updated
2   5       1          5-1 = 4         4           maxProfit updated
3   3       1          3-1 = 2         4           no change
4   6       1          6-1 = 5         5           maxProfit updated
5   4       1          4-1 = 3         5           no change

Where things are updating

minPrice updates here:
if (stockPrices[i] < minPrice) {
minPrice = stockPrices[i];
}

happens at:
i = 1 (price = 1)

maxProfit updates here:
if (currentProfit > maxProfit) {
maxProfit = currentProfit;
}

happens at:
i = 2 → profit = 4
i = 4 → profit = 5 (final best)

Final Output
5 */