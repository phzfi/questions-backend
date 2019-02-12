export default `
  type Question {
    id: ID!
    sort_order: Int!
    content: String!
    published: Boolean!
    type: String!
    question_options: [QuestionOption]
  }

  type Query {
    questions: [Question]
    question(id: ID!): Question
  }

  type Mutation {
  }
`;
