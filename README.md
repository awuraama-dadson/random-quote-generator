# Random Quote Generator

A simple Random Quote Generator built with HTML, CSS, and JavaScript. This project fetches random inspirational quotes from an external API and displays them on a webpage.

## Overview

This project was created as a practical exercise to understand how to fetch data from an API using JavaScript's Fetch API, work with asynchronous functions, and display retrieved data dynamically on a webpage.

## Features

- Fetches random quotes from an external API.
- Displays quotes dynamically on the webpage.
- Handles unsuccessful HTTP responses.
- Uses async/await for asynchronous operations.
- Includes basic error handling with try/catch.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Fetch API
- [DummyJSON Quotes API](https://dummyjson.com/quotes/random)

## How It Works

1. JavaScript sends a request to the DummyJSON Quotes API using `fetch()`.
2. The response is checked to ensure the request was successful.
3. The JSON response is converted into a JavaScript object.
4. The quote is extracted from the returned data.
5. The quote is displayed dynamically on the webpage.

## Getting Started

To run this project locally:

1. Clone this repository:

   ```bash
   git clone YOUR-REPOSITORY-URL
   ```

2. Open the project folder in your code editor.
3. Open `index.html` in your browser.

## What I Learned

Through this project, I practised:

- Making HTTP requests using the Fetch API.
- Understanding promises and asynchronous JavaScript.
- Working with async/await.
- Converting JSON responses into JavaScript objects.
- Accessing object properties.
- Updating HTML elements using DOM manipulation.
- Handling errors using try/catch.

## Future Improvements

- Add a button to fetch a new quote on demand.
- Display the quote author's name.
- Add a loading indicator while fetching data.
- Improve the user interface and responsiveness.

---

## Live site

https://random-quote-generator-six-peach.vercel.app/
Built as part of my journey learning JavaScript and frontend development.
