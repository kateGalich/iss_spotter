const iss_promised = require('./iss_promised');
const nextISSTimesForMyLocation = iss_promised.nextISSTimesForMyLocation;

// const { fetchMyIP, fetchCoordsByIP } = require('./iss_promised');

function printPassTime(passTimes) {
  passTimes.forEach(x => console.log(`Next pass at ${new Date(x.risetime * 1000)} for ${x.duration} seconds!`));
}

nextISSTimesForMyLocation()
  .then(printPassTime)
  
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });
