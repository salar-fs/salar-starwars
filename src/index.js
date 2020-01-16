const uniqueRandomArray = require('unique-random-array');
const starwarsJSON = require('./starwars.json');

module.exports = {
	all: starwarsJSON,
	random: uniqueRandomArray(starwarsJSON),
};
