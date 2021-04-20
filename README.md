# Autovance Server Code Challenge - April 2021

> Welcome and good luck!

**This challenege is not pass / fail**. We want you to perform as well as you can in a situation where you are comfortable.

This exersise is indicitive of problems that we deal with every day. More important than actually solving the problems, **we want to see how you go about solving and learning about the technologies that are essential in your job**. This project is a setup representative of all our projects in some way, including testing and development frameworks.
The goals of this challenege is to demonstrate your working knowledge of Docker, Javascript, and Git. We want you to use your problem solving and pattern recognition skills to come up with your own solution. Throughout the process, your interviewer remains as a first class resource, and is available for any questions.

### Challenge Directions

1.  Make a private fork the repo and work on your fork
1.  Clone and run `npm install`.
1.  Complete the code to acheive described task
1.  Complete a small technical write up describing what you did
1.  Add @matt-forster to the private fork and email matt@autovance.com with your completion.

### Challenge Description

The goal is to create a working NodeJS API that runs in Docker and communicates with a postgres database. This repo has the framework and network already created through docker, so all you have to do is fill out the programs and run them. 

#### Create an API that lists and manipulates dealership make relationships

The goal is to list a set of dealers and a set makes, and create an API to connect the two. The database will have the two models already loaded with some data, and we need to create the relationship between them, and the API to manipulate that relationship.

#### Data Models

The dealer model looks like this:

```typescript
interface dealer {
  dealer_id: string, uuid;
  dealer_name: string;
}
```

The make model looks like this:

```typescript
interface make {
  make_id: string, uuid;
  make_name: string;
}
```

You will need to come up for the model that represents the relationship between the dealer and the make.

#### Deliverables

1. A short description document describing the structure of what you want to achieve
1. A route that lists the available dealerships in the system
1. A route that lists the available makes in the system
1. A route that represents a single dealership in the system
1. A route that lists the makes that are related to a single dealership in the system
1. A route that creates a relationship between a dealership and a make

### Required Tools

*   git
*   github account
*   nodejs + npm (latest)
*   docker

### Documentation, Library Recommendations

* HTTP Server Libraries: [Express](http://expressjs.com/), [Restify](http://restify.com/), [Fastify](https://www.fastify.io/)
* [NodeJS Postgres Client](https://github.com/brianc/node-postgres) 
* [Postgres v10 Documentation](https://www.postgresql.org/docs/10/index.html)
* [NodeJS v14 Documentation](https://nodejs.org/dist/latest-v14.x/docs/api/)

## Other External Resources

*   [Soft Skills: What should I do when starting a new job?](https://overcast.fm/+GM9ovAPgE)
*   [Thoughtbot's Development Playbook](https://thoughtbot.com/playbook)
*   [Hashicorp's Written Culture](https://works.hashicorp.com/articles/writing-practices-and-culture)
