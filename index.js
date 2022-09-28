const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {

  if (error) {
    return console.log("It didn't work!", error);
  }

  passTimes.forEach(x => console.log(`Next pass at ${new Date(x.risetime*1000)} for ${x.duration} seconds!`));


});
