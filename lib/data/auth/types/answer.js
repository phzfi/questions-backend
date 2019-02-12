export default `
  type Answer {
    id: ID!
    answerer: Answerer!
    question: Form!
    question_options: [QuestionOption]
    text: String
    score: Int
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
      score: Int
    ): Answer
    updateAnswer(
      id: ID!
      answerer: String!
      question: String!
      question_options: [String]
      text: String
      score: Int
    ): Answer
    deleteAnswer(
      id: ID!
    ): Answer
  }
`;
