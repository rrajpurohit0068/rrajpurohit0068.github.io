Given two strings.The task is to check whether the given strings are anagrams of each other or not.
    Input: str1 = “listen” str2 = “silent”
Output: “Anagram”
Explanation: All characters of “listen” and “silent” are the same.

function anagrams(s1, s2) {
    if (s1.length != s2.length) return false;
    let m1 = new Map();
    let m2 = new Map();
    for (let ch of s1) {
        m1.set(ch, (m1.get(ch) ?? 0) + 1)
    }
    for (let ch of s2) {
        m2.set(ch, (m2.get(ch) ?? 0) + 1)
    }
    for (let key in m1) {
        if (m2.get(key) != m1.get(key)) {
            return false;
        }
    }
    return true;

}




Q2: Given an array A[] of n numbers and another number x, the task is to check whether or not there exist two elements in A[] whose sum is exactly x.

If Yes, Please return the indexes where it is found.

    Input: arr[] = { 0, - 1, -3, 2, 1}, x = -2
Output: Yes
Input: arr[] = { 1, - 2, 1, 0, 5}, x = 0
Output: No

function getIndex(arr, x) {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        // a + b =x 
        // b = x - a;
        let b = x - arr[i]
        if (map.has(b)) {
            return [i, map.get(b)]
        }
        map.set(arr[i], i)
    }
    return [-1, -1]
}




Q3: Given an array arr[] of size N.The task is to find the sum of the contiguous subarray within a arr[] with the largest sum.

    Arr = [-2, -3, 4, -1, -2, 1, 5, -3]

Max Sum = 7, Occurs between 2nd and 6th index.

function getMaxSum(arr) {
    let currSum = 0;
    let maxSum = arr[0];
    for (let i = 0; i < arr.length; i++) {
        currSum += arr[i];
        if (currSum < 0) {
            currSum = arr[i];

        }
        maxSum = Math.max(currSum, maxSum)
    }
    return maxSum;
}


