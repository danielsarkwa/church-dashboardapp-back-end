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


## TODO - (Cloud Functions & AWS)
    - deploy database (aws documentDB || mongodb atlas)
    - add push notification on uploaded items
        - working with lambda function
        - working with SNS || aws polifil (use sms for testing purpose and connect to mobile app later)
        - email notification
            - working with SES
            - on creating admin account
            - on all users email notification
    - add authentication with cognito
    - app configuration