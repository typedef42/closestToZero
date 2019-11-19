/**
 * closestToZero find the closest number to 0
 * @param source array of number from where to find a solution
 */
export const closestToZero = (source: number[]) => {
  // early escape cases
  if (!source || !source.length) {
    return 0;
  }

  if (source.length === 1) {
    return source[0];
  }

  // array.sort is prefered here because (depending on the JS VM...) 
  // it should be faster than an O(n) forEach iteration on large dataset, 
  // and comparable on small datasets
  const sorted = source.sort((a, b) => {
    return Math.abs(a) - Math.abs(b);
  });

  // result is either index 0 or 1, if we have same number with opposite sign in the array
  return Math.abs(sorted[0]) === Math.abs(sorted[1]) ? Math.max(sorted[0], sorted[1]) : sorted[0];
};
