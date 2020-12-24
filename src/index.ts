interface Human {
    name: string,
    age: number,
    gender: string;
}

const person = {
    name: "Jaeuk",
    age: 24,
    gender: "male"
};


const sayHi = (person): void => {
    console.log(`Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`);
}

sayHi(person);
    
export {}; 