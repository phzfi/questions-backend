export default `
  type Question {
    id: ID!
    sort_order: Int!
    content: String!
    published: Boolean!
    type: String!
    score: Int
    question_options: [QuestionOption]
  }

  type Query {
    questions: [Question]
    question(id: ID!): Question
  }

  type Mutation {
    createQuestion(
      sort_order: Int!
      content: String!
      published: Boolean!
      type: String!
      score: Int
      question_options: [String]
    ): Question
    updateQuestion(
      id: ID!
      sort_order: Int!
      content: String!
      published: Boolean!
      type: String!
      score: Int
      question_options: [String]
    ): Question
    deleteQuestion(
      id: ID!
    ): Question
  }
`;
