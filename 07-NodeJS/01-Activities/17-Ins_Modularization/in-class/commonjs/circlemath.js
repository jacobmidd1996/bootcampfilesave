const getCircleArea = (radius) => Math.PI * radius * radius;
const getSphereVolume = function(radius) {
  return 1.33 * Math.PI * radius * radius * radius;
}

// module.exports is an object we use to store variables or methods
// module.exports = {
//   getCircleArea,
//   getSphereVolume,
// };

module.exports = {
  getCircleArea: getCircleArea,
  getSphereVolume: getSphereVolume,
};