import { type InferSchemaType } from "mongoose";
import { userSchema } from "@/server/db/models/user-model";

export type UserType = InferSchemaType<typeof userSchema>;
