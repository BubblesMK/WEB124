//Mandisa Harris Browser Info Dashboard Assignment July 19th, 2026

//Part 1 - Display the following information on the page or in the console:
//1. The current page URL using the Location object
//2. The browser language and whether the browser is online or not using the Navigator object
//3. The screen width and height using the Screen object

let currentURL = "The current page URL is: " + window.location.href + ".";
console.log(currentURL);

let browserLang = "The browser language is: " + navigator.language + " and the browser is online: " + navigator.onLine + ".";
console.log(browserLang);

let screenMeasurements = "The screen width is: " + screen.width + "." + " The screen height is: " + screen.height + ".";
console.log(screenMeasurements);

//Part 2 - Part 2: Window information
//Display the following information in the console:
//1. The width of the browser window
//2. The height of the browser window

let wh = "The browsers inner width is: " + window.innerWidth + "." + " The browsers inner height is: " + window.innerHeight + ".";
console.log(wh);

//Part 3: Form Properties
//3a. Use JavaScript to access your form using document.forms.
let form = document.forms.dashboard_form;

//3b. Use JavaScript to access the form fields using either: form.elements or shorter form.fieldName
let username = form.elements.username;
let website = form.elements.fav_website;

//3c. When the form is submitted:    
// - Prevent the page from reloading.      
// - Use .value to retrieve the information entered by the user.     
// - Display the user's name and favorite website on the page.

form.addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('outputmsg').textContent = `Your username is ${username.value} and your favorite website is ${website.value}.`

    //Part 5: URL Objects 
    // 1. Create a URL object using your favorite website entered in the form (hint: Make sure the website entered includes https://). 
    // 2. Display the following information from the URL object:
        // - hostname
        // - protocol
        // - pathname 
    // Display the information on the page or in the console.
    let url = new URL(website.value);

    console.log(url.hostname);
    console.log(url.protocol);
    console.log(url.pathname);

    //Part 6: Local Storage 
    // 1. Save the user's name to localStorage using setItem(). 
    // 2. Retrieve the stored value using getItem(). 
    // 3. Display the retrieved value in the console.

    localStorage.setItem('userName', username.value);
    console.log(localStorage.getItem('userName'));

    //Part 7: Session Storage 
    // 1. Save the user's favorite website to sessionStorage using setItem(). 
    // 2. Retrieve the stored value using getItem(). 
    // 3. Display the retrieved value in the console.

    sessionStorage.setItem('favoriteWeb', website.value);
    console.log(sessionStorage.getItem('favoriteWeb'));
});

//Part 4: Focus & Blur 
// 1. Create a focus event for the name field. When the field receives focus, display a message in the console indicating that the field was selected. 
// 2. Create a blur event for the same field. When the field loses focus, display a message in the console indicating that the field was left.
username.addEventListener("focus", () => {
    console.log('You have selected to enter your username.');
});

username.addEventListener("blur", () => {
    console.log('You have unselected the username field.');
});


//Part 8: History Object 
// 1. Add two buttons to your HTML page-- one labeled "Forward" and one labeled "Back". 
// 2. Go back to your .js file. When the back button is clicked, use the History object to navigate backward. 
// 3. When the forward button is clicked, use the History object to navigate forward. 
// 4. Display a message in the console when each button is clicked.

let goBack = document.getElementById('backBtn');
let goForward = document.getElementById('forwardBtn');

goBack.addEventListener('click', function() {
    window.history.back();
    console.log('User clicked the back button.');
});

goForward.addEventListener('click', function() {
    window.history.forward();
    console.log('User clicked the forward button.');
});

//Reflection 
// What is the difference between localStorage and sessionStorage? 
// Answer: The difference between localStorage and sessionStorage is that localStorage data is stored and saved when the page is refreshed and restarted. 
// However, sessionStorage will only store data for that particular session and does not survive a page restart.
//
// What information can the Navigator object provide? 
// Answer: The Navigator object provides information about the vistors browser. 
// 
// What happens when an input field receives focus?
// Answer: The input element containing the focus is preparing to accept data. 
// 
// Why might a website use a URL object?
// Answer:  A website might use a URL object because it makes parsing, building, and modifying URLs easier and safer. 












