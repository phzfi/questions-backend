import * as dbForms from '../../../dynamo/forms';
import * as dbQuestions from '../../../dynamo/questions';

export default {
  Query: {
    forms: () => dbForms.getForms(),
    form: (_, args) => dbForms.getFormById(args.id),
  },
  Mutation: {
    createForm: (_, args) => dbForms.createForm(args),
    updateForm: (_, args) => dbForms.updateForm(args),
    deleteForm: (_, args) => dbForms.deleteForm(args),
  },
  Form: {
    questions: form => dbQuestions.getQuestionsByFormId(
      form.id,
    ),
  },
};
