import {
  Schema,
  model,
  models
} from 'mongoose';

const ProgramSchema = new Schema({
  id: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  },
  memberId: {
    type: String,
    required: true
  },
  programName: {
    type: String,
    required: true
  }
}, { collection: 'programs' });

const Program = models.Program || model('Program', ProgramSchema);

export default Program;