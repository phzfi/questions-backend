import * as dbAnswers from '../../../dynamo/answers';

export default {
  Query: {
    answers: () => dbAnswers.getAnswers(),
    answer: (_, args) => dbAnswers.getAnswerById(args.id),
  },
  Mutation: {
    createAnswer: (_, args) => dbAnswers.createAnswer(args),
    updateAnswer: (_, args) => dbAnswers.updateAnswer(args),
    deleteAnswer: (_, args) => dbAnswers.deleteAnswer(args),
  },
  Answer: {
  },
};
