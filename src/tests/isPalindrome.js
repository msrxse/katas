// Using the Extension: (save before running!) to run CTRL+ALT+N

// or using node from terminal run: ``` node src/tests/isPalindrome.js ```

function isPalindrome(value) {
  // "A man, a plan, a canal: Panama"
  const result = value
    .toLowerCase()
    .replaceAll(",", "")
    .replace(":", "")
    .replaceAll(" ", "");
  const reversed = result.split("").reverse().join("");

  return result === reversed;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
