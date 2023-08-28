// Task 0 (EASY)

const peopleArray = [
  { name: 'Alice', age: 28 },
  { name: 'Bob', age: 32 },
  { name: 'Charlie', age: 24 },
  { name: 'David', age: 29 },
  { name: 'Ella', age: 22 },
  { name: 'Frank', age: 45 },
  { name: 'Grace', age: 19 },
  { name: 'Henry', age: 37 },
  { name: 'Isabel', age: 31 },
  { name: 'Jack', age: 26 },
  { name: 'Katherine', age: 29 },
  { name: 'Liam', age: 40 },
  { name: 'Mia', age: 18 },
  { name: 'Noah', age: 33 },
  { name: 'Olivia', age: 27 },
  { name: 'Paul', age: 52 },
  { name: 'Quinn', age: 23 },
  { name: 'Rachel', age: 30 },
  { name: 'Samuel', age: 35 },
  { name: 'Taylor', age: 21 }
];

// Write a function called returnYoungerPeople.

// This function should take ANY array and ANY number as parameters (array, age)

// The function should make a new array called youngPeople and return it from the function. 
// You should get that array from the function call (function call will return whatever the function returns)

// Use the function to make an array of people younger than 35.
const returnYoungerPeople = (array, age)=>{
    const youngPeople = array.filter((people)=>{
        // console.log(e);
        if(people.age < age){
            return true;
        } else {
            return false;
        }
    });
    return youngPeople;
};
// returnYoungerPeople(peopleArray);
// let arrOfYoungPeople = returnYoungerPeople(peopleArray, 30);
// console.log(arrOfYoungPeople);
// =========================================================================

// Task 1 (EASY)

// Write a function that will take ANY array as an argument and return the total of all ages of the users.

// Parameters: (array)

// arguments: (peopleArray)

// Get the total from the function call (call will return whatever the function returns)

// log the total

// const usersArray = (array)=>{
//     let total = 0;
//     array.filter((ages)=>{
//         total+= ages.age;
//     });
//     console.log(total);
// };
// usersArray(peopleArray);

// =========================================================================

// Task 2 (EASY)

const usersArray = [
  { username: 'alice123', points: 120 },
  { username: 'bob456', points: 95 },
  { username: 'charlie789', points: 200 },
  { username: 'david987', points: 50 },
  { username: 'emma321', points: 350 },
  { username: 'frank567', points: 80 },
  { username: 'grace234', points: 270 },
  { username: 'harry890', points: 150 },
  { username: 'isabel432', points: 420 },
  { username: 'jack654', points: 30 }
];

// Sometimes we give all our users points. 
// Write a function called addPointsToAll that will give points to ALL users in the usersArray.

// The function should have 1 parameter points

// parameters: (points)

// arguments (10)
const addPointsToAll = (points)=>{
    usersArray.forEach((eachUser)=>{
        eachUser.points += points;
    });
};
// addPointsToAll(10);
// console.log(usersArray);
 
// =============================================================
// Task 3 (EASY)
// Sometimes we want to give points to just one user.

// Write a function called addPointsOneUser that will give a number of points to just one specific user.

// parameters: (nameOfUser, points)

// arguments: (isabel432, 90)

const addPointsOneUser = (nameOfUser, points)=>{
    usersArray.forEach((user)=>{
        if(user.username === nameOfUser){
            user.points += points;
        }
    })
}
// addPointsOneUser("isabel432", 90);
// console.log(usersArray);
 
// ==================================================
// Task 4 (EASY)

const fruitsArray = [
  { name: 'Apple', color: 'Red' },
  { name: 'Banana', color: 'Yellow' },
  { name: 'Orange', color: 'Orange' },
  { name: 'Grapes', color: 'Purple' },
  { name: 'Strawberry', color: 'Red' },
  { name: 'Blueberry', color: 'Blue' },
  { name: 'Kiwi', color: 'Green' },
  { name: 'Pineapple', color: 'Yellow' },
  { name: 'Mango', color: 'Orange' },
  { name: 'Watermelon', color: 'Green' },
  { name: 'Peach', color: 'Orange' },
  { name: 'Pear', color: 'Green' },
  { name: 'Cherry', color: 'Red' },
  { name: 'Lemon', color: 'Yellow' },
  { name: 'Plum', color: 'Purple' },
  { name: 'Raspberry', color: 'Red' },
  { name: 'Blackberry', color: 'Black' },
  { name: 'Cantaloupe', color: 'Orange' },
  { name: 'Coconut', color: 'Brown' },
  { name: 'Fig', color: 'Purple' }
];

// This is an array of the user's fruits. The user wants to delete all red fruit because now they hate the color red. 

// Write a function called deleteColor that will take ANY ARRAY as an argument and a color as an argument.

// parameters: (array, color)

// call: deleteColor(fruitsArray, "red")

