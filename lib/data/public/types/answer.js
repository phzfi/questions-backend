export default `
  type Answer {
    id: ID!
    answerer: Answerer!
    question: Form!
    question_options: [QuestionOption]
    text: String
  }

  type Query {
    answers: [Answer]
    answer(id: ID!): Answer
  }

  type Mutation {
    createAnswer(
      answerer: String!
      question: String!
      question_options: [String]
      text: String
    ): Answer
    updateAnswer(
      id: ID!
      answerer: String!
      question: String!
      question_options: [String]
      text: String
    ): Answer
    deleteAnswer(
      id: ID!
    ): Answer
  }
`;
