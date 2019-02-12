import * as dbQuestionOptions from '../../../dynamo/questionOptions';

export default {
  Query: {
    questionOptions: () => dbQuestionOptions.getQuestionOptions(),
    questionOption: (_, args) => dbQuestionOptions.getQuestionOptionById(args.id),
  },
  Mutation: {
    createQuestionOption: (_, args) => dbQuestionOptions.createQuestionOption(args),
    updateQuestionOption: (_, args) => dbQuestionOptions.updateQuestionOption(args),
    deleteQuestionOption: (_, args) => dbQuestionOptions.deleteQuestionOption(args),
  },
  QuestionOption: {
  },
};
