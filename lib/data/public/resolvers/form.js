import * as dbForms from '../../../dynamo/forms';
import * as dbQuestions from '../../../dynamo/questions';

export default {
  Query: {
    forms: () => dbForms.getForms(),
    form: (_, args) => dbForms.getFormById(args.id),
  },
  Mutation: {
  },
  Form: {
    questions: form => dbQuestions.getPublishedQuestionsByForm(
      form.id,
    ),
  },
};
