import isJSON from "@sst-wa-chatbot/core/validator/is_json";

import { Whatsapp } from "@sst-wa-chatbot/core/whatsapp";
import { WebhookContact, WebhookMessage } from "@sst-wa-chatbot/core/types/whatsapp";

import { Context, UserContext } from "@sst-wa-chatbot/core/chat/context";
import Actions from "@sst-wa-chatbot/core/chat/action";

import { APIGatewayProxyHandlerV2 } from "aws-lambda";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
    if (typeof event.body === "undefined" || !isJSON(event.body)) return { statusCode: 400 };

    let content = JSON.parse(event.body)["entry"][0]["changes"][0]["value"];

    if (typeof content["contacts"] === "undefined") return { statusCode: 200 };

    let contact: WebhookContact = content["contacts"][0];
    let message: any = content["messages"][0];

    let user = Whatsapp.getUser(message.from);
    let userMessage = Whatsapp.getMessage(message.from, message.id);

    userMessage.read();

    if (!UserContext.has(message.from)) {
        UserContext.set(message.from, { context: Context.INITIAL });
    }

    let context = UserContext.get(message.from);
    console.log({ context });

    for (let action of Actions) {
        if (context?.context === action.context) {
            let nextContext = await action.function({
                contact,
                message,
                user,
                userMessage,
            });

            UserContext.set(message.from, nextContext);
        }
    }

    return { statusCode: 200 };
};
