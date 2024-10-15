function lengthOfLongestSubstring(s) {
  let maxLength = 0;
  let start = 0;
  let charMap = new Map();

  for (let end = 0; end < s.length; end++) {
    const currentChar = s[end];
    console.log('currentChar: ', currentChar);

    if (charMap.has(currentChar)) {
      start = Math.max(start, charMap.get(currentChar) + 1);
      console.log('start: ', start);
    }


    charMap.set(currentChar, end);
    console.log('charMap.set(currentChar, end) : ', charMap.set(currentChar, end));

    maxLength = Math.max(maxLength, end - start + 1);
    console.log('maxLength: ', maxLength);
  }

  return maxLength;
}

const input = "shadan";
console.log(lengthOfLongestSubstring(input)); 