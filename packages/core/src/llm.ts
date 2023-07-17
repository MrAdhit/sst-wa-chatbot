import { OpenAI } from "langchain";
import { Config } from "sst/node/config";

export const LLM_MODEL = new OpenAI({
    temperature: 0,
    openAIApiKey: Config.OPENAI_API_KEY,
});
