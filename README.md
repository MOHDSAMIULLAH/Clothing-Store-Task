# Fashion E-Commerce Store

This project is a simple fashion e-commerce store built with JavaScript, HTML, and CSS. It features a collection of fashion items that users can browse. Each item is displayed with an image, name, and price. The project can be extended to include more features such as a shopping cart, search functionality, and integration with a backend database like MongoDB.

## Deployed Link: https://clothing-store-task.vercel.app/

### Task Overview:
- *Objective:* Design a page for an e-commerce website selling clothing, with a dynamic search bar that displays relevant clothing items as the user types, without requiring an "Enter" button. The search results appear when the character count exceeds three letters, with suggestions displayed from the first character.
- *Frontend Technologies:* Plain JavaScript, Tailwind CSS
- *Backend Technologies:* Node.js, Express, MongoDB

### Key Features Implemented:
1. *Dynamic Search:*
   - The search bar listens for user input and displays relevant suggestions immediately after the first character is typed.
   - Full search results are displayed once the user has typed more than three characters.
  
2. *Interactive Suggestions:*
   - Suggestions are shown in a dropdown below the search bar and are clickable to allow the user to quickly select and populate the search input.
   - The suggestion list is hidden if the user clicks outside the search input or suggestions.

3. *Responsive UI:*
   - Tailwind CSS is used to ensure a responsive and visually appealing layout, with results displayed in a grid format suitable for various screen sizes.

### Instructions to Run:
1. *Backend:*
   - Set up the Node.js environment and install necessary packages (express, mongoose, cors).
   - Start the server using node server.js.
   - The server listens for search requests and retrieves matching items from MongoDB based on user input.

2. *Frontend:*
   - Open the index.html file in your browser.
   - Begin typing in the search bar to see dynamic suggestions and results.

## Features

- Display a collection of fashion items with images, names, and prices.
- Responsive design for better viewing on different devices.

## Project Structure

- *index.html*: The main HTML file that renders the web page.
- *app.js*: The JavaScript file that handles the logic for rendering the items and managing user interactions.


## Usage

1. Clone this repository to your local machine:

bash
git clone https://github.com/MOHDSAMIULLAH/Clothing-Store-Task.git


2. Open the project directory:

bash
cd fashion-ecommerce-store


3. Open index.html in your web browser to view the store.


## Contact

For any inquiries or feedback, please contact [Mohd Samiullah](mailto:samiullah0813@gmail.com).