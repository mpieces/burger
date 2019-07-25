# Eat-da-burger
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
  * [Screenshots](#sceenshots)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

## About The Project
This is a burger logger using MySQL, Node, Express, Handlebars and an ORM. It is designed using the MVC design pattern; it uses Node and MySQL to query and route data, and Handlebars to generate the HTML.

Users of the app can create a burger and add it to a database, then devour the burger, which updates the devoured state in the database. After updating the state, the DOM will be updated to display the results on the webpage.

The file structure is set up like the following:
```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```

### Built With
* HTML
* CSS
* [Bootstrap](https://getbootstrap.com/)
* JavaScript
* [jQuery](https://jquery.com/)
* [Node.js](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/)
* [MySQL](https://expressjs.com/)
* [Express](https://expressjs.com/)
* [Express-Handlebars](https://handlebarsjs.com/)
* ORM
* MVC


## Getting Started

### Prerequisites
* A web browser to display the application


### Installation  
No installation is required.


## Usage
1. Visit  the [app website]()
2. In the form field, enter a burger name.
3. Click `Add a Burger` to add a burger to the ORM model and display it on the DOM.
4. Click `Devour this!` below a burger to devour it, and watch it move to the devoured list.


### Screenshots
![burger_screenshot](public/assets/img/burger_screen.png)


## Contact
Marisa Ramon - [LinkedIn](https://www.linkedin.com/in/marisaramon/) - mer0522@gmail.com
Project Link: [burger repo](https://github.com/mpieces/burger)


## Acknowledgements
* [npm](https://www.npmjs.com/)
* [heroku](https://www.heroku.com/)

