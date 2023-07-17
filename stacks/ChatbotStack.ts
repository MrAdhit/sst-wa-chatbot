import { Api, Config, StackContext } from "sst/constructs";

export function ChatbotStack({ stack }: StackContext) {
    const VERSION = new Config.Parameter(stack, "VERSION", {
        value: "0.0.0",
    });

    const OPENAI_API_KEY = new Config.Secret(stack, "OPENAI_API_KEY");
    const SERPAPI_API_KEY = new Config.Secret(stack, "SERPAPI_API_KEY");

    const WHATSAPP_ACCESS_TOKEN = new Config.Secret(stack, "WHATSAPP_ACCESS_TOKEN");
    const WHATSAPP_PHONE_ID = new Config.Secret(stack, "WHATSAPP_PHONE_ID");
    const WHATSAPP_WEBHOOK_SECRET = new Config.Secret(stack, "WHATSAPP_WEBHOOK_SECRET");

    const api = new Api(stack, "Api", {
        routes: {
            "GET /": "packages/functions/src/version.handler",
            "GET /webhook": "packages/functions/src/webhook_verify.handler",
            "POST /webhook": "packages/functions/src/webhook.handler",
        },
    });

    api.bind([VERSION, OPENAI_API_KEY, SERPAPI_API_KEY, WHATSAPP_ACCESS_TOKEN, WHATSAPP_PHONE_ID, WHATSAPP_WEBHOOK_SECRET]);

    stack.addOutputs({
        ApiEndpoint: api.url,
    });
}
