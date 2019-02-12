export default `
  type QuestionOption {
    id: ID!
    sort_order: Int!
    text: String!
  }

  type Query {
    questionOptions: [QuestionOption]
    questionOption(id: ID!): QuestionOption
  }

  type Mutation {
  }
`;
