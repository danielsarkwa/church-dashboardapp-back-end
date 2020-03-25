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


## TODO - (Use case and entity)
    - Done


## TODO - (Drivers)
    - Done


## TODO - (Data Manipulation)
    - querying data
        - pagination - get all
            * comments
            * messages
            * users
            * articles
            * sermons
            * podcasts
            * feeds
            * events
            * announcements
            * help-support
        - search
            * users
            * articles
            * sermons
            * podcasts
            * events
            * announcements
            * help-support
            * folders
            * messages
    - involves working with streams and websockets like feature
    - set up application logging system for exceptions


## TODO - (Cloud Functions & AWS)
    - add authentication with cognito
    - deploy database (aws documentDB || mongodb atlas)
    - add push notification on uploading item
        - working with lambda function
        - working with SNS || aws polifil (use sms for testing purpose and connect to mobile app later)
    - email notification on creating account
        - working with SES
    - app configuration


## TODO - (Documentation)
    - Creata a personal documentation for future projects
    - Create a business documentation for this application