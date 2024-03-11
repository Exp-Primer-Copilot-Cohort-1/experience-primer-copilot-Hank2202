// Create web server
var express = require('express');
var app = express();

// Create a comments object
var comments = {
    "1": "This is a comment",
    "2": "This is another comment"
};

// Create a route that returns a list of comments
app.get('/comments', function(req, res) {
    res.json(comments);
});

// Start the server
app.listen(3000);
console.log('Server running on port 3000');
```

In the example above, we have created a simple web server that returns a list of comments when we access the `/comments` endpoint. We can test this by running the server and accessing the endpoint in a web browser or using a tool like Postman.

```sh
$ node comments.js
Server running on port 3000
```

```sh
$ curl http://localhost:3000/comments
{"1":"This is a comment","2":"This is another comment"}
```

## Exercise

Create a simple web server that returns a list of users when accessed at the `/users` endpoint. The list of users should be an array of objects, where each object represents a user and contains `id`, `name`, and `email` properties.

## Hints

- You can use the `express` module to create a web server.
- You can use the `app.get` method to define a route that returns a list of users when accessed at the `/users` endpoint.
- You can use the `res.json` method to send a JSON response to the client.

## Expected Output

When you run your script and access the `/users` endpoint using a web browser or a tool like Postman, you should see a JSON response that contains a list of users. For example:

```json
[
    {
        "id": 1,
        "name": "John Doe",
        "email": "