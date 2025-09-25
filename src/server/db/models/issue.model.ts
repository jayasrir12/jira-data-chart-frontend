import { Schema, model } from "mongoose";

export const issueSchema = new Schema({
  id: { type: String, required: true },
  key: { type: String, required: true },
  projectKey: { type: String, required: true },
  summary: String,
  status: Object,
  priority: Object,
  assignee: Object,
  reporter: Object,
});

export default model("Issue", issueSchema);
