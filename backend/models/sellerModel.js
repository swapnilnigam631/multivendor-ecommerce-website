import mongoose from 'mongoose';

const sellerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String, required: true, unique: true, index: true, dropDups: true,
  },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, required: true, default: false },
  gender:{type: String},
  phone:{type: String},
  address:{type:String},
});

const sellerModel = mongoose.model('Seller', sellerSchema);

export default sellerModel;
