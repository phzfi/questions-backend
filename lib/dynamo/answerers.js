import uuid from 'uuid/v1';
import * as db from './dynamo';

const TableName = 'answerers';

export function getAnswerers() {
  const params = {
    TableName,
    AttributesToGet: [
      'id',
      'first_name',
      'last_name',
      'end_time',
      'form',
      'answers',
    ],
  };

  return db.scan(params);
}

export function getAnswererById(id) {
  const params = {
    TableName,
    Key: {
      id,
    },
  };

  return db.get(params);
}

export function createAnswerer(args) {
  const params = {
    TableName,
    Item: {
      id: uuid(),
      first_name: args.first_name,
      last_name: args.last_name,
      start_time: args.start_time,
      end_time: args.end_time,
      form: args.form,
      answers: args.answers,
    },
  };

  return db.createItem(params);
}

export function updateAnswerer(args) {
  const params = {
    TableName,
    Key: {
      id: args.id,
    },
    ExpressionAttributeValues: {
      ':first_name': args.first_name,
      ':last_name': args.last_name,
      ':start_time': args.start_time,
      ':end_time': args.end_time,
      ':form': args.form,
      ':answers': args.answers,
    },
    UpdateExpression: 'SET first_name = :first_name, last_name = :last_name, start_time: :start_time, end_time = :end_time, form = :form, answers = :answers',
    ReturnValues: 'ALL_NEW',
  };

  return db.updateItem(params, args);
}

export function deleteAnswerer(args) {
  const params = {
    TableName,
    Key: {
      id: args.id,
    },
  };

  return db.deleteItem(params, args);
}
