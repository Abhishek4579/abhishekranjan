const user = {firstName : 'Vikash', lastName : 'Srivastava', bloodType : 'o'};
const names = ['Vikash','Sunil','Virat']

for (let key in user){
    console.log(key);
}

for (let index in names){
    console.log(index);
    console.log(names[index]);
}

// forEach
names.forEach( name => {
    console.log(name.toUpperCase())
}
);

for (const key in user) {
    if (user.hasOwnProperty(key)) {
        const value = user[key];
        console.log(`Key: ${key}, Value: ${value}`);
    }
}


console.log(Object.entries(user));
// Define a new property 'age' with specific attributes
Object.defineProperty(user, 'age', {
    value: 30, // The value of the property
    writable: true, // If the property can be changed
    enumerable: false, // If the property shows up in enumerations
    configurable: true // If the property can be deleted or changed
});

// Example of modifying the property
user.age = 31; // This will work because writable is true

for (let key in Object.keys(user)){
    console.log(key);
    console.log(Object.keys(user)[key])
}

console.log(user); // Output: { firstName: 'Vikash', lastName: 'Srivastava', age: 31 }


