//Mandisa Harris-King MovieProcessor June 28th, 2026

//Part 1: Raw Data (Strings & arrays) 1. Create an array of at least 5 strings. Each string should represent a movie using this format:
//"title,genre,rating,reviewEmail"

let rawData = [
    "Arrival, mystery, 8, joyfulsmile@gmail.com",
    "Knives Out, crime, 7, springforward@aol.com",
    "The Dark Knight, thriller, 9, bekind345@yahoo.com",
    "War of the Worlds, sci-fi, 2", //Bad string with no email
    "The Ice Age Adventures of BucK Wild, animation, 4, crazychild569@ymail.com"
];

//Part 2: Create Movie Objects -- Create a constructor function named Movie with: Title, genre, rating, reviewEmail and a Symbol
let id = Symbol("id");

function Movie(title, genre, rating, reviewEmail) {
    this.title = title;
    this.genre = genre;
    this.rating = rating;
    this.reviewEmail = reviewEmail;
    this[id] = Symbol("id");

    //Part 3: Add Methods
    this.getSummary = function() {
        return `${this.title} is a ${this.genre} movie with a rating of ${this.rating}.`;
    }

    this.isHighlyRated = function() {
        return this.rating >= 8;
    }

    this.getReviewEmail = function() {
        return this.reviewEmail?.toString() ?? "none"; //searches if there is an email in the object 
    }

    this.getID = function () {
        return this[id];
    }
}

//Part 2: Use your array and convert each string into a Movie object. (Hint: you will need string methods such as split)
//Part 6: Error Handling - Use try/catch to handle an error-- if a string is missing a value or is incorrectly formatted, your program should not crash.

let movies = []; 

for (let str of rawData) {
    try {
        let item = str.split(', '); //splits up the rawData long string element into 4 individual items

        if (!item[3]) { //checks to make sure movie objects have an email value
            throw new Error(`${item[0]} is missing an email!`)
        }

        //create movie object using the movie constructor above
        let movieEntry = new Movie(
            item[0],
            item[1],
            Number(item[2]),
            item[3],
        );

        //add movieEntry objects to the movies array
        movies.push(movieEntry);
    } catch (err) {
        console.log("Error: " + err.message); // returns Error: Movie title is missing an email!  
    } 
}

//Part 4: Array and String Processing - Display all movie summaries using console.log()
for (let movie of movies) { //movie is the object and movies is the array object
    console.log(movie.getSummary()) //calls the summary of each of the movies in the movies array
}

//Part 4: Array and String Processing - Create a new array that contains only highly rated movies
let highlyRated = [];

for (let movie of movies) { //loops through each of the movies to check the rating. if the rating is greater than 8 it moves to the new array -- highlyRated
    if (movie.isHighlyRated()) {
       highlyRated.push(movie);
    }
}

for (let movie of highlyRated) {
    console.log(movie.title); // Arrival and The Dark Knight
}

//Part 5: Regular Expressions - Use a simple regular expression to check if each reviewEmail is valid.
let regexp = /@./; //checks to see if the email has an @ and followed by a "."

for (let movie of movies) {
    let str = movie.getReviewEmail(); 
    let result = regexp.test(str);

    console.log(`${str} is ${result}`);    
}

//REFLECTION: 
//What are array methods, and how did you use them in this assignment?
//Answer: Array methods allow you to manipulate the elements in your array objects. There are many methods that are used in JS. I used the push method in this project to move my movie objects into the movies array.  

//What does your regular expression check for?
//Answer: My regular expression in my project checks to make sure the email address contains the @ and then a ".".

//How does try/catch help prevent errors in your program?
//Answer: The try/catch helps prevent errors in your program by ensuring only "good" data is logged and the program continues to run smoothly. 
// For example, when testing my program, it printed the information for War of Worlds even though it did not contain a valid email. 
// However, after adding the error handling to the loop that created the movie objects, it now prints "Error: War of the Worlds is missing an email!". 
// With that said, the error handling did its job by preventing bad data from being added to the array and moving on to the next valid object.

//One Last Addition: Include one console.log() that displays a message about one of your movies (for example, your favorite movie or highest rated movie). In your comments, explain what this message prints and how your code determines it.
console.log(`${movies[2].title} is the highest rated movie with a rating of ${movies[2].rating}.`);

//This message prints the highest rate movie in the array object. It prints the second array object and its title which is The Dark Night and it is rating of 9.
