import * as dbQuestions from '../../../dynamo/questions';
import * as dbQuestionOptions from '../../../dynamo/questionOptions';

export default {
  Query: {
    questions: () => dbQuestions.getPublishedQuestions(),
    question: (_, args) => dbQuestions.getPublishedQuestionById(args.id),
  },
  Mutation: {
  },
  Question: {
    question_options: question => dbQuestionOptions.getQuestionOptionsByQuestion(
      question.id,
    ),
  },
};
