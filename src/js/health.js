// const users = [
//   { name: 'мечник', health: 10 },
//   { name: 'маг', health: 100 },
//   { name: 'лучник', health: 80 },
// ];

export default function sortUsers(users) {
  return users.sort((a, b) => (b.health > a.health ? 1 : -1));
}
