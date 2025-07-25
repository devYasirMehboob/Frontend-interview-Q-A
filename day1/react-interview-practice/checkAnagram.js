function checkAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const normalize = (str) => str.toLowerCase().split('').sort().join('');
  return normalize(str1) === normalize(str2);
}

// Example
console.log(checkAnagram("listen", "silent")); // true
console.log(checkAnagram("hello", "world")); // false
