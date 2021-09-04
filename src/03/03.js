export const solution = (input) => {
  if (input.length === 0) {
    return false;
  }

  const parts = ['7', '711', '1111'];

  const nextPartStartIdxx = [0];
  while (nextPartStartIdxx.length > 0) {
    const partStartIdx = nextPartStartIdxx.shift();

    // string is some combination of parts
    if (partStartIdx === input.length) {
      return true;
    }

    for (const part of parts) {
      const nextPartStartIdx = partStartIdx + part.length;
      if (part === input.slice(partStartIdx, nextPartStartIdx)) {
        nextPartStartIdxx.push(nextPartStartIdx);
      }
    }
  }

  return false;
};
