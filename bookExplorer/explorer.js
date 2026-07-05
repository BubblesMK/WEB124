//Mandisa Harris-King - Book Explorer July 5th, 2026

//Part 1: Book Data - 1. Create an array of at least 5 book objects. Each book should have a title, an author, and an amount of pages.
let bookData = [
    { title: "The House of Cross: An Alex Cross Thriller", author: "James Patterson", pages: 416 },
    { title: "Brain Damage", author: "Freida McFadden", pages: 398 },
    { title: "Alex Cross", author: "James Patterson", pages: 393 },
    { title: "Iron House", author: "John Hart", pages: 432 },
    { title: "The Murder Inn", author: "James Patterson", pages: 464}
];

//Part 2: Console Output - 1. Loop through your book array and display everything in the console.
for (let book of bookData) {
    console.log(`${book.title} was written by ${book.author} and has ${book.pages} pages.`);
}

//Part 3: DOM Tree Exploration
console.log(document); //the entire document
console.log(document.body); //the body
console.log(document.body.firstElementChild); //first child of body -- h1
console.log(document.body.children); // all children of body - h1, p, ul, script

//Part 4: Walking the DOM - Using your HTML structure, access and print to the console (hint: you can start from document.body and use .children to move through the DOM):
console.log(document.body); //prints the body
console.log(document.body.children); //list all of the children elements
console.log(document.body.children[2]); // the <ul> element
console.log(document.body.children[2].children[0]); // one of the <li> elements
console.log(document.body.children[2].children[0].parentElement); // the parent of that <li>
console.log(document.body.children[2].children[0].nextElementSibling); // a sibling of that <li> (hint: .nextElementSibling)

//Part 5: Node Properties -- Use node properties to print to the console:

//display the text inside one of your <li> elements
let text = document.body.children[2].children[3]; // 
console.log(text.textContent); // Alex Cross

//display the type of a node (for example, element or text)
let elem = document.body.firstChild; 
console.log(elem.nodeType); // 3 = for text node

//Part 6: Styles & Classes - Use JS to access that element and print its class name (className) to the console (hint: you could use something like .children to access the element)
console.log(document.body.className); // .children

//Reflection Questions:

//What is the DOM tree?
//Answer: The DOM or Document Object Model tree is the backbone of the html document page. The DOM represents all of the contents on the page and are considered as objects.

//What is a node in the DOM?
//Answer: A node is an object that is part of the DOM tree. For example, the <div>, <head>, <body> are examples of a node. Also, the text inside the elements are considered text nodes.  

//What is the difference between a parent and a child node?
//Answer: A child node is nested inside a parent. For example, the parent node would be <div> and the child of the <div> would be <p>. 

//What is a sibling node?
//A sibiling node is the relationship between nodes that share the same parent. For example, <div> would be the parent and the children would be <h1> and <p>. <h1> and <p> would be sibling nodes because they share the same parent.