// Code your solution in this file!
const returnFirstTwoDrivers = function(array) {
  const newArray = array.slice(0, 2);
  return newArray;
}

const returnLastTwoDrivers = function(array) {
  const newArray = array.slice(-2);
  return newArray;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(fareMultiplier) {
  return function(fare){
    return fare * fareMultiplier;
  }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(arrayOfDrivers, returnDriversFunction) {
  return returnDriversFunction(arrayOfDrivers);
}