# Review Questions

## What is Node.js?

NodeJS is a platform used to run programs outside the browser allowing developers to write programs that run on different operating systems. Using NodeJS to write server code allows us to use the same language for the client and the server. It has asynchronous behavior and gives us access to npm modules.

## What is Express?

Express is a NodeJS module that adds functionality to NodeJS by enabling routing, middleware, and a simpler API. It allows us to create web applications and services much more efficiently and with a lot of flexibility.

## Mention two parts of Express that you learned about this week.

We learned about Express middleware and how it can extend the functionality and features of Express. This middleware is included with express but isn't included in our application automatically; we need to call is with `use()`. We can also use third party middleware or write our own custom middleware for use with express.

We also learned about the routing feature of Express and how it is used to build endpoints for CRUD operations. In Express routing, express executes a request handler with a corresponding URL and can return a string with valid HTTP.

## What is Middleware?

Middleware is the name for functions that the request and response objects pass through and it can mutate those objects, stop the flow of those objects, or call the next middleware.

## What is a Resource?

A resource is a point from where we pull our data. We are able to execute CRUD operations on a resource via endpoints. When building RESTful APIs, everything is a resource accessible via a unique URL, which can have multiple representations and be managed using HTTP methods.

## What can the API return to help clients know if a request was successful?

The API can return a 200 OK status code which indicates success.

## How can we partition our application into sub-applications?

We can use Express Routers to break our application into sub-applications, making it easier to maintain and navigate.

## What is express.json() and why do we need it?

express.json() is part of Express's built in middleware which allows us to parse json content out of the request body.
