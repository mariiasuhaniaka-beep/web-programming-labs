// 1.1
function getFullName(user) {
  const { firstName, lastName, middleName = "" } = user;

  const firstInitial = firstName[0] + ".";
  const middleInitial = middleName ? " " + middleName[0] + "." : "";

  return `${lastName} ${firstInitial}${middleInitial}`;
}

// 1.2
function mergeObjects(...objects) {
  return objects.reduce((acc, obj) => ({ ...acc, ...obj }), {});
}
// 1.3
function removeDuplicates(...arrays) {
  return [...new Set([].concat(...arrays))];
}
// 1.4
function createUpdatedUser(user, updates) {
  return {
    ...user,
    ...updates,
    address: {
      ...user.address,
      ...updates.address,
    },
  };
}

console.log("=== Завдання 1: Деструктуризація та Spread/Rest ===");

console.log(
  "1.1:",
  getFullName({
    firstName: "світлана",
    lastName: "Петренюк",
    middleName: "Миколаївна",
  })
);

console.log(
  "1.1 (без побатькові):",
  getFullName({
    firstName: "Раїса",
    lastName: "Рагова",
  })
);

console.log(
  "1.2:",
  mergeObjects({ a: 1 }, { b: 2 }, { a: 3, c: 4 })
);

console.log(
  "1.3:",
  removeDuplicates([1, 2, 3], [2, 3, 4], [4, 5])
);

const user = {
  name: "Макс",
  age: 25,
  address: { city: "Харків", zip: "01321" },
};

const updated = createUpdatedUser(user, {
  age: 26,
  address: { zip: "02131" },
});

console.log("1.4 updated:", updated);
console.log("1.4 original user:", user);
