import * as dbAnswerers from '../../../dynamo/answerers';
import * as dbAnswers from '../../../dynamo/answers';
import * as dbForms from '../../../dynamo/forms';

export default {
  Query: {
    answerers: () => dbAnswerers.getAnswerers(),
    answerer: (_, args) => dbAnswerers.getAnswererById(args.id),
  },
  Mutation: {
    createAnswerer: (_, args) => dbAnswerers.createAnswerer(args),
    updateAnswerer: (_, args) => dbAnswerers.updateAnswerer(args),
    deleteAnswerer: (_, args) => dbAnswerers.deleteAnswerer(args),
  },
  Answerer: {
    form: answerer => dbForms.getFormById(
      answerer.form,
    ),
    answers: answerer => dbAnswers.getAnswersByAnswerer(
      answerer.id,
    ),
  },
};
