/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
	if (i === nums.length) return 1;
	return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0, longestWord = words[0]) {
	if (i === words.length) return longestWord.length;
	if (words[i].length > longestWord.length) longestWord = words[i];
	return longest(words, i + 1, longestWord);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, keepChar = true, chopped = "", i = 0) {
	if (i === str.length) return chopped;
	if (keepChar) chopped += str[i];
	return everyOther(str, !keepChar, chopped, i + 1);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i = str.length - 1, reversed = "") {
	if (i < 0) return reversed === str;
	reversed += str[i];
	return isPalindrome(str, i - 1, reversed);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
	if (i === arr.length) return -1;
	if (arr[i] === val) return i;
	return findIndex(arr, val, i + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = str.length - 1, rev = "") {
	if (i < 0) return rev;
	rev += str[i];
	return revString(str, i - 1, rev);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, strings = []) {
	for (const value of Object.values(obj)) {
		if (typeof value === "object") gatherStrings(value, strings);
		if (typeof value === "string") strings.push(value);
	}
	return strings;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length - 1) {
	if (left > right) return -1;
	const middle = Math.floor((left + right) / 2);
	if (arr[middle] === val) return middle;
	return arr[middle] < val
		? binarySearch(arr, val, middle + 1, right)
		: binarySearch(arr, val, left, middle - 1);
}

module.exports = {
	product,
	longest,
	everyOther,
	isPalindrome,
	findIndex,
	revString,
	gatherStrings,
	binarySearch
};
