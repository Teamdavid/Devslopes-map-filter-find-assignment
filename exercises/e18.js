import { data } from "../data/data";
import { maxBy } from "./e17";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  const asteroids = data.asteroids;
  const discoveryYear = asteroids.map( x => x.discoveryYear );
  let numOfDiscoveriesArray = []; 

  for (let element of discoveryYear) {
    let numAsteroids = 0;
    for (let subElement of discoveryYear) {
      if (element === subElement) {
        numAsteroids ++;
      }
    }
    let discoveryArrayObject = { discoveryYear: element, numDiscovered: numAsteroids };
    numOfDiscoveriesArray.push( discoveryArrayObject );
  }

  let highestDiscoveryYearObject = maxBy(numOfDiscoveriesArray, (x) => x.numDiscovered);

  return highestDiscoveryYearObject.discoveryYear;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
