// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist

const sortFunction1 = function (a, b) {
  if (a < b) {
    return -1;
  } else { //a >=b 
    return 1;
  }
}

const sortFunction2 = function(a, b) {
  return a < b ? -1 : 1;
}

const mostSongsInPlaylist = function(arr) {
  // most songs on playlist would be 60 - that is if there are 60 one-minute
  // songs
  // choose all the shortest songs
  // sort the array from smallest to largest
  // arr.sort sorts an array in place.
  // arr.sort((a, b) => a < b ? -1 : 1);
  arr.sort((a, b) => a - b);
  // console.log(arr);

  // create a running sum, starting at 0 (a variable)
  let runningSum = 0; // this is how much of my 60 minute playlist has been
                      // used so far

  for (let i = 0; i < arr.length; i++) {
    // keep adding the elements in the array to that sum
    runningSum += arr[i];
    // until the sum is greater than 60
    // and when the sum is first greater than 60, 
    if (runningSum > 60) {
      // return the number of elements that you've added minus 1 because that was the last time
      // the total length of the playlist was less than 60
      return i;
    } // otherwise, keep looping.
  }
  // if we make it here, then the sum of all the elements in the array 
  // is not greater than 60, so return the number of elements in the array
  return arr.length;
  // add your code here...
};


let inputArray = [18, 3, 30, 1000, 100, 2000, 4, 40]; // should return 4
console.log(`Should be 4: Actually is ${mostSongsInPlaylist(inputArray)}`); inputArray = [4, 2, 5, 3, 1, 1, 2, 3, 4, 2, 5, 6, 3, 2, 4, 7, 3, 2, 3];
console.log(`Should be 18: Actually is ${mostSongsInPlaylist(inputArray) }`);
inputArray = [3, 4, 7, 2];
console.log(`Should be 4: Actually is ${mostSongsInPlaylist(inputArray)}`);
inputArray = [49, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1];
console.log(`Should be 13: Actually is ${mostSongsInPlaylist(inputArray)}`);

