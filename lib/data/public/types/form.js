export default `
  type Form {
    id: ID!
    name: String!
    description: String!
    questions: [Question]
  }

  type Query {
    forms: [Form]
    form(id: ID!): Form
  }

  type Mutation {
  }
`;
