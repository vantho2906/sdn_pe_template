import { RoleEnum } from "../utils/enums";

const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, require: true },
    role: { type: String, enum: Object.values(RoleEnum), default: RoleEnum.USER }, 
  },
  { timestamps: true }
);

const userModel = mongoose.model('User', userSchema);

export default userModel;
