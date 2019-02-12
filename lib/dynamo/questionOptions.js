import uuid from 'uuid/v1';
import * as db from './dynamo';

const TableName = 'question_options';

export function getQuestionOptions() {
  const params = {
    TableName,
    AttributesToGet: [
      'id',
      'sort_order',
      'text',
      'score',
    ],
  };

  return db.scan(params);
}

export function getQuestionOptionById(id) {
  const params = {
    TableName,
    Key: {
      id,
    },
  };

  return db.get(params);
}

export function getQuestionOptionsByQuestion(questionId) {
  const params = {
    TableName,
    FilterExpression: 'question = :question_id',
    ExpressionAttributeValues: { ':question_id': questionId },
  };

  return db.scan(params);
}

export function createQuestionOption(args) {
  const params = {
    TableName,
    Item: {
      id: uuid(),
      sort_order: args.sort_order,
      text: args.text,
      score: args.score,
    },
  };

  return db.createItem(params);
}

export function updateQuestionOption(args) {
  const params = {
    TableName,
    Key: {
      id: args.id,
    },
    ExpressionAttributeValues: {
      ':sort_order': args.sort_order,
      ':text': args.text,
      ':score': args.score,
    },
    UpdateExpression: 'SET sort_order = :sort_order, text = :text, score = :score',
    ReturnValues: 'ALL_NEW',
  };

  return db.updateItem(params, args);
}

export function deleteQuestionOption(args) {
  const params = {
    TableName,
    Key: {
      id: args.id,
    },
  };

  return db.deleteItem(params, args);
}
