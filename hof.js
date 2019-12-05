//Reduce
const nums = [1, 2, 3, 4, 5, 6, 7];
const sum = nums.reduce(function(acc, num) {
  return acc + num;
}, 0);
console.log(sum);

const words = ['wake', 'me', 'up', 'inside', '!'];
const lyrics = words.reduce((acc, word) => {
  return acc + `${word} `;
}, '');
console.log(lyrics);

const words = ['kick', 'push', 'coast'];
const lyrics = words.reduce((lyricsHash, word) => {
  lyricsHash[word] = word;
  return lyricsHash;
}, {});
console.log(lyrics);

const artist = [['firstName', 'Lupe'], ['lastName', 'Fiasco'], ['profession', 'rapper']];

const artistDetails = artist.reduce((details, [key, value]) => {
  // details[word[0]] = word[1];
  details[key] = value;
  return details;
}, {});
console.log(artistDetails);
// {firstName: "Lupe", lastName: "Fiasco", profession: "rapper"}

// const names = ['Camila', 'Shawn', 'Sam', 'Jade', 'Tricia'];
// const longNames = names.filter(name => name.length > 4);
// const greetings = longNames.map(name => `Hello ${name}`);
// console.log(greetings);
//  ["Hello Camila", "Hello Shawn", "Hello Tricia"]

// const greetings = names.reduce((acc, name) => {
//   if (name.length > 4) {
//     return [...acc, `Hello ${name}`];
//   }
//   return [...acc];
// }, []);
// console.log(greetings);

// const greetings = names.reduce(
//   (greetings_, name) => name.length > 4 ? [...greetings_, `Hello ${name}`] : [...greetings_], []
// );
// console.log(greetings);

// const scores = [24, 1, 96, 44, 3, 18, 59, 78, 1001];

// let min = Number.MAX_SAFE_INTEGER;
// let max = Number.MIN_SAFE_INTEGER;
// scores.forEach(score => {
//   if (score < min) min = score;
//   if (score > max) max = score;
// });
// console.log(min);
// console.log(max);

// const recordScores = scores.reduce((recordScores_, score) => {
//   if (score < recordScores_.min) recordScores_.min = score;
//   if (score > recordScores_.max) recordScores_.max = score;
//   return recordScores_;
// }, {
//   min: Number.MAX_SAFE_INTEGER,
//   max: Number.MIN_SAFE_INTEGER
// });
// console.log(recordScores);

const concertVisits = [
  { singer: 'James Yodelson', cost: 42, genre: 'Deep Scottish Yodel Trap' },
  { singer: 'J Cole', cost: 54, genre: 'Rap' },
  { singer: 'Lady Gaga', cost: 78, genre: 'Pop' },
  { singer: 'Calvin Harris', cost: 23, genre: 'Electronic' },
  { singer: 'Lane 8', cost: 34, genre: 'Electronic' },
  { singer: 'Kendrick Lamar', cost: 49, genre: 'Rap' },
  { singer: 'Ariana Grande', cost: 52, genre: 'Pop' },
  { singer: 'Drake', cost: 99, genre: 'Hip-Hop' },
  { singer: 'Lupe Fiasco', cost: 37, genre: 'Hip-Hop' }
];

const concertVisitsSummary = concertVisits.reduce((concertVisits_, visit) => {
  const { genre } = visit;
  if (!concertVisits_[genre]) {
    concertVisits_[genre] = {
      singers: [],
      totalSpent: 0,
      totalVisits: 0
    }
  }

  concertVisits_[genre].singers = [...concertVisits_[genre].singers, visit.singer];
  concertVisits_[genre].totalSpent += visit.cost;
  concertVisits_[genre].totalVisits += 1;

  return concertVisits_;
}, {});

console.log(concertVisitsSummary);