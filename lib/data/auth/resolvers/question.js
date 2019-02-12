import * as dbQuestions from '../../../dynamo/questions';
import * as dbQuestionOptions from '../../../dynamo/questionOptions';

export default {
  Query: {
    questions: () => dbQuestions.getQuestions(),
    question: (_, args) => dbQuestions.getQuestionById(args.id),
  },
  Mutation: {
    createQuestion: (_, args) => dbQuestions.createQuestion(args),
    updateQuestion: (_, args) => dbQuestions.updateQuestion(args),
    deleteQuestion: (_, args) => dbQuestions.deleteQuestion(args),
  },
  Question: {
    question_options: question => dbQuestionOptions.getQuestionOptionsByQuestion(
      question.id,
    ),
  },
};
