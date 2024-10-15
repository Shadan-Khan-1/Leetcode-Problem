let str = "shadan khan ";

function findDuplicateChar(str) {
  str = str.trim();
  let isDuplicate = false;
  let isNotDuplicate = true;
  let charCount = {};
  let duplicateChars = [];

  // Count the occurrences of each character
  for (let i = 0; i < str.length; i++) {
    let element = str[i];
    charCount[element] = (charCount[element] || 0) + 1;
  }
  console.log(`Unique character count: ${Object.keys(charCount).length}`);
  // Check for duplicates
  for (let key in charCount) {
    if (charCount[key] > 1) {
      isDuplicate = true;
      isNotDuplicate = false;
      duplicateChars.push(key);
      console.log(`Duplicate character found: ${key}`);
    }
  }
  console.log("duplicateChars: ", duplicateChars);

  if (isNotDuplicate) {
    console.log("No duplicate characters found");
  }
}

// Call the function
findDuplicateChar(str);
