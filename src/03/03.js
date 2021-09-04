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

    parts
      .filter((part) => part === input.substring(partStartIdx, partStartIdx + part.length))
      .map((part) => () => nextPartStartIdxx.push(partStartIdx + part.length))
      .map((f) => f());
  }

  return false;
};