// The function should delete all fruit of the color from the original array.  DO NOT MAKE A NEW ARRAY.  

const deleteColor = (array, color)=>{
    for(let i = array.length - 1; i >= 0; i--){
        if(array[i].color.toLowerCase() === color.toLowerCase()){
            array.splice(i, 1)
        }
    }
};

// deleteColor(fruitsArray, 'red');
// console.log(fruitsArray);

// =========================================================================
// Task 5 (MEDIUM)
const booksArray = [
  { title: 'The Catcher in the Rye', author: 'J.D. Salinger', pages: 234 },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', pages: 281 },
  { title: '1984', author: 'George Orwell', pages: 328 },
  { title: 'The Great Gatsby', author: 'J.D. Salinger', pages: 180 },
  { title: 'Pride and Prejudice', author: 'Harper Lee', pages: 279 },
  { title: 'The Hobbit', author: 'George Orwell', pages: 310 },
  { title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.D. Salinger', pages: 309 },
  { title: 'Moby-Dick', author: 'Harper Lee', pages: 585 },
  { title: 'Brave New World', author: 'George Orwell', pages: 325 },
  { title: 'The Lord of the Rings', author: 'J.D. Salinger', pages: 1178 },
  { title: 'The Odyssey', author: 'Harper Lee', pages: 324 },
  { title: 'Fahrenheit 451', author: 'George Orwell', pages: 227 },
  { title: 'Sense and Sensibility', author: 'J.D. Salinger', pages: 352 },
  { title: 'The Fellowship of the Ring', author: 'Harper Lee', pages: 423 },
  { title: 'Harry Potter and the Chamber of Secrets', author: 'George Orwell', pages: 341 },
  { title: 'The Scarlet Letter', author: 'J.D. Salinger', pages: 238 },
  { title: 'Wuthering Heights', author: 'Harper Lee', pages: 416 },
  { title: 'Dracula', author: 'George Orwell', pages: 418 },
  { title: 'The Picture of Dorian Gray', author: 'J.D. Salinger', pages: 304 },
  { title: 'Hamlet', author: 'Harper Lee', pages: 342 }
];

// Write a function called filterAuthorAndPages that will take ANY  author name ANY number of pages as paramaters.

// The function should RETURN a new array that has ONLY that books with that author AND pages less than.

// Parameters: (authorName, pages)

// arguments: ("Harper Lee", 400)
// The user only wants to see books from Harper Lee. The user also only wants to see books that are less than 400 pages because they are lazy. 
// Call your function and get the returned function in a new variable.
const filterAuthorAndPages = (authorName, pages)=>{
    const arrayOfFilteredBooks = booksArray.filter((book)=>{
        if(book.author.toLocaleLowerCase() === authorName.toLocaleLowerCase() && book.pages < pages){
            return true;
        } else {
            return false;
        }
    });
    return arrayOfFilteredBooks;
};
// let arrayOfBooks = filterAuthorAndPages("harper lee", 400);
// console.log(arrayOfBooks);

// =========================================================================

// Task 6 (HARD) (Optional)
const countriesArray = [
  { name: 'United States', population: 331002651 },
  { name: 'China', population: 1444216107 },
  { name: 'India', population: 1380004385 },
  { name: 'Brazil', population: 212559417 },
  { name: 'Russia', population: 145934462 },
  { name: 'Japan', population: 126476461 },
  { name: 'Mexico', population: 128932753 },
  { name: 'Germany', population: 83783942 },
  { name: 'France', population: 65273511 },
  { name: 'United Kingdom', population: 67886011 },
  { name: 'Italy', population: 60461826 },
  { name: 'Canada', population: 37742154 },
  { name: 'South Korea', population: 51269185 },
  { name: 'Australia', population: 25499884 },
  { name: 'Spain', population: 46754778 },
  { name: 'Saudi Arabia', population: 34813871 },
  { name: 'Nigeria', population: 206139587 },
  { name: 'South Africa', population: 59308690 },
  { name: 'Argentina', population: 45195777 },
  { name: 'Egypt', population: 102334404 }
];

// These are countries our travel app can show flights to. 

// Sometimes users don't want to see countries they have already been to. Also some populations are too big.

// Write a function called filterCountries that will take 3 arguments: allCountries, seenCountries (an array), maxPopulation.

// The function should make a new array that only has countries  that the user has not seen and have a lower population.

// Parameters: (allCountries seenCountries, maxPopulation)

// arguments: (countriesArray, ["United States", "Brazil", "egypt", "argentina"], 70000000) 
const filterCountries = (allCountries, seenCountries, maxPopulation)=>{
    return allCountries.filter(country =>
     !seenCountries.includes(country.name) && country.population <= maxPopulation);
};
const newFilteredCountries = filterCountries(countriesArray, ["United States", "Brazil", "egypt", "argentina"], 70000000)
console.log(newFilteredCountries);