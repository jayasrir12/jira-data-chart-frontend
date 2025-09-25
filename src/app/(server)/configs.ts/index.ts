import z from "zod";

const env = z
  .object({
    PORT: z.string(),
    MONGO_URI: z.string(),
    JIRA_EMAIL: z.string(),
    JIRA_API_TOKEN: z.string(),
    JIRA_BASE_URL: z.string(),
  })
  .catch((e) => {
    console.error("Environment variable validation error:", e);
    throw e;
  });

export default env.parse(process.env);
