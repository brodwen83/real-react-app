import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import uniqueValidator from "mongoose-unique-validator";

// TODO: add uniqueness and email validation to email field
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true
    },
    passwordHash: { type: String, required: true },
    confirmed: { type: Boolean, default: false },
    confirmationToken: { type: String, default: "" }
  },
  { timestamps: true }
);

userSchema.methods.setPassword = function setPassword(password) {
  this.passwordHash = bcrypt.hashSync(password, 10);
};

userSchema.methods.setConfirmationToken = function setConfirmationToken() {
  this.confirmationToken = this.generateJWT();
};

userSchema.methods.generateConfirmationURL = function generateConfirmationURL() {
  return `${process.env.HOST}/confirmation/${this.confirmationToken}`;
};

userSchema.methods.isValidPassword = function isValidPassword(password) {
  return bcrypt.compareSync(password, this.passwordHash);
};

userSchema.methods.generateJWT = function generateJWT() {
  return jwt.sign(
    { email: this.email, confirmed: this.confirmed },
    process.env.JWT_SECRET
  );
};

userSchema.methods.toAuthJSON = function toAuthJSON() {
  return {
    email: this.email,
    confirmed: this.confirmed,
    token: this.generateJWT()
  };
};

userSchema.plugin(uniqueValidator, { message: "This email is already taken" });

export default mongoose.model("User", userSchema);
