const friends = [
  { name: "Ross", online: false },
  { name: "Joey", online: true },
  { name: "Chandler", online: false },
  { name: "Phoebe", online: true },
  { name: "Monika", online: true },
  { name: "Rachel", online: false },
];

// function findByName(arr, friendName) {
//   for (const item of arr) {
//     if (item.name.toLowerCase() === friendName.toLowerCase()) {
//       return item;
//     }
//   }
//   return "Not found";

//   console.log(findByName(friends, "Joey"));
// }

// отримати імена всіх друзів
// function getAllNames(arr) {
//   const names = [];

//   for (const friend of arr) {
//     console.log(friend.name);
//   }
//   return names;
// }

// отримати імена тілки тих друзів, які зараз онлайн
// function getOnlineFriends(arr) {
//   const onlineFriends = [];
//   for (const item of arr) {
//     if (item.online) {
//       onlineFriends(item.name);
//     }
//   }
//   return onlineFriends;
// }

// console.log(getOnlineFriends(friends));

// const stones = [
//   { name: "Смарагд", price: 1300, quantity: 4 },
//   { name: "Діамант", price: 2700, quantity: 3 },
//   { name: "Сапфір", price: 400, quantity: 7 },
//   { name: "Щебінь", price: 200, quantity: 2 },
// ];

// function calcTotalPrice(arr, name) {
//   let total = 0;

//   for (const stone of arr) {
//     if (stone.name === name) {
//       total += stone.price * stone.quantity;
//       return total;
//     }
//   }
// }

// console.log(calcTotalPrice(stones, "Сапфір"));

// const playlist = {
//   name: "My playlist",
//   rating: 5,
//   tracks: ["track-1", "track-2"],
//   changeName(newName) {
//     playlist.name = newName;
//   },
//   addTrack(newTrack) {
//     this.tracks.push(newTrack);
//   },
//   getTrackCount() {
//     return this.tracks.length;
//   },
// };

// playlist.changeName("Playlist");
// playlist.addTrack("track-3");

// console.log(playlist);

// REST/ SPREAD
// function foo(...args) {}

// foo(1, 2, 3, 4, 5);
// foo(10, 20);

// const user = {
//   name: "Alice",
//   age: 24,
//   hobby: "html",
//   premium: true,
// };

// const user2 = {
//   name: "Stepan",
//   age: 23,
//   hobby: "html",
//   premium: true,
// };

// function updateUser(obj) {
//   obj.mood = "happy";
//   obj.hobby = "skydiving";
//   obj.premium = false;

//   const keys = Object.keys(obj);

//   for (const key of keys) {
//     console.log(`${key}: ${obj[key]}`);
//   }
// }

// updateUser(user);
// updateUser(user2);

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// const keys = Object.keys(user);

// for (const key of keys) {
//   console.log(`${key}: ${user[key]}`);
// }

const salaries = {
  alice: 130,
  petya: 100,
  yura,
};

function sum(obj) {
  let total = 0;
  const values = Object.values(obj);

  for (const value of values) {
    total += value;
  }
  return total;
}

console.log(sum(salaries));

const atTheOldToad = {
  potions: [],
  getPotions() {
    return "List of all available potions";
  },
  addPotion(potionName) {
    return `Adding ${potionName}`;
  },
};

const atTheOldToad = {
  potions: ["Speed potion", "Stone skin"],
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    this.potions.push(`${potionName}`);
  },
};

function add(...args) {
  let sum = 0;

  for (let number of args) {
    sum += number;
  }
  return sum;
}

function addOverNum(value, ...args) {
  let total = 0;
  for (let number of args) {
    if (number > value) {
      total += number;
    }
  }
  return total;
}

const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];

const allScores = [
  ...firstGroupScores,
  ...secondGroupScores,
  ...thirdGroupScores,
];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);
