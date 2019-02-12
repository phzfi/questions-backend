import * as dbAnswerers from '../../../dynamo/answerers';
import * as dbAnswers from '../../../dynamo/answers';
import * as dbForms from '../../../dynamo/forms';

export default {
  Query: {
    answerer: (_, args) => dbAnswerers.getAnswererById(args.id),
  },
  Mutation: {
    updateAnswerer: (_, args) => dbAnswerers.updateAnswerer(args),
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
