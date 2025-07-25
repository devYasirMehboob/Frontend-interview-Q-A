function rotateArray(arr, k) {
  const n = arr.length;
  if (n === 0) return [];

  k = k % n; // To handle cases where k > n
  const part1 = arr.slice(-k);
  const part2 = arr.slice(0, n - k);

  return part1.concat(part2);
}

// Example
console.log(rotateArray([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]
