import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  email: String,
  password: String,
  role: {
    type: String,
    default: "Customer",
  },
  active: {
    type: Boolean,
    default: true,
  },
});

const Users = mongoose.model("Users", usersSchema);

export default Users;