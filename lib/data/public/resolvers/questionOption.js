import * as dbQuestionOptions from '../../../dynamo/questionOptions';

export default {
  Query: {
    questionOptions: () => dbQuestionOptions.getQuestionOptions(),
    questionOption: (_, args) => dbQuestionOptions.getQuestionOptionById(args.id),
  },
  Mutation: {
  },
  QuestionOption: {
  },
};
