import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String, required: true, unique: true, index: true, dropDups: true,
  },
  password: { type: String, required: true },
 phone1: { type: String},
  isAdmin: { type: Boolean, required: true, default: false },
});

const userModel = mongoose.model('User', userSchema);

export default userModel;
 