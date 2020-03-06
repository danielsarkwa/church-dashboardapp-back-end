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
        * Involves creating the dynamoDB to hold all the data

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