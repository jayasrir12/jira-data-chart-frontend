import { Schema, model } from "mongoose";

export const projectSchema = new Schema({
  id: { type: String, required: true },
  key: { type: String, required: true },
  name: { type: String, required: true },
  avatarUrls: { type: Object, required: true },
  projectTypeKey: String,
  simplified: Boolean,
  style: String,
  isPrivate: Boolean,
});

export default model("Project", projectSchema);
