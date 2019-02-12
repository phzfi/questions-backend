export default `
  type QuestionOption {
    id: ID!
    sort_order: Int!
    text: String!
    score: Int!
  }

  type Query {
    questionOptions: [QuestionOption]
    questionOption(id: ID!): QuestionOption
  }

  type Mutation {
    createQuestionOption(
      sort_order: Int!
      text: String!
      score: Int!
    ): QuestionOption
    updateQuestionOption(
      id: ID!
      sort_order: Int!
      text: String!
      score: Int!
    ): QuestionOption
    deleteQuestionOption(
      id: ID!
    ): QuestionOption
  }
`;
