# Part 1 - Express Basics

This part contains my initial backend practice using Node.js and Express.

## Basic Concepts

npm (Node Package Manager)  
npm is a package manager used to install and manage Node.js packages and dependencies.

init (initialize)  
Initialize means starting or setting up something for the first time.

npm init  
`npm init` is used to initialize a new Node.js project and create a package.json file.

scripts  
Scripts are commands defined in package.json that help run tasks like starting the server.

Example:

"scripts": {
  "start": "node index.js"
}

Run command:

npm run start

## Important Files

package.json  
package.json is a file that stores information about the project such as:

- project name
- version
- scripts
- dependencies
- author and other metadata


.gitignore  
.gitignore is used to tell Git which files or folders should not be uploaded to GitHub.

Example:

node_modules
.env

## Callback Function

A callback function is a function that is passed as an argument to another function and is executed later.

Example in Express:

app.get('/', (req, res) => {
    res.send("Hello World");
});

Here the function (req, res) => { res.send("Hello World"); } is a callback function that runs when someone visits the "/" route.