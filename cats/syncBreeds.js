// syncBreeds.js
// ... 
const catBreeds = {
    'Somecat': "kdsmkf ksmfkcmpk;sd fkmsk;afmda kmsfkd m skfok oakf jkjmfks",
    'Bombay': "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder."}
    
// synchronous function to fetch a cat breed
const breedDetails = function(breed) {
    // ...
    return catBreeds[breed];
};
const bombay = breedDetails('Bombay');
console.log(bombay);

  // export the function
module.exports = breedDetails;