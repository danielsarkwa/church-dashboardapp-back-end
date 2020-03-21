## Description

This is the app to work as the admin app dashboard

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


## TODO - 1 (Use case and entity)
    - Done


## TODO - 2 (Drivers)
    - Implement the database on aws to hold live data
        (
            [USERS Model] --- TAG (User & Admin)
            [APP-REVIEW Model] --- tag(users feedback, suggestions, faq)
            [MESSAGES Model] -- will always reference to the entity using the id
            [COMMENTS Model] -- will always reference to the entity using the id
        ) 

    - Implement the SERVICE class that writes data to database
        * Post data to database
        * Put data on database
        * delete data from database
        * get data from database
    
    - Implement the service class that gets data from database
        (
            [USERS Model] --- TAG (User & Admin)
            [APP-REVIEW Model] --- tag(users feedback, suggestions, faq)
            [MESSAGES Model] -- will always reference to the entity using the id
            [COMMENTS Model] -- will always reference to the entity using the id
        ) 
        (data will be loaded in pacs to the front-end -- and so the front-end will have to provide the last item for the app to load another pac from there)
        (non-predictable things ----- with comments, replys, messages, they will be loaded in the lastest five and then be loaded as more in the form of pages -- therefore the front-end will send the page number)

        - Entity
            * entity list (messages, comments, users, admins, helpandSupport)
            * entity details(message, comment, users, admins, helpandSupport)


## TODO -3 (Documentation)
    - Creata a personal documentation for future projects
    - Create a business documentation for this application


## TODO - 4 (Cloud Functions)
    - app configuration
    - add push notification on uploading item
    - add authentication
    - email notification on creating account