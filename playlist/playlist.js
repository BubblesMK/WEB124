//Mandisa Harris July 12th, 2026: Playlist Assignment

//Part 1: Selecting Elements - 
//1. Use getElementById() to access the element on your page with an ID.
//2. Use querySelector() to access the paragraph element on your page.
//3. Display both elements in the console.

let elem = document.getElementById('button');
console.log(elem);

let elemP = document.querySelector('p');
console.log(elemP);

//Part 2: Browser Events
//Create a click event for the button.
//2. When the user clicks the button:
//    - Change the heading text.
//    - Change the paragraph text.
//    - Log a message to the console saying the button was clicked.
elem.addEventListener('click', function() {
    let headText = document.querySelector('h1');

    headText.textContent = "My Top 6 Favorite Songs";
    elemP.textContent = "I listen to these songs when I just want to chill!"; //the p element changes

    console.log('The button was clicked!');
});

//Part 3: Event Bubbling
//1. Create a click event for both:  the button & - the parent <div>
//2. Use separate console messages in both event handlers to show that clicking the button also triggers the parent <div> event.
let parentDiv = document.querySelector('div');

parentDiv.addEventListener('click', function() {
    console.log('The button was clicked but it also triggered the parent element. That is why you are seeing this message. This is called bubbling.');
});

elem.addEventListener('click', function() {
    console.log('The button was clicked! Since the click traveled up to the parent div then that is why you are seeing this message.')
});

//Part 4: Event Delegation
//1. Add one click event listener to the <ul> element.
//2. When a user clicks any song title (<li>), display the text of the clicked song in the console. (hint: use the event object's target property to determine which song was clicked)

let songList = document.querySelector('ul');

songList.addEventListener('click', function(e) {
    console.log(e.target.textContent);
});

//Part 5: Browser Defaults
//1. You created a link on your HTML page to the JCCC website. When the link is clicked:
//     - Prevent the browser from navigating away from the page.
//     - Display a console message stating that the default action was prevented.

let link = document.querySelector('a');

link.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('The default action was prevented. You were not taken to the JCCC website.');
});

//REFLECTION QUESTIONS
//What is the difference between getElementById() and querySelector()?
//Answer: getElementById() gets an element by its unique assigned ID and it can be only called on the document. querySelector is more versatile by allowing you to access elements by class name, ID, and/or element tag. 

//What is event bubbling?
//Answer: Event bubbling is when the most nested or inner event is triggered and it travels up throught its parent element. 

//What is event delegation?
//Answer: Capturing and bubbling allows us to use a powerful handling pattern -- event delegation. Event delegation allows us to group the same elements together that contain the same event handler into one. 

//Why would someone want to use preventDefault()?
//Answer: Someone may want to use preventDefault if they want to stop the browser from doing something such as clicking a link that directs you to a new page. If you want the user to stay on the page, you would prevent the navigation. 