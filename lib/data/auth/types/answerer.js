export default `
  type Answerer {
    id: ID!
    first_name: String!
    last_name: String!
    start_time: String
    end_time: String
    form: Form!
    answers: [Answer]
  }

  type Query {
    answerers: [Answerer]
    answerer(id: ID!): Answerer
  }

  type Mutation {
    createAnswerer(
      first_name: String!
      last_name: String!
      start_time: String
      end_time: String
      form: String!
      answers: [String]
    ): Answerer
    updateAnswerer(
      id: ID!
      first_name: String!
      last_name: String!
      start_time: String
      end_time: String
      form: String!
      answers: [String]
    ): Answerer
    deleteAnswerer(
      id: ID!
    ): Answerer
  }
`;
