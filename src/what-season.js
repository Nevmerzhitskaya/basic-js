const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  const season = ['winter', 'spring', 'summer', 'autumn'];
  // console.log('1',date)


  if (!Date.parse(date)) {
    return 'Unable to determine the time of year!';
  }

  if ([11, 0, 1].includes(date.getMonth())) {
    return season[0];
  }
  if ([2, 3, 4].includes(date.getMonth())) {
    return season[1];
  }
  if ([5, 6, 7].includes(date.getMonth())) {
    return season[2];
  }
  if ([8, 9, 10].includes(date.getMonth())) {
    return season[3];
  }
}


module.exports = {
  getSeason
};
