import axios from "axios";
import configs from "../configs.ts";

const JiraHTTPService = axios.create({
  baseURL: configs.JIRA_BASE_URL,
  headers: {
    Authorization: `Basic ${Buffer.from(
      `${configs.JIRA_EMAIL}:${configs.JIRA_API_TOKEN}`
    ).toString("base64")}`,
  },
});
export default JiraHTTPService;
