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
    createForm(
      name: String!
      description: String!
      questions: [String]
    ): Form
    updateForm(
      id: ID!
      name: String!
      description: String!
      questions: [String]
    ): Form
    deleteForm(
      id: ID!
    ): Form
  }
`;
