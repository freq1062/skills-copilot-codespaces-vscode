// Create web server

// Import the express module
const express = require('express');

// Create an express application
const app = express();

// Use the public directory to serve static files
app.use(express.static('public'));

// Use the comments.json file to serve JSON data
app.use(express.json());

// Import the fs module
const fs = require('fs');

// Create a route to get all comments
app.get('/comments', (req, res) => {
    // Read the comments.json file
    fs.readFile('comments.json', 'utf8', (err, data) => {
        // If an error occurred
        if (err) {
            // Log the error
            console.error(err);
            // Send a 500 status code
            res.status(500);
            // Send an error message
            res.send('An error occurred');
            // End the request
            return;
        }

        // Parse the JSON data
        const comments = JSON.parse(data);

        // Send the comments as a JSON response
        res.json(comments);
    });
});

// Create a route to post a comment
app.post('/comments', (req, res) => {
    // Read the comments.json file
    fs.readFile('comments.json', 'utf8', (err, data) => {
        // If an error occurred
        if (err) {
            // Log the error
            console.error(err);
            // Send a 500 status code
            res.status(500);
            // Send an error message
            res.send('An error occurred');
            // End the request
            return;
        }

        // Parse the JSON data
        const comments = JSON.parse(data);

        // Get the comment from the request body
        const comment = req.body;

        // Add the comment to the comments array
        comments.push(comment);

        // Write the comments array to the comments.json file
        fs.writeFile('comments.json', JSON.stringify(comments, null, 2), (err) => {
            // If an error occurred
            if (err) {
                // Log the error
                console.error(err);
                // Send a 500 status code
                res.status(500);
                // Send an error message
                res.send('An error occurred');
                // End the request
                return;
            }

            // Send a 201 status code
            res.status(201);
            // Send a success message
                        res.send('Comment added');
                    });
                });
            });