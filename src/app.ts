type Person = {
    name: string;
    age: number;
    hobbies: string[];
}

const person: Person = {
    name: 'Maximalian',
    age: 30,
    hobbies: ['Sports', 'Cooking']
}

let favoriteActivities: Person;

favoriteActivities = {
    name: 'Mark',
    age: 48,
    hobbies: ["Badmintor", "Hockey"]
}
console.log(favoriteActivities);

for (const hobby of person.hobbies) {
    console.log(`hobby.toUpperCase() ${hobby.toUpperCase()}`);
}