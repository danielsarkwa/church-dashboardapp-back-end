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
    - Implement the full requests handling endpoints for the use cases
        * Implement the POST
            - make all the entry dto classes optional which will be required by the front-end
            - create the controller
            - create the service methods to reach to the data-model and return a sample data

        * Implement the Get
            - Get folders
                - create the controller
                - create the service methods to reach to the data-model and return a sample data
            - Get lists
                - create the controller
                - create the service methods to reach to the data-model and return a sample data
            - Get details
                - create the controller
                - create the service methods to reach to the data-model and return a sample data
        
        * Implement the Put
            - make all the entry dto classes optional which will be required by the front-end
            - creat the algorithm that builds the object of the data to be updated to send to the dataDriver to communicate with the database
        
        * Implement the Delete


## TODO - 2 (Drivers)
    - Implement the SERVICE class that writes data to database
        * Post data to database
        * Put data on database
    
    - Implement the service class that gets data from database
        ( ---- DynamoDB tables ----
            [SERMONS TABLE]
            [PODCASTS TABLE]
            [EVENTS TABLE]
            [ARTICLES TABLE]
            [FEEDS TABLE]
            [EVENTS TABLE]
            [ANNOUNCEMEMTS TABLE]
            [USERS TABLE]
            [ADMINS TABLE]
            ( --- will change later ---
                [USER FEEDBACKS TABLE]
                [SUGGESTIONS TABLE]
                [FAQ TABLE]
            )
        )
        (data will be loaded in pacs to the front-end -- and so the front-end will have to provide the last item for the app to load another pac from there)
        (non-predictable things ----- with comments, replys, messages, they will be loaded in the lastest five and then be loaded as more)
        - folder
            * folder list
            * folder details
        - Entity
            * entity list
            * entity details

## TODO -3 (Documentation)
    - Creata a personal documentation for future projects
    - Create a business documentation for this application

## TODO - 4 (Cloud Functions)