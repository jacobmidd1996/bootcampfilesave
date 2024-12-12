let addMore = true;

// JSON.parse

// start with an empty array
let myRatings = [];

// try to read my array from local storage
const ratingsFromLocalStorage = JSON.parse(localStorage.getItem("ratings"));

// if I got something from local storage 
// if there is nothing at that key (in this case "ratings") in localStorage, the result will be null
if (ratingsFromLocalStorage !== null) {

  // use that as my starting array
  myRatings = ratingsFromLocalStorage;

  alert(`You already have ${myRatings.length} ratings stored.`);
}

while (addMore === true) {
  const restaurant = prompt("What restaurant did you visit?");
  const rating = prompt("Rate it from 1 to 5");

  // create a new object
  const newRestaurantRating = {
    name: restaurant,
    rating: rating
  };

  // add it to the array 
  myRatings.push(newRestaurantRating);

  // update local storage with the modified array
  localStorage.setItem("ratings", JSON.stringify(myRatings));

  addMore = confirm("Add another restaurant?");
}

const myObjects = [
  {
    service: "Hulu",
    show: "Only Murders in the Building"
  },
  {
    service: "Max",
    show: "The White Lotus"
  },
  {
    service: "Disney+",
    show: "Agatha All the Time"
  },
  {
    service: "Hulu",
    show: "The Bear"
  }
];

for (const thingToWatch of myObjects) {
  const title = thingToWatch.show;
  const streamer = thingToWatch.service;
  console.log(`You need to watch ${title} on ${streamer}!`);
}