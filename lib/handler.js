import { graphqlLambda } from "graphql-server-lambda";
import { makeExecutableSchema } from "graphql-tools";
import { mergeResolvers, mergeTypes } from "merge-graphql-schemas";
import axios from "axios";

// Auth Types
import authAnswerType from "./data/auth/types/answer";
import authAnswererType from "./data/auth/types/answerer";
import authFormType from "./data/auth/types/form";
import authQuestionType from "./data/auth/types/question";
import authQuestionOptionType from "./data/auth/types/questionOption";

// Public Types
import publicAnswerType from "./data/public/types/answer";
import publicAnswererType from "./data/public/types/answerer";
import publicFormType from "./data/public/types/form";
import publicQuestionType from "./data/public/types/question";
import publicQuestionOptionType from "./data/public/types/questionOption";

// Auth Resolvers
import authAnswerResolver from "./data/auth/resolvers/answer";
import authAnswererResolver from "./data/auth/resolvers/answerer";
import authFormResolver from "./data/auth/resolvers/form";
import authQuestionResolver from "./data/auth/resolvers/question";
import authQuestionOptionResolver from "./data/auth/resolvers/questionOption";

// Public Resolvers
import publicAnswerResolver from "./data/public/resolvers/answer";
import publicAnswererResolver from "./data/public/resolvers/answerer";
import publicFormResolver from "./data/public/resolvers/form";
import publicQuestionResolver from "./data/public/resolvers/question";
import publicQuestionOptionResolver from "./data/public/resolvers/questionOption";

/**
 * TypeDefs
 */
const authTypeDefs = mergeTypes([
  authAnswerType,
  authAnswererType,
  authFormType,
  authQuestionType,
  authQuestionOptionType
]);
const publicTypeDefs = mergeTypes([
  publicAnswerType,
  publicAnswererType,
  publicFormType,
  publicQuestionType,
  publicQuestionOptionType
]);

/**
 * Resolvers
 */
const authResolvers = mergeResolvers([
  authAnswerResolver,
  authAnswererResolver,
  authFormResolver,
  authQuestionResolver,
  authQuestionOptionResolver
]);
const publicResolvers = mergeResolvers([
  publicAnswerResolver,
  publicAnswererResolver,
  publicFormResolver,
  publicQuestionResolver,
  publicQuestionOptionResolver
]);

const authSchema = makeExecutableSchema({
  typeDefs: authTypeDefs,
  resolvers: authResolvers
});

const publicSchema = makeExecutableSchema({
  typeDefs: publicTypeDefs,
  resolvers: publicResolvers
});

exports.graphqlAuth = (event, context, callback) => {
  const callbackFilter = (error, output) => {
    const outputWithHeader = Object.assign({}, output, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
      }
    });
    callback(error, outputWithHeader);
  };

  graphqlLambda({ schema: authSchema })(event, context, callbackFilter);
};

exports.graphqlPublic = (event, context, callback) => {
  const callbackFilter = (error, output) => {
    const outputWithHeader = Object.assign({}, output, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
      }
    });
    callback(error, outputWithHeader);
  };

  graphqlLambda({ schema: publicSchema })(event, context, callbackFilter);
};

exports.record = (event, context, callback) => {
  event.Records.forEach(record => {
    console.log(record.eventID);
    console.log(record.eventName);
    console.log("DynamoDB Record: %j", record.dynamodb);
  });
  callback(null, `Successfully processed ${event.Records.length} records.`);
};

const generatePolicy = (principalId, effect, resource) => {
  const authResponse = {};
  authResponse.principalId = principalId;
  if (effect && resource) {
    const policyDocument = {};
    policyDocument.Version = "2012-10-17";
    policyDocument.Statement = [];
    const statementOne = {};
    statementOne.Action = "execute-api:Invoke";
    statementOne.Effect = effect;
    statementOne.Resource = resource;
    policyDocument.Statement[0] = statementOne;
    authResponse.policyDocument = policyDocument;
  }
  return authResponse;
};

exports.auth = (event, context, callback) => {
  console.log("event", event);
  console.log("context", context);

  if (!event.authorizationToken) {
    console.log("No authorization token");
    callback("Unauthorized");
  }

  const tokenParts = event.authorizationToken.split(" ");
  const tokenValue = tokenParts[1];

  if (!(tokenParts[0].toLowerCase() === "bearer" && tokenValue)) {
    // no auth token!
    console.log("No authorization token");
    callback("Unauthorized");
  } else {
    axios({
      method: "GET",
      url: "<INSERT YOUR API URL HERE>",
      headers: { Authorization: `Bearer ${tokenValue}` }
    })
      .then(response => {
        callback(
          null,
          generatePolicy(response.data.user.ID, "Allow", event.methodArn)
        );
      })
      .catch(() => {
        callback("Unauthorized");
      });
  }
};
