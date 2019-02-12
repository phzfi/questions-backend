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
    answerer(id: ID!): Answerer
  }

  type Mutation {
    updateAnswerer(
      id: ID!
      start_time: String
      end_time: String
    ): Answerer
  }
`;
