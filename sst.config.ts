import { SSTConfig } from "sst";
import { ChatbotStack } from "./stacks/ChatbotStack";

export default {
  config(_input) {
    return {
      name: "sst-wa-chatbot",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(ChatbotStack);
  }
} satisfies SSTConfig;
