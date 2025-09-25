import { type InferSchemaType } from "mongoose";
import { userSchema } from "@/server/db/models/user-model";
import { projectSchema } from "@/server/db/models/project.model";
import { issueSchema } from "@/server/db/models/issue.model";

export type UserType = InferSchemaType<typeof userSchema>;
export type ProjectType = InferSchemaType<typeof projectSchema>;
export type IssueType = InferSchemaType<typeof issueSchema>;
