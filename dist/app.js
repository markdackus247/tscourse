const person = {
    name: 'Maximalian',
    age: 30,
    hobbies: ['Sports', 'Cooking']
};
let favoriteActivities;
favoriteActivities = {
    name: 'Mark',
    age: 48,
    hobbies: ["Badmintor", "Hockey"]
};
console.log(favoriteActivities);
for (const hobby of person.hobbies) {
    console.log(`hobby.toUpperCase() ${hobby.toUpperCase()}`);
}
