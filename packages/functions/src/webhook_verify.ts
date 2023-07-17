import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { Config } from "sst/node/config";

interface WebhookQuery {
    "hub.mode": string;
    "hub.verify_token": string;
    "hub.challenge": string;
}

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
    if (typeof event.queryStringParameters === "undefined") return { statusCode: 400 };

    let query: WebhookQuery = event.queryStringParameters as any;

    if (query["hub.mode"] !== "subscribe" && !query["hub.challenge"]) return { statusCode: 400 };
    if (query["hub.verify_token"] !== Config.WHATSAPP_WEBHOOK_SECRET) return { statusCode: 401 };

    return { statusCode: 200, body: query["hub.challenge"] };
};
