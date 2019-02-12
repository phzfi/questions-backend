import uuid from "uuid/v1";
import * as db from "./dynamo";

const TableName = "forms";

export function getForms() {
  const params = {
    TableName,
    AttributesToGet: ["id", "name", "description", "questions"]
  };

  return db.scan(params);
}

export function getFormById(id) {
  const params = {
    TableName,
    Key: {
      id
    }
  };

  return db.get(params);
}

export function createForm(args) {
  const params = {
    TableName,
    Item: {
      id: uuid(),
      name: args.name,
      description: args.description,
      questions: args.questions
    }
  };

  return db.createItem(params);
}

export function updateForm(args) {
  const params = {
    TableName,
    Key: {
      id: args.id
    },
    ExpressionAttributeValues: {
      ":name": args.name,
      ":description": args.description,
      ":questions": args.questions
    },
    UpdateExpression:
      "SET name = :name, description = :description, questions = :questions",
    ReturnValues: "ALL_NEW"
  };

  return db.updateItem(params, args);
}

export function deleteForm(args) {
  const params = {
    TableName,
    Key: {
      id: args.id
    }
  };

  return db.deleteItem(params, args);
}
