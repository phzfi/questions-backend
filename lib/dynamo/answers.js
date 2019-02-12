import uuid from 'uuid/v1';
import * as db from './dynamo';

const TableName = 'answers';

export function getAnswers() {
  const params = {
    TableName,
    AttributesToGet: [
      'id',
      'question',
      'question_options',
      'text',
    ],
  };

  return db.scan(params);
}

export function getAnswerById(id) {
  const params = {
    TableName,
    Key: {
      id,
    },
  };

  return db.get(params);
}

export function getAnswersByAnswerer(answererId) {
  const params = {
    TableName,
    FilterExpression: 'answerer = :answerer_id',
    ExpressionAttributeValues: { ':answerer_id': answererId },
  };

  return db.scan(params);
}

export function createAnswer(args) {
  const params = {
    TableName,
    Item: {
      id: uuid(),
      question: args.question,
      question_option: args.question_option,
      text: args.text,
    },
  };

  return db.createItem(params);
}

export function updateAnswer(args) {
  const params = {
    TableName,
    Key: {
      id: args.id,
    },
    ExpressionAttributeValues: {
      ':id': uuid(),
      ':question': args.question,
      ':question_options': args.question_options,
      ':text': args.text,
    },
    UpdateExpression: 'SET question = :question, question_options = :question_options, text = :text',
    ReturnValues: 'ALL_NEW',
  };

  return db.updateItem(params, args);
}

export function deleteAnswer(args) {
  const params = {
    TableName,
    Key: {
      id: args.id,
    },
  };

  return db.deleteItem(params, args);
}
