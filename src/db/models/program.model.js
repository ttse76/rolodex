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
  programName: {
    type: String,
    required: true
  },
  company: {
    type: String
  },
  programType: {
    type: String
  },
  rewardType: {
    type: String
  }
}, { collection: 'programs' });

const Program = models.Program || model('Program', ProgramSchema);

export default Program;