# Autovance Server Code Challenge - April 2021

> Welcome and good luck!

**This challenge is not pass / fail**. We want you to perform as well as you can in an environment where you are comfortable.

This exercise is a short simulation of the environment that we work with every day. More important than actually solving the problems, **we want to see how you go about solving problems** and learning about the technologies that are essential in your job.

The goal of this challenge is to exhibit your working knowledge of Javascript, Postgres, Docker, and Git. We want you to use your problem solving and pattern recognition skills to come up with your own solution. **Throughout the process your interviewer remains as a first class resource, and is available for pair programming and any questions**. Do not hesitate to contact me at **matt@autovance.com**.

## Challenge Directions

1. Make a private clone the repo and work on your clone
   1. Click 'use this template' on the top right of the github page and create a private clone
   2. Do not fork it, as the fork will be public
2. Complete the code to achieve the described task
3. Complete a small technical write up describing what you did, in `./description.md`
4. Add **@matt-forster** to the private repository and email matt@autovance.com with your completion.

### Challenge Description

The goal is to create a working NodeJS API that runs in Docker and communicates with a Postgres database. This repo has the framework and network already created through docker, so your task is to fill out the program and run it.

#### Create an API that lists and manipulates dealership and make relationships

In the automotive industry a dealership can sell multiple vehicle makes, like Honda and Acura, often times on the same lot. We have to manage the relationship between a dealer and the vehicles available to them.

The goal is to list a set of dealers and a set of makes, and create an API to connect the two. The database will have the two models already loaded with some data. We need to create the relationship between them, and the API to manipulate that relationship.

#### Data Models

The dealer model looks like this:

```typescript
interface dealer {
  dealer_id: string (uuid);
  dealer_name: string;
}
```

The make model looks like this:

```typescript
interface make {
  make_id: string (uuid);
  make_name: string;
}
```

You will need to come up for the model that represents the relationship between the dealer and the make.

#### Deliverables

Along with a short description document describing the structure, create a set of routes that:

* Lists the available dealerships in the system
* Lists the available makes in the system
* Returns a single dealership in the system
* Lists the makes that are related to a single dealership in the system
* Creates a relationship between a dealership and a make

### Filesystem Setup

We've created two folders, one representing the JS HTTP API and one representing the database schema and data.

* `./api/index.js`: The entrypoint where you should start the API server
* `./database/database-schema.sql`: The schema file that contains the table and relation definitions

#### Docker setup

We've setup the network and image files for you in the `./api` and `./database` folders. Along with that, we've included some scripts on the root that will help run the stack:

* `docker:start`: Will pull, build and start the images.
* `docker:stop`: Will stop the containers if they are running.
* `docker:remove`: Will remove the built images. To make any changes to the built database schema (`./database/database-schema.sql`), the image needs to be __removed and rebuilt__.
* `docker:reset`: Will run the above scripts to reset if they are already running.

Some important addresses that you can use on your local host:

* API: `http://localhost:8888`
* Database: `postgres://test:test@localhost:5432/challenge`

### Required Tools

* [git](https://git-scm.com/)
* [github account](https://github.com/)
* [docker & docker compose](https://www.docker.com/products/docker-desktop)
* [nodejs](https://nodejs.org/en/) + package manager (latest)
* postgres client (to connect on your localhost and inspect the database, I recommend <https://www.pgcli.com/>)
* curl (to test your endpoints)

### Documentation, Library Recommendations

* HTTP Server Libraries: [Express](http://expressjs.com/), [Restify](http://restify.com/), [Fastify](https://www.fastify.io/)
* [NodeJS Postgres Client](https://github.com/brianc/node-postgres)
* [Postgres v10 Documentation](https://www.postgresql.org/docs/10/index.html)
* [NodeJS v14 Documentation](https://nodejs.org/dist/latest-v14.x/docs/api/)

## Other External Resources

* [Soft Skills: What should I do when starting a new job?](https://overcast.fm/+GM9ovAPgE)
* [Thoughtbot's Development Playbook](https://thoughtbot.com/playbook)
* [Hashicorp's Written Culture](https://works.hashicorp.com/articles/writing-practices-and-culture)
