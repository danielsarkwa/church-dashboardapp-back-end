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
    - set up Aws role to use the aws services and resources
        - Create an IAM role for the EC2

    - Implement the database on aws to hold live data
        ( ---- DynamoDB tables ----
            [SERMONS TABLE]
            [PODCASTS TABLE]
            [EVENTS TABLE]
            [ARTICLES TABLE]
            [FEEDS TABLE]
            [EVENTS TABLE]
            [ANNOUNCEMEMTS TABLE]
            [USERS TABLE] --- TAG (User & Admin)
            ( --- will change later ---
                [RESPONSE TABLE] --- tag(users feedback, suggestions, faq)
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
            [USERS TABLE] --- TAG (User & Admin)
            ( --- will change later ---
                [RESPONSE TABLE] --- tag(users feedback, suggestions, faq)
            )
        )
        (data will be loaded in pacs to the front-end -- and so the front-end will have to provide the last item for the app to load another pac from there)
        (non-predictable things ----- with comments, replys, messages, they will be loaded in the lastest five and then be loaded as more in the form of pages -- therefore the front-end will send the page number)

        - folder
            * folder list (sermons, podcasts, articles, messages)
            * folder details
        - Entity
            * entity list (sermons, podcasts, articles, messages, comments, announcements, events)
            * entity details(sermon, podcast, article, message, comment, announcement, event)

## TODO -3 (Documentation)
    - Creata a personal documentation for future projects
    - Create a business documentation for this application


## TODO - 4 (Cloud Functions)
    - add push notification on uploading item
    - add authentication
    - email notification on creating account