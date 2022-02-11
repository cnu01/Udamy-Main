let s = "cbbd";

function checkPalidrom(str) {
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (str[i] !== str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

var longestPalindrome = function (s) {
  let ans = [];
  let big = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      let str = s.split("").slice(i, j);
      if (checkPalidrom(str) && str.length > big) {
        big = str.length;
        ans = str;
      }
    }
  }
  return ans.join("");
};
longestPalindrome(s);
