import { LLM_MODEL } from "@sst-wa-chatbot/core/llm";

import { APIGatewayProxyHandlerV2 } from "aws-lambda";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
    if (typeof event.body === "undefined") return { statusCode: 400 };

    let chatContent = event.body;

    let result = await LLM_MODEL.call(chatContent);

    return {
        statusCode: 200,
        body: result,
    };
};
