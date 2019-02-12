import uuid from 'uuid/v1';
import * as db from './dynamo';

const TableName = 'questions';

export function getQuestions() {
  const params = {
    TableName,
    AttributesToGet: [
      'id',
      'sort_order',
      'content',
      'published',
      'type',
      'score',
      'question_options',
    ],
  };

  return db.scan(params);
}

export function getPublishedQuestions() {
  const params = {
    TableName,
    FilterExpression: 'published = :published',
    ExpressionAttributeValues: { ':published': true },
  };

  return db.scan(params);
}

export function getPublishedQuestionById(id) {
  const params = {
    TableName,
    FilterExpression: 'published = :published',
    ExpressionAttributeValues: { ':published': true },
    Key: {
      id,
    },
  };

  return db.scan(params);
}

export function getQuestionById(id) {
  const params = {
    TableName,
    Key: {
      id,
    },
  };

  return db.get(params);
}

export function getQuestionsByFormId(formId) {
  const params = {
    TableName,
    FilterExpression: 'form = :form_id',
    ExpressionAttributeValues: { ':form_id': formId },
  };

  return db.scan(params);
}

export function getPublishedQuestionsByFormId(formId) {
  const params = {
    TableName,
    FilterExpression: 'form = :form_id, published = :published',
    ExpressionAttributeValues: { ':form_id': formId, ':published': true },
  };

  return db.scan(params);
}

export function createQuestion(args) {
  const params = {
    TableName,
    Item: {
      id: uuid(),
      sort_order: args.sort_order,
      content: args.content,
      published: args.published,
      type: args.type,
      score: args.score,
      question_options: args.question_options,
    },
  };

  return db.createItem(params);
}

export function updateQuestion(args) {
  const params = {
    TableName,
    Key: {
      id: args.id,
    },
    ExpressionAttributeValues: {
      ':sort_order': args.sort_order,
      ':content': args.content,
      ':published': args.published,
      ':type': args.type,
      ':score': args.score,
      ':question_options': args.question_options,
    },
    UpdateExpression: 'SET sort_order = :sort_order, content = :content, published = :published, type = :type, score = :score, question_options = :question_options',
    ReturnValues: 'ALL_NEW',
  };

  return db.updateItem(params, args);
}

export function deleteQuestion(args) {
  const params = {
    TableName,
    Key: {
      id: args.id,
    },
  };

  return db.deleteItem(params, args);
}
