author: Lennart Takanen & Kristian Lauttamus

# Serverless GraphQL API using Lambda and DynamoDB

[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)
[![Build Status](https://travis-ci.org/boazdejong/serverless-graphql-api.svg?branch=master)](https://travis-ci.org/boazdejong/serverless-graphql-api)

GraphQL Lambda Server using [graphql-server-lambda](https://github.com/apollographql/graphql-server/tree/master/packages/graphql-server-lambda) from [Apollo](http://dev.apollodata.com/).

[graphql-tools](https://github.com/apollographql/graphql-tools) and [merge-graphql-schemas](https://github.com/okgrow/merge-graphql-schemas) are used to generate the schema.

[serverless-webpack](https://github.com/elastic-coders/serverless-webpack) is used to transform ES6 with [Babel](https://babeljs.io/) and build the lambda.

## Setup

Clone the repository and install the packages.

```
git clone https://github.com/phzfi/questions-backend.git
cd questions-backend
npm install
```

## Deploy

Run the `deploy` script to create the Lambda Function and API Gateway for GraphQL. This also creates two DynamoDB tables named `artists` and `songs`

```
npm run deploy
```

## Queries and Mutations

Query the GraphQL server using the [GraphiQL.app](https://github.com/skevy/graphiql-app). If you have Homebrew installed on OSX run

```
brew cask install graphiql
```
