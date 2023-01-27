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
  name: {
    type: String,
    required: true
  },
  rewardType: {
    type: String
  }
}, { collection: 'programs' });

const Program = models.Program || model('Program', ProgramSchema);

export default Program;