# Demo App #

### What is this repository for? ###

* Demo App on top of Copilot
* 1.0.0

### How do I get set up? ###

* clone the repo
* `cd` into the folder
* run `npm install`


### Start Mongo DB
* run `mkdir data && mongod --dbpath=data`  
  In a terminal window and keep it running

### To start the application
* run `NODE_COPILOT_API=ci-gq-api.aws.conde.io gulp develop`

### For Creating a dummy user
* Open `http://localhost:3000/init`
* Dummy Userid :- `demo@demo.com`
* Dummy Password :- `welcome`

### Contribution guidelines ###

* Run `npm run pretest`
* Code review