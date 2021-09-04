export const solution = (amount, costsArray) => {
  if (amount === 0) {
    return '';
  }

  const costs = costsArray
    .map((cost, idx) => ({ cost, idx: idx + 1 }))
    .filter(({ cost }) => cost > 0 && cost <= amount)
    .sort((a, b) => {
      if (a.cost === b.cost) {
        // largest index first
        return b.idx - a.idx;
      }
      // lowest cost first
      return a.cost - b.cost;
    });

  if (costs.length === 0 || amount < costs[0].cost) {
    return '';
  }

  const minCost = costs[0].cost;
  const maxDepth = Math.floor(amount / minCost);

  const larger =
    costs
      .slice(1)
      .filter((cost) => cost.idx > costs[0].idx)
      .reverse() || [];

  const largeCount = {};
  let remainedAmount = amount;
  let i = 1;
  for (; i <= maxDepth; i++) {
    let largeAdded = false;
    for (const large of larger) {
      if (remainedAmount - large.cost >= (maxDepth - i) * minCost) {
        remainedAmount -= large.cost;
        largeAdded = true;

        const prev = largeCount[large.idx] || 0;
        largeCount[large.idx] = prev + 1;
        break;
      }
    }

    if (!largeAdded) {
      break;
    }
  }

  return Object.entries(largeCount)
    .sort(([a], [b]) => Number(b) - Number(a))
    .map(([idx, count]) => String(idx).repeat(count))
    .concat(String(costs[0].idx).repeat(Math.max(maxDepth - i + 1, 0)))
    .join('');
};
